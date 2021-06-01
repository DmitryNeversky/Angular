package org.example.Angular.controllers;

import org.example.Angular.entities.Setting;
import org.example.Angular.repositories.SettingRepository;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
@RequestMapping("/settings")
public class SettingController {

    private final SettingRepository settingsRepository;

    public SettingController(SettingRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    @GetMapping("/popular_item_size")
    public String getPopularItemSize() {
        Optional<Setting> setting = settingsRepository.findById("popular_item_size");
        if(!setting.isPresent())
            return "3";

        return setting.get().getValue();
    }

    @PostMapping("/popular_item_size")
    public void setPopularItemSize(@RequestParam String popularItemSize) {
        Optional<Setting> setting = settingsRepository.findById("popular_item_size");
        if(setting.isPresent()) {
            setting.get().setValue(popularItemSize);
            settingsRepository.save(setting.get());
        }
    }

    @PostConstruct
    private void onInit(){
        if(!settingsRepository.existsById("home_collection_size"))
            settingsRepository.save(new Setting("home_collection_size", "3"));
        if(!settingsRepository.existsById("popular_item_size"))
            settingsRepository.save(new Setting("popular_item_size", "3"));
    }
}
