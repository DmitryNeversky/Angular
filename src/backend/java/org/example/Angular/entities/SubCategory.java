package org.example.Angular.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonManagedReference
    private Category category;

    @OneToMany(mappedBy = "subCategory")
    @JsonBackReference
    private Set<Item> items = new HashSet<>();

//  Constructors

    public SubCategory() { }

    public SubCategory(String name) {
        this.name = name;
    }

    public SubCategory(String name, Category category) {
        this.name = name;
        this.category = category;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Item> getItems() {
        return items;
    }

    public void addItem(Item item){
        items.add(item);
    }

    @Override
    public String toString() {
        return "SubCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", items=" + items +
                '}';
    }
}