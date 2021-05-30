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

    private final SubCategoryService subCategoryService;

    public SubCategoryController(SubCategoryService subCategoryService) {
        this.subCategoryService = subCategoryService;
    }

    @GetMapping("/all")
    public List<SubCategory> getSubCategories(){

        return subCategoryService.getAllSubCategories();
    }

    @GetMapping("/{name}")
    public ResponseEntity<SubCategory> getSubCategory(@PathVariable String name){

        return new ResponseEntity<>(subCategoryService.getSubCategoryByName(name), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SubCategory> addSubCategory(
            @RequestParam String name,
            @RequestParam int categoryId,
            @RequestParam(required = false) MultipartFile image){

        return new ResponseEntity<>(subCategoryService.addSubCategory(name, categoryId, image), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<SubCategory> updateSubCategory(
            @PathVariable int id,
            @RequestParam String name,
            @RequestParam int categoryId,
            @RequestParam(required = false) MultipartFile image){

        return new ResponseEntity<>(subCategoryService.updateSubCategory(id, name, categoryId, image), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{subCategory}")
    public ResponseEntity<?> deleteSubCategory(@PathVariable SubCategory subCategory){
        subCategoryService.deleteSubCategory(subCategory);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}