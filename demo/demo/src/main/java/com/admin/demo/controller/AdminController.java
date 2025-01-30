package com.admin.demo.controller;

import com.admin.demo.model.Admin;
import com.admin.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    AdminService service;




    @CrossOrigin(origins = "http://localhost:3000") // Allow only this origin
    @GetMapping("/admins")
    public List<Admin> getAll(){
        return service.getAdmins();
    }

    @GetMapping("/admins/{myid}")
    public Admin getAdminByid(@PathVariable int myid){
        return service.getAdminsByid(myid);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/admins")
    public void addAdmin(@RequestBody  Admin admin){
        System.out.println(admin);
        service.addAdmin(admin);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/admins")
    public void updateAdmin(@RequestBody  Admin admin){
        service.updateAdmin(admin);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/admins/{adminId}")
    public void deleteAdmin(@PathVariable int adminId){
        service.deleteAdmin(adminId);

    }

}
