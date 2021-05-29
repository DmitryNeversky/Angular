package org.example.Angular.services;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.Item;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

    public List<Item> getItemsByCategoryId(int id){
        Optional<Category> category = categoryRepository.findById(id);
        if(!category.isPresent())
            return null;

        List<Item> list = new ArrayList<>();

        for(SubCategory pair : category.get().getSubCategories()){
            list.addAll(pair.getItems());
        }

        return list;
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