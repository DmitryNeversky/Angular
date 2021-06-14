package org.example.Angular.controllers;

import org.example.Angular.entities.Subcategory;
import org.example.Angular.services.SubcategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("subcategories")
public class SubcategoryController {

    private final SubcategoryService subcategoryService;

    public SubcategoryController(SubcategoryService subcategoryService) {
        this.subcategoryService = subcategoryService;
    }

    @GetMapping("/all")
    public List<Subcategory> getSubcategories() {

        return subcategoryService.getAllSubCategories();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Subcategory> getSubcategory(@PathVariable String name) {

        return new ResponseEntity<>(subcategoryService.getSubcategoryByName(name), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Subcategory> addSubcategory(
            @RequestParam String name,
            @RequestParam int categoryId,
            @RequestParam(required = false) MultipartFile image) {

        return new ResponseEntity<>(subcategoryService.addSubcategory(name, categoryId, image), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Subcategory> updateSubcategory(
            @PathVariable int id,
            @RequestParam String name,
            @RequestParam int categoryId,
            @RequestParam(required = false) MultipartFile image) {

        return new ResponseEntity<>(subcategoryService.updateSubcategory(id, name, categoryId, image), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{subcategory}")
    public ResponseEntity<?> deleteSubcategory(@PathVariable Subcategory subcategory) {
        subcategoryService.deleteSubcategory(subcategory);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}