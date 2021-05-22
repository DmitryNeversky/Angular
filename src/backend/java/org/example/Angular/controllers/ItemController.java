package org.example.Angular.controllers;

import org.example.Angular.entities.Item;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.servies.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Item>> getItems(){

        return new ResponseEntity<>(itemService.getItems(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItem(@PathVariable int id){
        return new ResponseEntity<>(itemService.getItem(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Item> addItem(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) double price,
            @RequestParam(required = false) int count,
            @RequestParam(required = false) SubCategory subCategory,
            @RequestParam(required = false) List<MultipartFile> images){

        Item item = new Item(name, description, price, count, subCategory);

        return new ResponseEntity<>(itemService.add(item, images), HttpStatus.CREATED);
    }

    @PutMapping("/update/{item}")
    public ResponseEntity<Item> updateItem(
            @PathVariable Item item,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) double price,
            @RequestParam(required = false) int count,
            @RequestParam(required = false) SubCategory subCategory,
            @RequestParam(required = false) Set<String> removeImages,
            @RequestParam(required = false) List<MultipartFile> addImages){

        item.setName(name);
        item.setDescription(description);
        item.setPrice(price);
        item.setCount(count);
        item.setSubCategory(subCategory);

        return new ResponseEntity<>(itemService.update(item, removeImages, addImages), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{item}")
    public ResponseEntity<?> deleteItem(@PathVariable Item item){
        itemService.delete(item);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}