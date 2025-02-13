package com.admin.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.admin.demo.dto.SigninResponse;

import com.admin.demo.model.User;

import com.admin.demo.repo.UserRepository;
import com.admin.demo.security.JwtUtils;
import com.admin.demo.service.UserService;



@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authMgr;

    @Autowired
    private UserRepository userRepository;



    @Autowired
    private PasswordEncoder passwordEncoder;

    // sign up
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public ResponseEntity<?> userSignup( @RequestBody  User u) {
        System.out.println("in sign up " + u);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userService.userRegistration(u));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser( @RequestBody User usr) {
        System.out.println("in sign in" + usr);

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(usr.getEmail(), usr.getPassword());
        User user = userRepository.findByEmail(usr.getEmail()).orElseThrow();
        System.out.println(user);

        Authentication verifiedToken = authMgr.authenticate(token);
        String jwt = jwtUtils.generateJwtToken(verifiedToken);

        // Retrieve role from the authenticated user
        String role = verifiedToken.getAuthorities().stream()
                .map(grantedAuthority -> grantedAuthority.getAuthority())
                .findFirst()
                .orElse("UNKNOWN");



        // Add the role to the response
        SigninResponse resp = new SigninResponse(jwt, "Successful Auth!!!!", role, user.getUserId(),user);


        return ResponseEntity.status(HttpStatus.CREATED)
                .body(resp);

    }




}