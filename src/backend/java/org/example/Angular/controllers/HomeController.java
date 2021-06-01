package org.example.Angular.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.Angular.entities.Category;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("home")
public class HomeController {

    @Value("${resource.path}")
    private String RESOURCE_PATH;

    @GetMapping("/collection")
    public ResponseEntity<List<Category>> getCollection() throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        List<Category> categories = mapper.readValue(Paths.get("/home/koshey/IdeaProjects/Angular/src/backend/resources/home-collection.json").toFile(), List.class);

        return new ResponseEntity<>(categories, HttpStatus.OK);

    }
    @PostMapping("/collection")
    public ResponseEntity<?> putCollection(@RequestParam List<Category> categories) throws IOException {

        if(!Files.exists(Paths.get(RESOURCE_PATH + "home-collection.json")))
            Files.createFile(Paths.get(RESOURCE_PATH + "home-collection.json"));

        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(Paths.get("/home/koshey/IdeaProjects/Angular/src/backend/resources/home-collection.json").toFile(), categories);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
