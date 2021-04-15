package org.example.Angular.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.example.Angular.other.CategoryDeserializer;

import javax.persistence.*;

@Entity
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne(cascade = { CascadeType.REFRESH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.DETACH })
    @JoinColumn(name = "category")
    @JsonDeserialize(using = CategoryDeserializer.class)
    private Category category;

    public SubCategory() { }

    public SubCategory(String name, Category category) {
        this.name = name;
        this.category = category;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "SubCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + category +
                '}';
    }
}