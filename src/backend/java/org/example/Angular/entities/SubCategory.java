package org.example.Angular.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.Angular.other.CategoryDeserializer;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne()
    @JoinColumn(name = "category")
    @JsonDeserialize(using = CategoryDeserializer.class)
    private Category category;

    @JsonBackReference
    @OneToMany(mappedBy = "subCategory")
    private Set<Item> items = new HashSet<>();

    public SubCategory(String name) {
        this.name = name;
    }
}