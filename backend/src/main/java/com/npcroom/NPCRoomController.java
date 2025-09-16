package com.npcroom;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins={"https://localhost:5173", "https://npcroom.vercel.app"})
public class NPCRoomController {

    @PostMapping("/Classic")
    public String processStatement(@RequestBody String message) {

        Map<String, String> statements = Statements.populateMap();
        String msg = message.replaceAll("\\+", " ").substring(0, message.length());
        StringBuilder res = new StringBuilder();

        if(Statements.checkFilter(msg.toLowerCase())) {
            res.append("That's a bit inappropriate. Let's talk about something else." + "\n");
        } else {
            if(msg.contains("homework")) {
                res.append("Ugh, homework sucks. Don't make me do yours." + "\n");
            }
            for(String keywords : statements.keySet()) {
                if (msg.toLowerCase().contains(keywords)) {
                    res.append(statements.get(keywords) + "\n");
                }
            }

            if(res.toString().equals("")) {
                res.append("I don't know what to say to that." + "\n");
            }
        }

        return res.toString();
    }
}

class Statements {
    private static Map<String, String> statementMap = new HashMap<String, String>();
    private static String[] filter = Filter.getFilter();

    public static Map<String, String> populateMap() {
        statementMap.putIfAbsent("hello" , "Hello!");
        statementMap.putIfAbsent("how are you", "I'm good, thanks for asking! How are you?");
        statementMap.putIfAbsent("i'm good", "That's good to hear!");
        statementMap.putIfAbsent("not good", "I'm sorry. Care to talk abt it");
        statementMap.putIfAbsent("where are you from", "somewhere");
        statementMap.putIfAbsent("when were you born", "dude stop");
        statementMap.putIfAbsent("you suck", "no you");
        statementMap.putIfAbsent("what is your opinion on artificial intelligence", "REEEEEEE");
        statementMap.putIfAbsent("what are you doing", "Talking to you ;)");
        statementMap.putIfAbsent("what are your interests", "What interests, I'm a loser who" +
                " scrolls Reddit on the daily.");
        statementMap.putIfAbsent("what do you like to do", "Scroll Reddit");
        statementMap.putIfAbsent("can we play a game", "Sure!");
        statementMap.putIfAbsent("i love you", "Wow...I never get that. I love you too!");
        statementMap.putIfAbsent("i hate you", "Of course you would say that");
        statementMap.putIfAbsent("what am i supposed to do with this", "I dunno?");
        statementMap.putIfAbsent("what is 1 + 1", "2");
        statementMap.putIfAbsent("what is your opinion of tu?", "Horns down.");
        statementMap.putIfAbsent("i love you", "Awww....");
        statementMap.putIfAbsent("are you okay", "Of course I am!");
        statementMap.putIfAbsent("what am I not allowed to say to you?", "I have a secret filter.");
        statementMap.putIfAbsent("what do you think of acc", "ACC best club");
        statementMap.putIfAbsent("how old are you", "Old enough?");
        statementMap.putIfAbsent("who created this", "A group of eight people.");
        statementMap.putIfAbsent("will you get any better", "That is the plan.");
        statementMap.putIfAbsent("memory", "I have no memories, but I'm sure you have some!");
        statementMap.putIfAbsent("what is your name", "Whatever you want it to be.");
        statementMap.putIfAbsent("what do you look like", "I dunno tbh");
        statementMap.putIfAbsent("crush on", "I have many crushes. Though they don't like me.");
        statementMap.putIfAbsent("what school do you go to", "My creators go to Texas A&M University!");
        statementMap.putIfAbsent("class", "27, AYYYY");
        statementMap.putIfAbsent("favorite color", "My favorite color is blue.");
        statementMap.putIfAbsent("dream", "Ooooooo good one....");
        statementMap.putIfAbsent("favorite food", "I don't eat.");
        statementMap.putIfAbsent("have a good", "You too!");
        statementMap.putIfAbsent("bye", "Goodbye!");
        return statementMap;
    }

    public static boolean checkFilter(String statement) {
        String[] words = statement.split(" ");
        for(String word : words) {
            if(Arrays.asList(filter).contains(word)) {
                return true;
            }
        }
        return false;
    }
}