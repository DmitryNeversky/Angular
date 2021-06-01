package org.example.Angular.services;

import org.example.Angular.entities.Category;
import org.example.Angular.entities.Meta;
import org.example.Angular.repositories.CategoryRepository;
import org.example.Angular.repositories.ItemRepository;
import org.example.Angular.repositories.MetaRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class MetaService {

    private final MetaRepository metaRepository;
    private final CategoryRepository categoryRepository;
    private final ItemRepository itemRepository;

    public MetaService(MetaRepository metaRepository, CategoryRepository categoryRepository, ItemRepository itemRepository) {
        this.metaRepository = metaRepository;
        this.categoryRepository = categoryRepository;
        this.itemRepository = itemRepository;
    }

    public List<Category> getHomeCollection(){
        Meta meta = metaRepository.findById(1);

        return meta.getHomeCollection();
    }

    public void setHomeCollection(List<Category> categories){
        Meta meta = metaRepository.findById(1);
        meta.setHomeCollection(categories);

        metaRepository.save(meta);
    }

    public Integer getPopularSize(){
        Meta meta = metaRepository.findById(1);

        return meta.getHomePopularSize();
    }

    public void setPopularSize(int size){
        Meta meta = metaRepository.findById(1);
        meta.setHomePopularSize(size);

        metaRepository.save(meta);
    }

    @PostConstruct
    private void init(){
//        List<Category> categories = categoryRepository.findAll();
//        categories = categories.stream().limit(3).collect(Collectors.toList());
//
//        List<Item> items = itemRepository.findAll();
//        System.out.println(items);
//        items = items.stream()
//                .sorted(Comparator.comparingInt(a -> a.getLooks().size()))
//                .limit(3)
//                .collect(Collectors.toList());

        Meta meta = metaRepository.findById(1);
        if(meta == null)
            metaRepository.save(new Meta(1));
    }
}
