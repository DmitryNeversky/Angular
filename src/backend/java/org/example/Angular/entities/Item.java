package org.example.Angular.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.Angular.other.SubCategoryDeserializer;

import javax.persistence.*;

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
}