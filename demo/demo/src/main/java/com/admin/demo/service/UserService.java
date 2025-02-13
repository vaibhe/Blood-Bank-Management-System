package com.admin.demo.service;

import com.admin.demo.model.Role;
import com.admin.demo.model.User;


import java.util.List;


public interface UserService {
    User userRegistration(User u);

    List<User> getAllUsers();

    User getUserById(Long id);

    User updateUser(Long id, User updatedUser);

    void deleteUser(Long id);

    List<User> getUsersByRole(Role role);

}
