package com.admin.demo.security;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.admin.demo.model.User;
import com.admin.demo.repo.UserRepository;



@Service
@Transactional

public class CustomUserDetailsService implements UserDetailsService {
	// depcy
	private UserRepository userEntityRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		User user = userEntityRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Invalid Email !!!"));
		return new CustomUserDetails(user);


	}

	public CustomUserDetailsService(UserRepository userEntityRepository) {
		this.userEntityRepository = userEntityRepository;
	}
}
