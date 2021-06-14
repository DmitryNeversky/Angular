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

    private final SubCategoryRepository subcategoryRepository;
    private final CategoryService categoryService;

    public SubCategoryService(SubCategoryRepository subcategoryRepository, CategoryService categoryService) {
        this.subcategoryRepository = subcategoryRepository;
        this.categoryService = categoryService;
    }

    public List<SubCategory> getAllSubCategories(){

        return subcategoryRepository.findAll();
    }

    public SubCategory getSubCategoryByName(String name){
        Optional<SubCategory> subcategory = subcategoryRepository.findByName(name);

        return subcategory.orElse(null);
    }

    public SubCategory addSubCategory(String name, int categoryId, MultipartFile image){
        SubCategory subcategory = new SubCategory(name, categoryId);

        if(image != null){
            String fileName = UUID.randomUUID() + "-" + image.getOriginalFilename();

            try {
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));
                subcategory.setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        subcategoryRepository.save(subcategory);

        categoryService.addSubCategory(categoryId, subcategory);

        return subcategory;
    }

    public SubCategory updateSubCategory(int id, String name, int categoryId, MultipartFile image){
        Optional<SubCategory> subcategory = subcategoryRepository.findById(id);
        if(!subcategory.isPresent())
            return null;

        if(image != null) {
            try {
                Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + subcategory.get().getImage()));

                String fileName = UUID.randomUUID() + image.getOriginalFilename();
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));

                subcategory.get().setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        subcategory.get().setName(name);

        if(subcategory.get().getCategory() != categoryId) {
            categoryService.removeSubCategory(subcategory.get().getCategory(), subcategory.get());

            subcategory.get().setCategory(categoryId);
            subcategoryRepository.save(subcategory.get());

            categoryService.addSubCategory(categoryId, subcategory.get());

            return subcategory.get();
        }

        return subcategoryRepository.save(subcategory.get());
    }

    public void deleteSubCategory(SubCategory subcategory){
        Optional<SubCategory> defaultSubCategory = subcategoryRepository.findById(1);
        if(!defaultSubCategory.isPresent())
            return;

        try {
            Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + subcategory.getImage()));
        } catch (IOException e) {
            e.printStackTrace();
        }

        subcategory.getItems().forEach(x -> x.setSubCategory(defaultSubCategory.get().getId()));

        Set<Item> set = subcategory.getItems();

        categoryService.removeSubCategory(subcategory.getCategory(), subcategory);

        subcategoryRepository.delete(subcategory);

        set.forEach(x -> defaultSubCategory.get().addItem(x));

        subcategoryRepository.save(defaultSubCategory.get());
    }

    public void addItem(Item item){
        Optional<SubCategory> subcategory = subcategoryRepository.findById(item.getSubCategory());
        if(!subcategory.isPresent())
            return;

        subcategory.get().addItem(item);
        subcategoryRepository.save(subcategory.get());
    }

    public void removeItem(int subcategoryId, Item item){
        Optional<SubCategory> subcategory = subcategoryRepository.findById(subcategoryId);
        if(!subcategory.isPresent())
            return;

        subcategory.get().getItems().remove(item);
        subcategoryRepository.save(subcategory.get());
    }

    @PostConstruct
    public void onInit(){
        if(subcategoryRepository.findByName("Default").isPresent())
            return;

        subcategoryRepository.save(new SubCategory("Default"));
    }
}