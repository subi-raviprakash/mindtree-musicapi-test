package com.mindtree.subi.musictest.util;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class PropertyUtil {

    private final String apiURL;

    private final String apiEndpoint;

    public PropertyUtil(){
        BufferedReader reader;
        Properties properties;
        try {
            properties = new Properties();
            reader = new BufferedReader(new FileReader(TestConstants.PATH_TEST_PROPERTIES));
            try {
                properties.load(reader);
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException("Configuration.properties not found at " + TestConstants.PATH_TEST_PROPERTIES);
        }
        if(properties.isEmpty()) {
            throw new RuntimeException("Unable to load properties file : " + TestConstants.PATH_TEST_PROPERTIES);
        }
        apiEndpoint = properties.getProperty(TestConstants.PROPERTY_MUSIC_API_ENDPOINT);
        apiURL = properties.getProperty(TestConstants.PROPERTY_MUSIC_API_URI);
    }

    public String getApiURL() {
        return apiURL;
    }

    public String getApiEndpoint() {
        return apiEndpoint;
    }
}
