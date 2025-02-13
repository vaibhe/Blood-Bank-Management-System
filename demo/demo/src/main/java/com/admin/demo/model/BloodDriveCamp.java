package com.admin.demo.model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.time.LocalTime;
import java.time.LocalDate;


@Component
@Entity
public class BloodDriveCamp {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long campId; // Unique ID for each camp

    @Column(nullable = false)
    private String campName; // Name of the blood drive/camp

    @Column(nullable = false)
    private String organizer; // Name of the organizer or hosting organization

    @Column(nullable = false)
    private String location; // Address or venue of the camp

    @Column(nullable = false)
    private LocalDate date; // Date on which the camp will be hosted

    @Column(nullable = false)
    private LocalTime startTime; // Start time of the camp

    @Column(nullable = false)
    private LocalTime endTime; // End time of the camp

    @Column(nullable = false)
    private String contactPersonName; // Name of the contact person

    @Column(nullable = false, length = 15)
    private String contactPhone; // Contact phone number

    @Column(nullable = false)
    private String email; // Contact email address

    @Column(length = 500)
    private String description; // Additional details or purpose of the blood drive

    // Getters and Setters
    public Long getCampId() {
        return campId;
    }

    public void setCampId(Long campId) {
        this.campId = campId;
    }

    public String getCampName() {
        return campName;
    }

    public void setCampName(String campName) {
        this.campName = campName;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public String getContactPersonName() {
        return contactPersonName;
    }

    public void setContactPersonName(String contactPersonName) {
        this.contactPersonName = contactPersonName;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "BloodDriveCamp{" +
                "campId=" + campId +
                ", campName='" + campName + '\'' +
                ", organizer='" + organizer + '\'' +
                ", location='" + location + '\'' +
                ", date=" + date +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", contactPersonName='" + contactPersonName + '\'' +
                ", contactPhone='" + contactPhone + '\'' +
                ", email='" + email + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
