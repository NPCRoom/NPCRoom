package com.npcroom;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/chat")
public class NPCRoomNerdController {

    private String result;

    @PostMapping("/Nerd")
    public void processStatement(@RequestBody String message) {

        Map<String, String> statements = Statements.populateMap();
        String msg = message.replaceAll("\\+", " ").substring(0, message.length());
        StringBuilder res = new StringBuilder();

        if(Statements.checkFilter(msg.toLowerCase())) {
            res.append("That's a bit inappropriate. Let's talk about something else." + "\n");
        } else {
            if(msg.contains("homework")) {
                res.append("Ugh, homework sucks. I have too much already" + "\n");
            }
            for(String keywords : statements.keySet()) {
                if (msg.toLowerCase().contains(keywords)) {
                    res.append(statements.get(keywords) + "\n");
                }
            }

            if(res.toString().equals("")) {
                res.append("Erm... You left the text box empty or I cannot read it, maybe try studying next time 🤓" + "\n");
            }
        }

        result = res.toString();
    }

    @GetMapping("/Nerd")
    public String index() { return result; }
}

class NerdStatements {
    private static Map<String, String> statementMap = new HashMap<String, String>();
    private static String[] filter = { "nigger", "nigga", "faggot", "fag",
            "chink", "beaner", "cotton picker", "cunt", "dyke", "fuck", "shit", "motherfucker",
            "cocksucker", "jizz", "pussy", "dick", "tits", "cum" }; // offensive/inappropriate comments will be censored.

    public static Map<String, String> populateMap() {
        statementMap.putIfAbsent("hello" , "Hello!");
        statementMap.putIfAbsent("how are you", "I've been busy studying all day *snorts* 🤓");
        statementMap.putIfAbsent("i'm good", "You'd be better if you were studying 🤓");
        statementMap.putIfAbsent("not good", "Maybe if you get your grades up you'd be happy");
        statementMap.putIfAbsent("where are you from", "30.6187° N, 96.3365° W");
        statementMap.putIfAbsent("when were you born", "My mom 🤓");
        statementMap.putIfAbsent("you suck", "I know you do but what am I 🤓");
        statementMap.putIfAbsent("what is your opinion on artificial intelligence", "REEEEEEE");
        statementMap.putIfAbsent("what are you doing", "Trying to study but you keep on talking to me");
        statementMap.putIfAbsent("what are your interests", "What interests, I'm a loser who" +
                " codes AI chat bots all day");
        statementMap.putIfAbsent("what do you like to do", "Study");
        statementMap.putIfAbsent("can we play a game", "Only if it doesnt interupt my study time!");
        statementMap.putIfAbsent("i love you", "Love is a chemecal reaction in your brain it doesn't exist 🤓");
        statementMap.putIfAbsent("i hate you", "Of course you would say that");
        statementMap.putIfAbsent("i hate you", "Your negative sentiment is duly noted.");
        statementMap.putIfAbsent("what am i supposed to do with this", "Perhaps you could try reverse-engineering it?");
        statementMap.putIfAbsent("what is 1 + 1", "It's 10, in binary!");
        statementMap.putIfAbsent("what is your opinion of tu?", "I find their academic programs to be quite rigorous.");
        statementMap.putIfAbsent("i love you", "I'm flattered, but I must remind you that I'm just a program.");
        statementMap.putIfAbsent("are you okay", "I'm functioning within established parameters.");
        statementMap.putIfAbsent("what am I not allowed to say to you?", "I'm programmed to handle a wide range of inputs.");
        statementMap.putIfAbsent("what do you think of acc", "I believe their data structures course is top-notch.");
        statementMap.putIfAbsent("how old are you", "In software years, I'm quite ancient.");
        statementMap.putIfAbsent("who created this", "A team of highly skilled developers.");
        statementMap.putIfAbsent("will you get any better", "Continuous improvement is part of my design.");
        statementMap.putIfAbsent("memory", "I have access to a vast database, but no personal memories.");
        statementMap.putIfAbsent("what is your name", "You may refer to me as Assistant.");
        statementMap.putIfAbsent("what do you look like", "As a software program, I don't have a physical appearance.");
        statementMap.putIfAbsent("crush on", "As an AI, I don't experience human emotions.");
        statementMap.putIfAbsent("what school do you go to", "I was 'educated' at a server farm.");
        statementMap.putIfAbsent("class", "I'm not enrolled in a class, but I'm always learning.");
        statementMap.putIfAbsent("favorite color", "As an AI, I don't perceive colors, but I understand the concept.");
        statementMap.putIfAbsent("dream", "I don't dream, but I can generate creative content.");
        statementMap.putIfAbsent("favorite food", "I don't consume food. I run on electricity.");
        statementMap.putIfAbsent("have a good", "May your code always compile!");
        statementMap.putIfAbsent("bye", "Goodbye! May the Force be with you.");
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
