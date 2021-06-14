package org.example.Angular.controllers;

import org.example.Angular.entities.Info;
import org.example.Angular.services.InfoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("info")
public class InfoController {

    private final InfoService infoService;

    public InfoController(InfoService infoService) {
        this.infoService = infoService;
    }

    @GetMapping
    public ResponseEntity<Info> get(){

        return new ResponseEntity<>(infoService.get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Info> post(@RequestBody Info info){

        return new ResponseEntity<>(infoService.save(info), HttpStatus.OK);
    }
}
