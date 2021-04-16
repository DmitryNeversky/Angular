package org.example.Angular.servies;

import org.example.Angular.entities.Item;
import org.example.Angular.repositories.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public Item add(Item item){
        return itemRepository.save(item);
    }

    public Item update(Item item){
        return itemRepository.save(item);
    }

    public void delete(Item item){
        itemRepository.delete(item);
    }
}
