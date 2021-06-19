package org.example.Angular.controllers;

import org.example.Angular.entities.Item;
import org.example.Angular.entities.User;
import org.example.Angular.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers(){

        return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
    }

    @GetMapping("/current")
    public ResponseEntity<User> getCurrentUser() {

        return new ResponseEntity<>(userService.getCurrentUser(), HttpStatus.OK);
    }

    @PostMapping("/add_wish")
    public ResponseEntity<User> addIntoWishList(@RequestParam String ip, @RequestParam Item item){

        return new ResponseEntity<>(userService.addIntoWishList(ip, item), HttpStatus.OK);
    }

    @PostMapping("/delete_wish")
    public ResponseEntity<?> removeFromWishList(@RequestParam String ip, @RequestParam Item item){
        userService.removeFromWishList(ip, item);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
