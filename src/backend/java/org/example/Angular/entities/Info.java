package org.example.Angular.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Info {

    @Id
    private int id;

    private String email;
    private String phone;
    private String whatsapp;
    private String address;

    public Info(int id) {
        this.id = id;
    }

    public Info() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
