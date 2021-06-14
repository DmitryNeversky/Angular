package org.example.Angular.models;

public class Mail {

    private String email;
    private String name;
    private String phone;
    private String message;

    public Mail(String email, String name, String phone, String message) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.message = message;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getMessage() {
        return message;
    }
}
