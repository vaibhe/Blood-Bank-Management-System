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



    @GetMapping("/admins")
    public List<Admin> getAll(){
        return service.getAdmins();
    }

    @GetMapping("/admins/{myid}")
    public Admin getAdminByid(@PathVariable int myid){
        return service.getAdminsByid(myid);
    }

    @PostMapping("/admins")
    public void addAdmin(@RequestBody  Admin admin){
        System.out.println(admin);
        service.addAdmin(admin);
    }

    @PutMapping("/admins")
    public void updateAdmin(@RequestBody  Admin admin){
        service.updateAdmin(admin);
    }

    @DeleteMapping("/admins/{adminId}")
    public void deleteAdmin(@PathVariable int adminId){
        service.deleteAdmin(adminId);

    }

}
