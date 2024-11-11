package com.npcroom;
import java.util.*;

import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RegistrationController {
    @Value("${spring.data.mongodb.uri}")
    private String uri;

    @PostMapping("/register")
    public String handleRegistration(@RequestBody RegisterRequest register) {
        try(MongoClient client = MongoClients.create(uri)) {
            String user = register.getUsername();
            String pass = register.getPassword();
            String email = register.getEmail();

            MongoDatabase db = client.getDatabase("users");
            MongoCollection<Document> coll = db.getCollection("login");
            Document query = coll.find(Filters.and(
                    Filters.eq("email", email),
                    Filters.eq("username", user),
                    Filters.eq("password", pass))).first();

            if(query != null) {
                return "Failure";
            }
            Map<String, String> info = new HashMap<String, String>();
            info.put("email", email);
            info.put("username", user);
            info.put("password", pass);
            coll.insertOne(new Document(info));
            return "Success";
        }
    }

    static class RegisterRequest {
        private String email;
        private String username;
        private String password;

        public String getEmail() {
            return email;
        }
        public String getUsername() {
            return username;
        }
        public String getPassword() {
            return password;
        }

        public void setEmail(String email) {
            this.email = email;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public void setPassword(String pass) {
            this.password = pass;
        }
    }
}
