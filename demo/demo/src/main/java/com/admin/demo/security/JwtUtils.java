package com.admin.demo.security;

import java.security.Key;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import com.admin.demo.model.Role;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class JwtUtils {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${SECRET_KEY}")
    private String jwtSecret;

    @Value("${EXP_TIMEOUT}")
    private int jwtExpirationMs;

    private Key key;

    @PostConstruct
    public void init() {
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public String generateJwtToken(Authentication authentication) {
        CustomUserDetails userPrincipal = (CustomUserDetails) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .claim("role", userPrincipal.getUser().getRole().toString()) // Add role to claims
                .claim("user_id", userPrincipal.getUser().getUserId())
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public String getUserNameFromJwtToken(Claims claims) {
        return claims.getSubject();
    }

    public Claims validateJwtToken(String jwtToken) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwtToken)
                .getBody();
    }

    public Role getRoleFromJwtToken(Claims claims) {
        return Role.valueOf((String) claims.get("role")); // Fetch role from claims
    }

    public Authentication populateAuthenticationTokenFromJWT(String jwt) {
        Claims payloadClaims = validateJwtToken(jwt);
        String email = getUserNameFromJwtToken(payloadClaims);
        Role role = getRoleFromJwtToken(payloadClaims);
        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(role.toString());

        Long userId = Long.valueOf((int) payloadClaims.get("user_id"));
        return new UsernamePasswordAuthenticationToken(email, userId, authorities);
    }
}
