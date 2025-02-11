package com.RideShare.CarPool.DTO;

import com.RideShare.CarPool.Entities.User;
public class AuthResponse {
    private String token;
    private User user;  // Include the user entity

    public AuthResponse(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public User getUser() {
        return user;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
