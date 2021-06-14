package org.example.Angular.controllers;

import org.example.Angular.entities.SubCategory;
import org.example.Angular.services.SubCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("subcategories")
public class SubCategoryController {

    private final SubCategoryService subcategoryService;

    public SubCategoryController(SubCategoryService subcategoryService) {
        this.subcategoryService = subcategoryService;
    }

    @GetMapping("/all")
    public List<SubCategory> getSubCategories(){

        return subcategoryService.getAllSubCategories();
    }

    @GetMapping("/{name}")
    public ResponseEntity<SubCategory> getSubCategory(@PathVariable String name){

        return new ResponseEntity<>(subcategoryService.getSubCategoryByName(name), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SubCategory> addSubCategory(
            @RequestParam String name,
            @RequestParam int categoryId,
            @RequestParam(required = false) MultipartFile image){

        return new ResponseEntity<>(subcategoryService.addSubCategory(name, categoryId, image), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<SubCategory> updateSubCategory(
            @PathVariable int id,
            @RequestParam String name,
            @RequestParam int categoryId,
            @RequestParam(required = false) MultipartFile image){

        return new ResponseEntity<>(subcategoryService.updateSubCategory(id, name, categoryId, image), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{subcategory}")
    public ResponseEntity<?> deleteSubCategory(@PathVariable SubCategory subcategory){
        subcategoryService.deleteSubCategory(subcategory);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}