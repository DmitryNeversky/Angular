package org.example.Angular.controllers;

import org.example.Angular.entities.Category;
import org.example.Angular.services.MetaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MetaController {

    private final MetaService metaService;

    public MetaController(MetaService metaService) {
        this.metaService = metaService;
    }

    @GetMapping("/home_collection")
    public ResponseEntity<List<Category>> getHomeCollection() {

        return new ResponseEntity<>(metaService.getHomeCollection(), HttpStatus.OK);
    }

    @PostMapping("/home_collection")
    public ResponseEntity<?> setHomeCollection(@RequestParam List<Category> categories) {
        metaService.setHomeCollection(categories);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/home_popular_size")
    public ResponseEntity<Integer> getHomePopularSize() {

        return new ResponseEntity<>(metaService.getPopularSize(), HttpStatus.OK);
    }

    @PostMapping("/home_popular_size")
    public ResponseEntity<?> setHomePopularSize(@RequestParam String size) {
        metaService.setPopularSize(Integer.parseInt(size));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/auth")
    public ResponseEntity<Boolean> auth(@RequestParam String password){

        return new ResponseEntity<>(metaService.auth(password), HttpStatus.OK);
    }
}
