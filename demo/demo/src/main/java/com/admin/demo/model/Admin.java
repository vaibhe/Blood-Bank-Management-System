package com.admin.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import org.springframework.stereotype.Component;


@Component
@Entity
public class Admin {
    @Id
   private int adminId;
    private String name;
   private String password;
   private String gender;

    public Admin() {
    }

    public Admin(int adminId, String name, String password, String gender) {
        this.adminId = adminId;
        this.name = name;
        this.password = password;
        this.gender = gender;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Admins{" +
                "adminId =" + adminId +
                ", adminName =" + name + '\'' +
                ", adminPassword =" + password +
                ", gender =" + gender +
                '}';
    }


}
