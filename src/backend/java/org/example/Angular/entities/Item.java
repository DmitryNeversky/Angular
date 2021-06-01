package org.example.Angular.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private double price;
    private int count;

    private int subCategory;

    @ElementCollection
    @CollectionTable(name = "image", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "filename")
    private Set<String> images = new HashSet<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> looks = new ArrayList<>();

//  Constructors

    public Item() { }

    public Item(String name, String description, double price, int count, int subCategory) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
        this.subCategory = subCategory;
    }

//  Getters & Setters

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(int subCategory) {
        this.subCategory = subCategory;
    }

    public Set<String> getImages() {
        return images;
    }

    public void addImage(String name){
        images.add(name);
    }

    public List<String> getLooks() {
        return looks;
    }

    public void addLook(String ip){
        getLooks().add(ip);
    }
}