package org.example.Angular.services;

import org.example.Angular.entities.Item;
import org.example.Angular.entities.Role;
import org.example.Angular.entities.User;
import org.example.Angular.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){

        return userRepository.findAll()
                .stream()
                .filter(x -> x.getWishList().size() > 0)
                .collect(Collectors.toList());
    }

    public User addIntoWishList(String ip, Item item){
        Optional<User> findUser = userRepository.findByIp(ip);
        if(!findUser.isPresent())
            return userRepository.save(new User(ip, item));

        findUser.get().addIntoWishList(item);

        return userRepository.save(findUser.get());
    }

    public void removeFromWishList(String ip, Item item){
        Optional<User> user = userRepository.findByIp(ip);
        if(user.isPresent()){
            user.get().removeFromWishList(item);
            userRepository.save(user.get());
        }
    }

    public User getCurrentUser(){
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject("https://jsonip.com", String.class);
        response = response.substring(1, response.length()-1).replaceAll("\"", response).split(",")[0].split(":")[1];
        response = response.replaceAll("\"", "");

        Optional<User> findUser = userRepository.findByIp(response);

        return findUser.orElse(new User(response));
    }

    @PostConstruct
    private void createAdmin() {
        if (!userRepository.existsById(1))
            userRepository.save(new User("Admin", "1001", Role.ADMIN));
    }
}
