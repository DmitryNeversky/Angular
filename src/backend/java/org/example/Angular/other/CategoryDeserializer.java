package org.example.Angular.other;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.example.Angular.entities.Category;
import org.example.Angular.repositories.CategoryRepository;

import java.io.IOException;
import java.util.Optional;


public class CategoryDeserializer extends JsonDeserializer<Category> {

    private final CategoryRepository categoryRepository;

    public CategoryDeserializer(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        Optional<Category> category = categoryRepository.findById(jsonParser.getValueAsInt());

        return category.orElse(null);
    }
}