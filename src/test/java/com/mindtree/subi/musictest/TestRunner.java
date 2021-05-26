package com.mindtree.subi.musictest;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(
        format = {"pretty", "html:target/cucumber"}
        ,features = ""
        //,tags = {"@Scenario1"}
)
public class TestRunner {
}
