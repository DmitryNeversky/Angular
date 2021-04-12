package org.example.Angular.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

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

    @OneToMany(mappedBy = "subCategory")
    private List<Item> itemList;

    private int categoryId;

    public SubCategory(String name, List<Item> itemList, int categoryId) {
        this.name = name;
        this.itemList = itemList;
        this.categoryId = categoryId;
    }
}
