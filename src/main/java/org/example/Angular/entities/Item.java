package org.example.Angular.entities;

import javax.persistence.*;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;
    private double price;
    private int count;

    @ManyToOne(cascade = CascadeType.REFRESH)
    private SubCategory subCategory;

    public Item() { }

    public Item(String title, String description, double price, int count, SubCategory subCategory) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.count = count;
        this.subCategory = subCategory;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", count=" + count +
                ", subCategory=" + subCategory +
                '}';
    }
}
