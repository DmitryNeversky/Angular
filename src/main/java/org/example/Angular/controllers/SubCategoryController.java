package org.example.Angular.controllers;

import org.example.Angular.entities.SubCategory;
import org.example.Angular.servies.SubCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    public ResponseEntity<SubCategory> addSubCategory(@RequestBody SubCategory subCategory){

        return new ResponseEntity<>(subCategoryService.addSubCategory(subCategory), HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<SubCategory> updateSubCategory(@RequestBody SubCategory subCategory){

        return new ResponseEntity<>(subCategoryService.updateSubCategory(subCategory), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{subCategory}")
    public ResponseEntity<?> deleteSubCategory(@PathVariable SubCategory subCategory){
        subCategoryService.deleteSubCategory(subCategory);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}