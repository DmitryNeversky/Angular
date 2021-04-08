package org.example.Angular.controllers;

import org.example.Angular.entities.Category;
import org.example.Angular.servies.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/all")
    public List<Category> getCategories(){

        return categoryService.getAllCategories();
    }

    @PostMapping("/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){

        categoryService.addCategory(category);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{category}")
    public ResponseEntity<?> deleteCategory(@PathVariable Category category){
        categoryService.deleteCategory(category);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        categoryService.updateCategory(category);

        return new ResponseEntity<>(category, HttpStatus.OK);
    }
}
