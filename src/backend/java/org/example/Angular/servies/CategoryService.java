package org.example.Angular.servies;

import org.example.Angular.entities.Category;
import org.example.Angular.repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories(){
        return this.categoryRepository.findAll();
    }

    public Category addCategory(Category category){
        return categoryRepository.save(category);
    }

    public Category updateCategory(Category category){
        return categoryRepository.save(category);
    }

    public void deleteCategory(Category category){
        Optional<Category> defaultCategory = categoryRepository.findById(1);
        if(!defaultCategory.isPresent())
            return;

        category.getSubCategories().forEach(x -> x.setCategory(defaultCategory.get()));
        categoryRepository.delete(category);
    }

    @PostConstruct
    public void onInit(){
        if(categoryRepository.findByName("Default").isPresent())
            return;

        categoryRepository.save(new Category("Default"));
    }
}