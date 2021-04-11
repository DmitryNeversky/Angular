package org.example.Angular.servies;

import org.example.Angular.entities.Item;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.SubCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;

    public SubCategoryService(SubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    public void deleteSubCategory(SubCategory subCategory){
        subCategoryRepository.delete(subCategory);
    }

    public List<SubCategory> getAllSubcategories(){
        return subCategoryRepository.findAll();
    }

    public void addItem(int subcategoryId, Item item){

        Optional<SubCategory> subCategory = subCategoryRepository.findById(subcategoryId);

        if(subCategory.isPresent()) {
            subCategory.get().getItemList().add(item);
        } else {
            System.out.println("Error, the subcategory with id " + subcategoryId + " is not found.");
            return;
        }

        try {
            subCategoryRepository.save(subCategory.get());
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void updateSubCategory(SubCategory subCategory){
        subCategoryRepository.save(subCategory);
    }
}
