package org.example.Angular.services;

import org.example.Angular.entities.Item;
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
import java.util.Set;
import java.util.UUID;

@Service
public class SubCategoryService {

    @Value("${upload.image.path}")
    private String UPLOAD_IMAGE_PATH;

    private final SubCategoryRepository subCategoryRepository;
    private final CategoryService categoryService;

    public SubCategoryService(SubCategoryRepository subCategoryRepository, CategoryService categoryService) {
        this.subCategoryRepository = subCategoryRepository;
        this.categoryService = categoryService;
    }

    public List<SubCategory> getAllSubCategories(){

        return subCategoryRepository.findAll();
    }

    public SubCategory getSubCategoryByName(String name){
        Optional<SubCategory> subCategory = subCategoryRepository.findByName(name);

        return subCategory.orElse(null);
    }

    public SubCategory addSubCategory(String name, int categoryId, MultipartFile image){
        SubCategory subCategory = new SubCategory(name, categoryId);

        if(image != null){
            String fileName = UUID.randomUUID() + "-" + image.getOriginalFilename();

            try {
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));
                subCategory.setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        subCategoryRepository.save(subCategory);

        categoryService.addSubCategory(categoryId, subCategory);

        return subCategory;
    }

    public SubCategory updateSubCategory(int id, String name, int categoryId, MultipartFile image){
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

        if(subCategory.get().getCategory() != categoryId) {
            categoryService.removeSubCategory(subCategory.get().getCategory(), subCategory.get());

            subCategory.get().setCategory(categoryId);
            subCategoryRepository.save(subCategory.get());

            categoryService.addSubCategory(categoryId, subCategory.get());

            return subCategory.get();
        }

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

        subCategory.getItems().forEach(x -> x.setSubCategory(defaultSubCategory.get().getId()));

        Set<Item> set = subCategory.getItems();

        categoryService.removeSubCategory(subCategory.getCategory(), subCategory);

        subCategoryRepository.delete(subCategory);

        set.forEach(x -> defaultSubCategory.get().addItem(x));

        subCategoryRepository.save(defaultSubCategory.get());
    }

    public void addItem(Item item){
        Optional<SubCategory> subCategory = subCategoryRepository.findById(item.getSubCategory());
        if(!subCategory.isPresent())
            return;

        subCategory.get().addItem(item);
        subCategoryRepository.save(subCategory.get());
    }

    public void removeItem(int subCategoryId, Item item){
        Optional<SubCategory> subCategory = subCategoryRepository.findById(subCategoryId);
        if(!subCategory.isPresent())
            return;

        subCategory.get().getItems().remove(item);
        subCategoryRepository.save(subCategory.get());
    }

    @PostConstruct
    public void onInit(){
        if(subCategoryRepository.findByName("Default").isPresent())
            return;

        subCategoryRepository.save(new SubCategory("Default"));
    }
}