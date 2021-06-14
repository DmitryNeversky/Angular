package org.example.Angular.services;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.Meta;
import org.example.Angular.repositories.MetaRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class MetaService {

    private final MetaRepository metaRepository;

    public MetaService(MetaRepository metaRepository) {
        this.metaRepository = metaRepository;
    }

    public List<Category> getHomeCollection() {
        Meta meta = metaRepository.findById(1);

        return meta.getHomeCollection();
    }

    public void setHomeCollection(List<Category> categories) {
        Meta meta = metaRepository.findById(1);
        meta.setHomeCollection(categories);

        metaRepository.save(meta);
    }

    public Integer getPopularSize() {
        Meta meta = metaRepository.findById(1);

        return meta.getHomePopularSize();
    }

    public void setPopularSize(int size) {
        Meta meta = metaRepository.findById(1);
        meta.setHomePopularSize(size);

        metaRepository.save(meta);
    }

    @PostConstruct
    private void init() {
        Meta meta = metaRepository.findById(1);
        if (meta == null)
            metaRepository.save(new Meta(1));
    }
}
