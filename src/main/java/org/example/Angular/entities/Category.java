package org.example.Angular.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(mappedBy = "category", cascade = { CascadeType.REFRESH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.DETACH })
    private List<SubCategory> subCategoryList;

    public Category(String name, List<SubCategory> subCategoryList) {
        this.name = name;
        this.subCategoryList = subCategoryList;
    }
}
