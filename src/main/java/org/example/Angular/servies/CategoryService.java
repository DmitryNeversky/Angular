package org.example.Angular.servies;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public void addCategory(Category category){
        categoryRepository.save(category);
    }

    public void deleteCategory(Category category){
        categoryRepository.delete(category);
    }

    public List<Category> getAllCategories(){
        return this.categoryRepository.findAll();
    }

    public List<SubCategory> getAllSubcategories(int categoryId){

        Optional<Category> category = categoryRepository.findById(categoryId);

        List<SubCategory> subCategories = null;

        if(category.isPresent())
            subCategories = category.get().getSubCategoryList();
        else System.out.println("Error, the category with id " + categoryId + " is not found.");

        return subCategories;
    }

    public void addSubCategory(int categoryId, SubCategory subCategory){

        Optional<Category> category = categoryRepository.findById(categoryId);

        if(category.isPresent()) {
            category.get().getSubCategoryList().add(subCategory);
        } else {
            System.out.println("Error, the category with id " + categoryId + " is not found.");
            return;
        }

        try {
            categoryRepository.save(category.get());
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void deleteSubCategory(int categoryId, SubCategory subCategory){
        Optional<Category> category = categoryRepository.findById(categoryId);
        if(category.isPresent()){
            try{
                category.get().getSubCategoryList().remove(subCategory);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("Error, the category with id " + categoryId + " is not found.");
            return;
        }

        try {
            categoryRepository.save(category.get());
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void updateCategory(Category category){
        categoryRepository.save(category);
    }
}
