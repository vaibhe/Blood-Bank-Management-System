package com.admin.demo.model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Patients {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "user_seq", sequenceName = "user_sequence", initialValue = 1001, allocationSize = 1)
    private long patientId;

    private String patientFullName;
    private String bloodGroup;
    private String gender;
    private String email;
    private String phoneNo;
    private String registration_Date;


    public Patients(long patientId, String patientFullName, String bloodGroup, String gender, String email, String phoneNo, String registration_Date) {
        this.patientId = patientId;
        this.patientFullName = patientFullName;
        this.bloodGroup = bloodGroup;
        this.gender = gender;
        this.email = email;
        this.phoneNo = phoneNo;
        this.registration_Date = registration_Date;
    }

    public Patients() {
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public long getPatientId() {
        return patientId;
    }

    public void setPatientId(long patientId) {
        this.patientId = patientId;
    }

    public String getPatientFullName() {
        return patientFullName;
    }

    public void setPatientFullName(String patientFullName) {
        this.patientFullName = patientFullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getRegistration_Date() {
        return registration_Date;
    }

    public void setRegistration_Date(String registration_Date) {
        this.registration_Date = registration_Date;
    }

    @Override
    public String toString() {
        return "Patients{" +
                "patientId=" + patientId +
                ", patientFullName='" + patientFullName + '\'' +
                ", bloodGroup='" + bloodGroup + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", phoneNo='" + phoneNo + '\'' +
                ", registration_Date='" + registration_Date + '\'' +
                '}';
    }
}
