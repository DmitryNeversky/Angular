package org.example.Angular.other;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.example.Angular.entities.SubCategory;
import org.example.Angular.repositories.SubCategoryRepository;

import java.io.IOException;
import java.util.Optional;

public class SubCategoryDeserializer extends JsonDeserializer<SubCategory> {

    private final SubCategoryRepository subCategoryRepository;

    public SubCategoryDeserializer(SubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    @Override
    public SubCategory deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        Optional<SubCategory> subCategory = subCategoryRepository.findById(p.getValueAsInt());
        return subCategory.orElse(null);
    }
}
