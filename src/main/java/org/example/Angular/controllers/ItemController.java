package org.example.Angular.controllers;

import org.example.Angular.entities.Item;
import org.example.Angular.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemRepository itemRepository;

    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Item>> getAllItems(){
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item){
        return new ResponseEntity<>(itemRepository.save(item), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete-{item}")
    public ResponseEntity<?> deleteItem(@PathVariable Item item){
        itemRepository.delete(item);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Item> update(@RequestBody Item item){
        itemRepository.save(item);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }
}
