package org.example.Angular.services;

import org.example.Angular.entities.Info;
import org.example.Angular.repositories.InfoRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class InfoService {

    private final InfoRepository infoRepository;

    public InfoService(InfoRepository infoRepository) {
        this.infoRepository = infoRepository;
    }

    public Info get(){

        return infoRepository.findById(1);
    }

    public Info save(Info info){

        return infoRepository.save(info);
    }

    @PostConstruct
    private void init(){
        Info info = infoRepository.findById(1);
        if(info == null)
            infoRepository.save(new Info(1));
    }
}
