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

    private int categoryId;

    public SubCategory() { }

    public SubCategory(String name, List<Item> itemList, int categoryId) {
        this.name = name;
        this.itemList = itemList;
        this.categoryId = categoryId;
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

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public String toString() {
        return "SubCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", itemList=" + itemList +
                ", categoryId=" + categoryId +
                '}';
    }
}
