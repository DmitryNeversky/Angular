package org.example.Angular.services;

import org.example.Angular.entities.Role;
import org.example.Angular.entities.User;
import org.example.Angular.repositories.UserRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    private void createAdmin(){
        if(!userRepository.existsById(1))
            userRepository.save(new User("Admin", "1001", Role.ADMIN));
    }
}
