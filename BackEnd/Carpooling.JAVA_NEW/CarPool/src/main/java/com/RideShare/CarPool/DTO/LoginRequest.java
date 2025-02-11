package com.RideShare.CarPool.DTO;

public class LoginRequest {
    private String contactNo;
    private String password;

    public String getContactNo() {  // Change from getContactno() to getContactNo()
        return contactNo;
    }

    public void setContactNo(String contactNo) {  // Change from setContactno() to setContactNo()
        this.contactNo = contactNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
