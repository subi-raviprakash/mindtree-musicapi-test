$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('features\MusicTrack.feature');
formatter.feature({
  "line": 1,
  "name": "MindTree Music API Testing",
  "description": "",
  "id": "mindtree-music-api-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Media API call is successful, verify status code and response time",
  "description": "",
  "id": "mindtree-music-api-testing;media-api-call-is-successful,-verify-status-code-and-response-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "API service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "OTT Platform Media API is called in using GET",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verified Return status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verified Response time is within \"1000\" milliseconds",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MusicTrackStepDef.prepareAPIEndpoints()"
});
formatter.result({
  "duration": 313452800,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.callMediaAPI()"
});
formatter.result({
  "duration": 2185756700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "MusicTrackStepDef.validateResponseStatusCode(int)"
});
formatter.result({
  "duration": 19865500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 34
    }
  ],
  "location": "MusicTrackStepDef.validateResponseTime(String)"
});
formatter.result({
  "duration": 8412601,
  "error_message": "java.lang.NoSuchMethodError: \u0027void org.hamcrest.Matcher.describeMismatch(java.lang.Object, org.hamcrest.Description)\u0027\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:16)\r\n\tat com.mindtree.subi.musictest.stepdef.MusicTrackStepDef.validateResponseTime(MusicTrackStepDef.java:48)\r\n\tat ✽.And Verified Response time is within \"1000\" milliseconds(features\\MusicTrack.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Media API call is successful and verify id and segment_type",
  "description": "",
  "id": "mindtree-music-api-testing;media-api-call-is-successful-and-verify-id-and-segment-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "API service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "OTT Platform Media API is called in using GET",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verified the id is not null or empty for all the items",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verified the segment_type is \"music\" for every track",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MusicTrackStepDef.prepareAPIEndpoints()"
});
formatter.result({
  "duration": 54800,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.callMediaAPI()"
});
formatter.result({
  "duration": 577620000,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.idFieldNotNullOrEmpty()"
});
formatter.result({
  "duration": 575032101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "music",
      "offset": 30
    }
  ],
  "location": "MusicTrackStepDef.verifySegmentTypeAsMusic(String)"
});
formatter.result({
  "duration": 45758400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Media API call is successful and verify primary field is not null or empty",
  "description": "",
  "id": "mindtree-music-api-testing;media-api-call-is-successful-and-verify-primary-field-is-not-null-or-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "API service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "OTT Platform Media API is called in using GET",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Verified Return status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verified the primary field in title_list is not null or empty in any track",
  "keyword": "And "
});
formatter.match({
  "location": "MusicTrackStepDef.prepareAPIEndpoints()"
});
formatter.result({
  "duration": 89200,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.callMediaAPI()"
});
formatter.result({
  "duration": 571134301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "MusicTrackStepDef.validateResponseStatusCode(int)"
});
formatter.result({
  "duration": 395200,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.verifyTitleListPrimaryFieldIsNotNullOREmpty()"
});
formatter.result({
  "duration": 31065200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Media API call is successful and  verify only one now_playing field is true",
  "description": "",
  "id": "mindtree-music-api-testing;media-api-call-is-successful-and--verify-only-one-now-playing-field-is-true",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "API service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "OTT Platform Media API is called in using GET",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Verified Return status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verified only one Now_playing field in offset is true",
  "keyword": "And "
});
formatter.match({
  "location": "MusicTrackStepDef.prepareAPIEndpoints()"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.callMediaAPI()"
});
formatter.result({
  "duration": 619804500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "MusicTrackStepDef.validateResponseStatusCode(int)"
});
formatter.result({
  "duration": 639701,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.verifyOnlyOneNowPlayingOffset()"
});
formatter.result({
  "duration": 32216300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "",
  "id": "mindtree-music-api-testing;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 39,
  "name": "Media API call is successful and verify the Date Value in header",
  "description": "",
  "id": "mindtree-music-api-testing;media-api-call-is-successful-and-verify-the-date-value-in-header",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Scenario5"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "API service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "OTT Platform Media API is called in using GET",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Verified Return status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Verified Date Value in Header",
  "keyword": "And "
});
formatter.match({
  "location": "MusicTrackStepDef.prepareAPIEndpoints()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.callMediaAPI()"
});
formatter.result({
  "duration": 555433001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "MusicTrackStepDef.validateResponseStatusCode(int)"
});
formatter.result({
  "duration": 506000,
  "status": "passed"
});
formatter.match({
  "location": "MusicTrackStepDef.verifyDateInHeader()"
});
formatter.result({
  "duration": 349700,
  "status": "passed"
});
});