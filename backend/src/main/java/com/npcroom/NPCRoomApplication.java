package com.npcroom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NPCRoomApplication {
    public static void main(String[] args) {
        try {
            SpringApplication.run(NPCRoomApplication.class, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
