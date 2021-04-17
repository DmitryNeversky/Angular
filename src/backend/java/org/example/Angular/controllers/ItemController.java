package org.example.Angular.controllers;

import org.example.Angular.entities.Item;
import org.example.Angular.servies.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item){
        System.out.println(item);

        return new ResponseEntity<>(itemService.add(item), HttpStatus.CREATED);
    }

    @PutMapping("/update/{item}")
    public ResponseEntity<Item> updateItem(@PathVariable Item item){

        return new ResponseEntity<>(itemService.update(item), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{item}")
    public ResponseEntity<?> deleteItem(@PathVariable Item item){
        itemService.delete(item);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}