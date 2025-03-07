package com.admin.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BloodStocks {

    @Id
    private String bloodType;
    private long quantity;
    private String registration_Date;

    public BloodStocks() {
    }

    public BloodStocks(String bloodType, long quantity, String registration_Date) {
        this.bloodType = bloodType;
        this.quantity = quantity;
        this.registration_Date = registration_Date;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public String getRegistration_Date() {
        return registration_Date;
    }

    public void setRegistration_Date(String registration_Date) {
        this.registration_Date = registration_Date;
    }

    @Override
    public String toString() {
        return "BloodStocks{" +
                "bloodType='" + bloodType + '\'' +
                ", quantity=" + quantity +
                ", registration_Date='" + registration_Date + '\'' +
                '}';
    }
}
