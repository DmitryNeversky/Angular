package org.example.Angular.services;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SubCategoryService {

    @Value("${upload.image.path}")
    private String UPLOAD_IMAGE_PATH;

    private final SubCategoryRepository subCategoryRepository;

    public SubCategoryService(SubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    public List<SubCategory> getAllSubCategories(){

        return subCategoryRepository.findAll();
    }

    public SubCategory getSubCategoryByName(String name){
        Optional<SubCategory> subCategory = subCategoryRepository.findByName(name);

        return subCategory.orElse(null);
    }

    public SubCategory addSubCategory(String name, Category category, MultipartFile image){
        SubCategory subCategory = new SubCategory(name, category);

        if(image != null){
            String fileName = UUID.randomUUID() + "-" + image.getOriginalFilename();

            try {
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));
                subCategory.setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return subCategoryRepository.save(subCategory);
    }

    public SubCategory updateSubCategory(int id, String name, Category category, MultipartFile image){
        Optional<SubCategory> subCategory = subCategoryRepository.findById(id);
        if(!subCategory.isPresent())
            return null;

        if(image != null) {
            try {
                Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + subCategory.get().getImage()));

                String fileName = UUID.randomUUID() + image.getOriginalFilename();
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));

                subCategory.get().setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        subCategory.get().setName(name);
        subCategory.get().setCategory(category);

        return subCategoryRepository.save(subCategory.get());
    }

    public void deleteSubCategory(SubCategory subCategory){
        Optional<SubCategory> defaultSubCategory = subCategoryRepository.findById(1);
        if(!defaultSubCategory.isPresent())
            return;

        try {
            Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + subCategory.getImage()));
        } catch (IOException e) {
            e.printStackTrace();
        }

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