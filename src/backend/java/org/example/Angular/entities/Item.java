package org.example.Angular.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
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

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JsonManagedReference
    private SubCategory subCategory;

    @ElementCollection
    @CollectionTable(name = "image", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "filename")
    private Set<String> images = new HashSet<>();

//  Constructors

    public Item() { }

    public Item(String name, String description, double price, int count, SubCategory subCategory) {
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

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }

    public Set<String> getImages() {
        return images;
    }

    public void addImage(String name){
        images.add(name);
    }
}