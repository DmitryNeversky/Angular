package org.example.Angular.controllers;

import org.example.Angular.entities.Setting;
import org.example.Angular.repositories.SettingRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
@RequestMapping("/settings")
public class SettingController {

    private final SettingRepository settingsRepository;

    public SettingController(SettingRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    @GetMapping("/home-collection-size")
    public String getHomeCollectionSize() {
        Optional<Setting> setting = settingsRepository.findById("home_collection_size");
        if(!setting.isPresent())
            return "3";

        return setting.get().getValue();
    }

    @PostConstruct
    private void onInit(){
        if(!settingsRepository.existsById("home_collection_size"))
            settingsRepository.save(new Setting("home_collection_size", "3"));
    }
}
