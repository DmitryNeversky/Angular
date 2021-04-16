package org.example.Angular.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.Angular.other.CategoryDeserializer;

import javax.persistence.*;
import java.util.List;

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
    private List<Item> items;

    public SubCategory(String name) {
        this.name = name;
    }
}