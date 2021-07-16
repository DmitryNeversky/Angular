package org.example.Angular.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Meta {

    @Id
    private int id;

    private int homePopularSize;
    private String password;

    @OneToMany
    @JoinColumn(name = "category_id")
    private List<Category> homeCollection = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "item_id")
    private List<Item> homePopularItems = new ArrayList<>();

    public Meta() {
    }

    public Meta(int id, String password) {
        this.id = id;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Category> getHomeCollection() {
        return homeCollection;
    }

    public void setHomeCollection(List<Category> homeCollection) {
        this.homeCollection = homeCollection;
    }

    public List<Item> getHomePopularItems() {
        return homePopularItems;
    }

    public void setHomePopularItems(List<Item> homePopularItems) {
        this.homePopularItems = homePopularItems;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getHomePopularSize() {
        return homePopularSize;
    }

    public void setHomePopularSize(int homePopularSize) {
        this.homePopularSize = homePopularSize;
    }
}
