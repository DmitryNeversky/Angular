package org.example.Angular.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @OneToMany(mappedBy = "subCategory")
    private List<Item> itemList;

    @ManyToOne(cascade = CascadeType.REFRESH)
    private Category category;

    public SubCategory() { }

    public SubCategory(String name, List<Item> itemList, Category category) {
        this.name = name;
        this.itemList = itemList;
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

    public List<Item> getItemList() {
        return itemList;
    }

    public void setItemList(List<Item> itemList) {
        this.itemList = itemList;
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
                ", itemList=" + itemList +
                ", category=" + category +
                '}';
    }
}
