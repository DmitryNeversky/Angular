package org.example.Angular.controllers;

import org.example.Angular.entities.Category;
import org.example.Angular.services.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getCategories() {

        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Category> getCategory(@PathVariable String name) {

        return new ResponseEntity<>(categoryService.getCategoryByName(name), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Category> addCategory(@RequestParam String name,
                                                @RequestParam(required = false) MultipartFile image) {

        return new ResponseEntity<>(categoryService.addCategory(name, image), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateCategory(
            @PathVariable int id,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String removeImage,
            @RequestParam(required = false) MultipartFile image) {

        return new ResponseEntity<>(categoryService.updateCategory(id, name, removeImage, image), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{category}")
    public ResponseEntity<?> deleteCategory(@PathVariable Category category) {
        categoryService.deleteCategory(category);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
