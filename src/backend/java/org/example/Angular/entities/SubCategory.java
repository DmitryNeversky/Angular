package org.example.Angular.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class
)
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne
    private Category category;

    @OneToMany(mappedBy = "subCategory")
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
                ", category=" + category +
                ", items=" + items +
                '}';
    }
}