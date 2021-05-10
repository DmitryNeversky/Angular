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
    public ResponseEntity<Category> addCategory(@RequestParam String name){

        return new ResponseEntity<>(categoryService.addCategory(name), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateCategory(
            @PathVariable int id,
            @RequestParam(required = false) String name){

        return new ResponseEntity<>(categoryService.updateCategory(id, name), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{category}")
    public ResponseEntity<?> deleteCategory(@PathVariable Category category){
        categoryService.deleteCategory(category);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
