package org.example.Angular.servies;

import org.example.Angular.repositories.ItemRepository;

public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
}
