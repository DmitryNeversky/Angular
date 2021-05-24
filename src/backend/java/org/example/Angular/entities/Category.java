package org.example.Angular.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.example.Angular.other.EntityIdResolver;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        resolver = EntityIdResolver.class,
        scope = Category.class)
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String image;

    @OneToMany(mappedBy = "category")
    private Set<SubCategory> subCategories = new HashSet<>();

//  Constructors

    public Category() { }

    public Category(String name) {
        this.name = name;
    }

    public Category(String name, String image) {
        this.name = name;
        this.image = image;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<SubCategory> getSubCategories() {
        return subCategories;
    }

    public void addSubCategory(SubCategory subCategory){
        subCategories.add(subCategory);
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}