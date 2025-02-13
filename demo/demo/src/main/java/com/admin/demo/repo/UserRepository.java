package com.admin.demo.repo;

import com.admin.demo.model.Role;
import com.admin.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    public List<User> findByRole(Role role);
}
