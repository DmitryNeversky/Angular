package org.example.Angular.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String password;
    private String ip;
    private boolean isAuth;
    private Role role;

    @ManyToMany
    @JoinTable(name = "user_wishlist_item",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id"))
    private Set<Item> wishList = new HashSet<>();

    public User() { }

    public User(String ip) {
        this.ip = ip;
    }

    public User(String ip, Item item) {
        this.ip = ip;
        this.addIntoWishList(item);
    }

    public User(String name, String password, Role role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }

    public int getId() {
        return id;
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

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public boolean isAuth() {
        return isAuth;
    }

    public void setAuth(boolean auth) {
        isAuth = auth;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Set<Item> getWishList() {
        return wishList;
    }

    public void addIntoWishList(Item item){
        this.getWishList().add(item);
    }

    public void removeFromWishList(Item item){
        this.getWishList().remove(item);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", ip='" + ip + '\'' +
                ", isAuth=" + isAuth +
                ", role=" + role +
                ", wishList=" + wishList +
                '}';
    }
}
