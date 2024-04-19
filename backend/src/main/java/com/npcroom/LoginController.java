package com.npcroom;


import static com.mongodb.client.model.Filters.eq;

import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
@Component
public class LoginController {
    @Value("${spring.mongo.db.uri}")
    private String uri;
    public String handleLogin(@RequestBody LoginRequest login) {
        try(MongoClient client = MongoClients.create(uri)) {
            String inputUser = login.getUsername();
            String inputPass = login.getPassword();
            MongoDatabase db = client.getDatabase("users");
            // TODO: finish login authentication
            MongoCollection<Document> coll = db.getCollection("login");
            Document query = coll.find(Filters.and(
                    Filters.eq("username", inputUser),
                    Filters.eq("password", inputPass))).first();

            if (query == null) {
                return "Failure";
            } else {
                return "Success";
            }
        }
    }

    static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() {
            return username;
        }
        public String getPassword() {
            return password;
        }

        public void setUsername(String username) {
            this.username = username;
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }
}
