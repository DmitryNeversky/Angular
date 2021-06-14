package org.example.Angular.services;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class CategoryService {

    @Value("${upload.image.path}")
    private String UPLOAD_IMAGE_PATH;

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    public Category getCategory(int id){
        Optional<Category> category = categoryRepository.findById(id);

        return category.orElse(null);
    }

    public Category getCategoryByName(String name){
        Optional<Category> category = categoryRepository.findByName(name);

        return category.orElse(null);
    }

    public Category addCategory(String name, MultipartFile image){
        Category category = new Category(name);

        if(image != null){
            String fileName = UUID.randomUUID() + "-" + image.getOriginalFilename();

            try {
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));
                category.setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return categoryRepository.save(category);
    }

    public Category updateCategory(int id, String name, String removeImage, MultipartFile image){
        Optional<Category> category = categoryRepository.findById(id);
        if(!category.isPresent())
            return null;

        if(removeImage != null) {
            if (Files.exists(Paths.get(UPLOAD_IMAGE_PATH + removeImage))) {
                try {
                    Files.delete(Paths.get(UPLOAD_IMAGE_PATH + removeImage));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            category.get().setImage(null);
        }

        if(image != null) {
            try {
                Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + category.get().getImage()));

                String fileName = UUID.randomUUID() + image.getOriginalFilename();
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));

                category.get().setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        category.get().setName(name);

        return categoryRepository.save(category.get());
    }

    public void deleteCategory(Category category){
        Optional<Category> defaultCategory = categoryRepository.findById(1);
        if(!defaultCategory.isPresent())
            return;

        try {
            Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + category.getImage()));
        } catch (IOException e) {
            e.printStackTrace();
        }

        category.getSubCategories().forEach(x -> x.setCategory(defaultCategory.get().getId()));

        Set<SubCategory> set = category.getSubCategories();

        categoryRepository.delete(category);

        set.forEach(x -> defaultCategory.get().getSubCategories().add(x));

        categoryRepository.save(defaultCategory.get());
    }

    public void addSubCategory(int categoryId, SubCategory subcategory){
        Optional<Category> category = categoryRepository.findById(categoryId);
        if(!category.isPresent())
            return;

        category.get().addSubCategory(subcategory);
        categoryRepository.save(category.get());
    }

    public void removeSubCategory(int categoryId, SubCategory subcategory){
        Optional<Category> category = categoryRepository.findById(categoryId);
        if(!category.isPresent())
            return;

        category.get().getSubCategories().remove(subcategory);
        categoryRepository.save(category.get());
    }

    @PostConstruct
    public void onInit(){
        if(categoryRepository.findByName("Default").isPresent())
            return;

        categoryRepository.save(new Category("Default"));
    }
}