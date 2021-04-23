package org.example.Angular.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.Angular.other.SubCategoryDeserializer;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private double price;
    private int count;

    @ManyToOne
    @JoinColumn(name = "subCategory")
    @JsonDeserialize(using = SubCategoryDeserializer.class)
    private SubCategory subCategory;

    @ElementCollection
    @CollectionTable(name = "image", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "filename")
    private Set<String> images = new HashSet<>();

    public Item(String name, String description, double price, int count, SubCategory subCategory) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
        this.subCategory = subCategory;
    }
}