package org.example.Angular.other;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ItemImagesDeserializer extends JsonDeserializer<List<String>> {

    @Override
    public List<String> deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException {
        List<String> images = new ArrayList<>();

        Object obj = jsonParser.readValueAs(List.class);
        System.out.println(obj);
        return new ArrayList<>();
    }
}
