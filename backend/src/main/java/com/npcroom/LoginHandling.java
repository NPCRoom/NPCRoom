package com.npcroom;


import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.set;
import com.mongodb.client.model.Updates;
import org.bson.Document;
import com.mongodb.client.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@CrossOrigin(origins="*")
@RestController
@Component
public class LoginHandling {
    @Value("${spring.mongo.db.uri}")
    private String uri;
    public String handleLogin(@RequestBody String userName, @RequestBody String password) {
        try(MongoClient client = MongoClients.create(uri)) {
            MongoDatabase db = client.getDatabase("login");
            // TODO: finish login authentication
        }
        return "true";
    }
}
