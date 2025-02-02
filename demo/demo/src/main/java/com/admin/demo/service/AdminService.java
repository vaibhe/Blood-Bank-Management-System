package com.admin.demo.service;

import com.admin.demo.model.Admin;
import com.admin.demo.repo.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
   @Autowired
    AdminRepository repo;

    public List<Admin> getAdmins(){
        return repo.findAll();
    }

    public Admin getAdminsByid(int myid) {
        return repo.findById(myid).orElse(new Admin());
    }

    public void addAdmin(Admin admin) {
        repo.save(admin);
    }

    public void deleteAdmin(int adminId) {
        repo.deleteById(adminId);
    }

    public void updateAdmin(Admin admin) {
        repo.save(admin);
    }


}

