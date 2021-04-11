package org.example.Angular.servies;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.Item;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.CategoryRepository;
import org.example.Angular.repositories.SubCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;
    private final CategoryService categoryService;

    public SubCategoryService(SubCategoryRepository subCategoryRepository, CategoryService categoryService) {
        this.subCategoryRepository = subCategoryRepository;
        this.categoryService = categoryService;
    }

    public void addSubCategory(SubCategory subCategory){
        categoryService.addSubCategory(subCategory.getCategoryId(), subCategory);
        subCategoryRepository.save(subCategory);
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

    public void deleteItem(int subcategoryId, Item item){
        Optional<SubCategory> subCategory = subCategoryRepository.findById(subcategoryId);
        if(subCategory.isPresent()){
            try{
                subCategory.get().getItemList().remove(item);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("Error, the subCategory with id " + subcategoryId + " is not found.");
            return;
        }

        try {
            subCategoryRepository.save(subCategory.get());
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void updateSubCategory(SubCategory subCategory){
        System.out.println(subCategory.toString());
        subCategoryRepository.save(subCategory);
    }
}
