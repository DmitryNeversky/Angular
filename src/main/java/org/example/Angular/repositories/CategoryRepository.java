package org.example.Angular.repositories;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
