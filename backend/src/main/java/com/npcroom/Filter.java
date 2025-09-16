package com.npcroom;

public class Filter {
    private static String[] filter = { "nigger", "nigga", "faggot", "fag",
            "chink", "beaner", "cotton picker", "cunt", "dyke", "fuck", "shit", "motherfucker",
            "cocksucker", "jizz", "pussy", "dick", "tits", "cum" }; // offensive/inappropriate comments will be censored.
    public static String[] getFilter() {
        return filter;
    }
}
