package org.example.Angular.servies;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.SubCategoryRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
public class SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;

    public SubCategoryService(SubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    public List<SubCategory> getAllSubCategories(){
        return subCategoryRepository.findAll();
    }

    public SubCategory addSubCategory(String name, Category category){
        SubCategory subCategory = new SubCategory(name, category);

        return subCategoryRepository.save(subCategory);
    }

    public SubCategory updateSubCategory(SubCategory subCategory){
        if(subCategory.getCategory() == null)
            return subCategory;

        return subCategoryRepository.save(subCategory);
    }

    public void deleteSubCategory(SubCategory subCategory){
        Optional<SubCategory> defaultSubCategory = subCategoryRepository.findById(1);
        if(!defaultSubCategory.isPresent())
            return;

        subCategory.getItems().forEach(item -> item.setSubCategory(defaultSubCategory.get()));
        subCategoryRepository.delete(subCategory);
    }

    @PostConstruct
    public void onInit(){
        if(subCategoryRepository.findByName("Default").isPresent())
            return;

        subCategoryRepository.save(new SubCategory("Default"));
    }
}