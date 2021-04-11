package org.example.Angular.controllers;

import org.example.Angular.entities.SubCategory;
import org.example.Angular.servies.CategoryService;
import org.example.Angular.servies.SubCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("subcategories")
public class SubCategoryController {

    private final SubCategoryService subCategoryService;
    private final CategoryService categoryService;

    public SubCategoryController(SubCategoryService subCategoryService, CategoryService categoryService) {
        this.subCategoryService = subCategoryService;
        this.categoryService = categoryService;
    }

    @GetMapping("/all")
    public List<SubCategory> getSubCategories(){

        return subCategoryService.getAllSubcategories();
    }

    @PostMapping("/add")
    public ResponseEntity<SubCategory> addSubCategory(@RequestBody SubCategory subCategory){
        categoryService.addSubCategory(subCategory);

        return new ResponseEntity<>(subCategory, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{subCategory}")
    public ResponseEntity<?> deleteSubCategory(@PathVariable SubCategory subCategory){
        subCategoryService.deleteSubCategory(subCategory);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<SubCategory> updateSubCategory(@RequestBody SubCategory subCategory){
        subCategoryService.updateSubCategory(subCategory);

        return new ResponseEntity<>(subCategory, HttpStatus.OK);
    }
}
