package com.admin.demo.model;


import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Donors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "user_seq", sequenceName = "user_sequence", initialValue = 100, allocationSize = 1)
    private long donorId;
     private String donorFullName;
     private String bloodGroup;
     private String gender;
     private String email;
     private String phoneNo;
     private String registration_Date;

    public Donors() {
    }

    public Donors(long donorId, String donorFullName, String bloodGroup, String gender, String email, String phoneNo, String registration_Date) {
        this.donorId = donorId;
        this.donorFullName = donorFullName;
        this.bloodGroup = bloodGroup;
        this.gender = gender;
        this.email = email;
        this.phoneNo = phoneNo;
        this.registration_Date = registration_Date;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public void setDonorId(long donorId) {
        this.donorId = donorId;
    }

    public void setDonorFullName(String donorFullName) {
        this.donorFullName = donorFullName;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public void setRegistration_Date(String registration_Date) {
        this.registration_Date = registration_Date;
    }

    public long getDonorId() {
        return donorId;
    }

    public String getDonorFullName() {
        return donorFullName;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public String getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public String getRegistration_Date() {
        return registration_Date;
    }

    @Override
    public String toString() {
        return "Donors{" +
                "donorId=" + donorId +
                ", donorFullName='" + donorFullName + '\'' +
                ", bloodGroup='" + bloodGroup + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", phoneNo='" + phoneNo + '\'' +
                ", registration_Date='" + registration_Date + '\'' +
                '}';
    }
}
