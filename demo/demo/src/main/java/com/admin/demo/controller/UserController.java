package com.admin.demo.controller;

import com.admin.demo.model.User;
import com.admin.demo.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController


public class UserController {
    @Autowired
     UserRepository userrepo;

    @GetMapping("/api")
    public List<User> getAll(){
        return userrepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // Save the user to the database
       userrepo.save(user);
        return "User saved successfully";
    }
}
