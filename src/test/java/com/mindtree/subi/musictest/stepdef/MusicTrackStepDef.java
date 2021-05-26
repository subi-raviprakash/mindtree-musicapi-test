package com.mindtree.subi.musictest.stepdef;

import com.mindtree.subi.musictest.util.TestConstants;
import cucumber.annotation.en.And;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import org.junit.Assert;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import static io.restassured.RestAssured.get;
import static java.util.concurrent.TimeUnit.MILLISECONDS;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.lessThan;

public class MusicTrackStepDef extends BaseStepDef {

     @Given("^API service is up and running$")
    public void prepareAPIEndpoints() {
        String apiURI = propertyUtil.getApiURL();
        String apiEndpoint = propertyUtil.getApiEndpoint();
        this.endpointURL = apiURI + apiEndpoint;
        System.out.println("API Endpoint URL : " + this.endpointURL);

    }

    @When("^OTT Platform Media API is called in using GET$")
    public void callMediaAPI() {
        response = get(endpointURL);
        response.then().log();
    }

    @Then("^Verified Return status code is (\\d+)$")
    public void validateResponseStatusCode(int statusCode) {
        response.then().assertThat().statusCode(statusCode);
    }

    @And("^Verified Response time is within \"([^\"]*)\" milliseconds$")
    public void validateResponseTime(String expectedTurnAroundTime) {
        long responseTime = response.timeIn(MILLISECONDS);
        System.out.println("\n\n\n\n ****** Response Time : "+responseTime+" ****** \n\n\n\n");

        assertThat(TestConstants.ERR_MSG_API_RESPONSE_TIME,
                responseTime,
                lessThan(Long.parseLong(expectedTurnAroundTime)));
    }


    @Then("^Verified the id is not null or empty for all the items$")
    public void idFieldNotNullOrEmpty() {
        ArrayList<String> idList = response.then().extract().path(TestConstants.JSONPATH_ID);
        System.out.println(TestConstants.JSONPATH_ID + " List : " + idList);
        for(String id : idList){
            Assert.assertNotNull(TestConstants.ERR_MSG_ID_NULL, id);
            Assert.assertFalse(TestConstants.ERR_MSG_ID_EMPTY, id.isEmpty());
        }
    }

    @And("^Verified the segment_type is \"([^\"]*)\" for every track$")
    public void verifySegmentTypeAsMusic(String music) {
        ArrayList<String> segmentTypeList = response.then().extract().path(TestConstants.JSONPATH_SEGMENT_TYPE);
        System.out.println(TestConstants.JSONPATH_SEGMENT_TYPE + " List : " + segmentTypeList);
        for(String segmentType : segmentTypeList){
            Assert.assertEquals(TestConstants.ERR_MSG_SEGMENT_TYPE_SHOULD_BE + music, segmentType, music);
        }
    }

    @Then("^Verified the primary field in title_list is not null or empty in any track$")
    public void verifyTitleListPrimaryFieldIsNotNullOREmpty() {
        ArrayList<String> primaryList = response.then().extract().path(TestConstants.JSONPATH_PRIMARY);
        System.out.println(TestConstants.JSONPATH_PRIMARY + " List : " + primaryList);
        for(String primary : primaryList){
            Assert.assertNotNull(TestConstants.ERR_MSG_PRIMARY_NULL, primary);
            Assert.assertFalse(TestConstants.ERR_MSG_PRIMARY_EMPTY, primary.isEmpty());
        }
    }

    @Then("^Verified only one Now_playing field in offset is true$")
    public void verifyOnlyOneNowPlayingOffset() {
        ArrayList<Boolean> nowPlayingList = response.then().extract().path(TestConstants.JSONPATH_NOW_PLAYING);
        System.out.println(TestConstants.JSONPATH_NOW_PLAYING + " List : " + nowPlayingList);

        int trueCount = 0;
        for(Boolean nowPlayingFlag : nowPlayingList){
            if(nowPlayingFlag) trueCount++;
        }
        Assert.assertEquals(TestConstants.ERR_MSG_NOW_PLAYING_ONLY_ONE, trueCount, 1);
    }

    @Then("^Verified Date Value in Header$")
    public void verifyDateInHeader() {
        Headers responseHeaders = response.then().extract().headers();
        Header responseDateHeader = responseHeaders.get(TestConstants.FIELD_HEADER_DATE);

        String responseDate = responseDateHeader.getValue();
        System.out.println("Date in Response Header : " + responseDate);
        Assert.assertNotNull(TestConstants.ERR_MSG_HEADER_DATE_EMPTY, responseDate);

        SimpleDateFormat sdf = new SimpleDateFormat(TestConstants.HEADER_DATE_FORMAT);
        Date responseDateObj;
        try {
            responseDateObj = sdf.parse(responseDate);
        }catch (Exception e) {
            responseDateObj = null;
        }
        Assert.assertNotNull(TestConstants.ERR_MSG_HEADER_DATE_INVALID, responseDateObj);
    }
}
