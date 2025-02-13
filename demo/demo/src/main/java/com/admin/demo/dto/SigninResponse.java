package com.admin.demo.dto;

import com.admin.demo.model.User;

public class SigninResponse {
    private String jwt;
    private String mesg;
    private String role; // Add role to the response
    private Long userId;
    private User user;

    public SigninResponse(String jwt, String mesg, String role, Long userId, User user) {
        this.jwt = jwt;
        this.mesg = mesg;
        this.role = role;
        this.userId = userId;
        this.user = user;
    }

    public SigninResponse() {
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getMesg() {
        return mesg;
    }

    public void setMesg(String mesg) {
        this.mesg = mesg;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
