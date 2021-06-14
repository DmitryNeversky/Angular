package org.example.Angular.services;

import org.example.Angular.entities.Item;
import org.example.Angular.entities.Subcategory;
import org.example.Angular.repositories.SubcategoryRepository;
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
public class SubcategoryService {

    @Value("${upload.image.path}")
    private String UPLOAD_IMAGE_PATH;

    private final SubcategoryRepository subcategoryRepository;
    private final CategoryService categoryService;

    public SubcategoryService(SubcategoryRepository subcategoryRepository, CategoryService categoryService) {
        this.subcategoryRepository = subcategoryRepository;
        this.categoryService = categoryService;
    }

    public List<Subcategory> getAllSubCategories() {

        return subcategoryRepository.findAll();
    }

    public Subcategory getSubcategoryByName(String name) {
        Optional<Subcategory> subcategory = subcategoryRepository.findByName(name);

        return subcategory.orElse(null);
    }

    public Subcategory addSubcategory(String name, int categoryId, MultipartFile image) {
        Subcategory subcategory = new Subcategory(name, categoryId);

        if (image != null) {
            String fileName = UUID.randomUUID() + "-" + image.getOriginalFilename();

            try {
                image.transferTo(Paths.get(UPLOAD_IMAGE_PATH + fileName));
                subcategory.setImage(fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        subcategoryRepository.save(subcategory);

        categoryService.addSubcategory(categoryId, subcategory);

        return subcategory;
    }

    public Subcategory updateSubcategory(int id, String name, int categoryId, MultipartFile image) {
        Optional<Subcategory> subcategory = subcategoryRepository.findById(id);
        if (!subcategory.isPresent())
            return null;

        if (image != null) {
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

        if (subcategory.get().getCategory() != categoryId) {
            categoryService.removeSubcategory(subcategory.get().getCategory(), subcategory.get());

            subcategory.get().setCategory(categoryId);
            subcategoryRepository.save(subcategory.get());

            categoryService.addSubcategory(categoryId, subcategory.get());

            return subcategory.get();
        }

        return subcategoryRepository.save(subcategory.get());
    }

    public void deleteSubcategory(Subcategory subcategory) {
        Optional<Subcategory> defaultSubcategory = subcategoryRepository.findById(1);
        if (!defaultSubcategory.isPresent())
            return;

        try {
            Files.deleteIfExists(Paths.get(UPLOAD_IMAGE_PATH + subcategory.getImage()));
        } catch (IOException e) {
            e.printStackTrace();
        }

        subcategory.getItems().forEach(x -> x.setSubcategory(defaultSubcategory.get().getId()));

        Set<Item> set = subcategory.getItems();

        categoryService.removeSubcategory(subcategory.getCategory(), subcategory);

        subcategoryRepository.delete(subcategory);

        set.forEach(x -> defaultSubcategory.get().addItem(x));

        subcategoryRepository.save(defaultSubcategory.get());
    }

    public void addItem(Item item) {
        Optional<Subcategory> subcategory = subcategoryRepository.findById(item.getSubcategory());
        if (!subcategory.isPresent())
            return;

        subcategory.get().addItem(item);
        subcategoryRepository.save(subcategory.get());
    }

    public void removeItem(int subcategoryId, Item item) {
        Optional<Subcategory> subcategory = subcategoryRepository.findById(subcategoryId);
        if (!subcategory.isPresent())
            return;

        subcategory.get().getItems().remove(item);
        subcategoryRepository.save(subcategory.get());
    }

    @PostConstruct
    public void onInit() {
        if (subcategoryRepository.findByName("Default").isPresent())
            return;

        subcategoryRepository.save(new Subcategory("Default"));
    }
}