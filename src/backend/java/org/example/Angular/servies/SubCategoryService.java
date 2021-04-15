package org.example.Angular.servies;

import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.SubCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;

    public SubCategoryService(SubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    public List<SubCategory> getAllSubCategories(){
        return subCategoryRepository.findAll();
    }

    public SubCategory addSubCategory(SubCategory subCategory){
        return subCategoryRepository.save(subCategory);
    }

    public SubCategory updateSubCategory(SubCategory subCategory){
        return subCategoryRepository.save(subCategory);
    }

    public void deleteSubCategory(SubCategory subCategory){
        subCategoryRepository.delete(subCategory);
    }
}