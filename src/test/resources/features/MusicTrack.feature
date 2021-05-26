Feature: MindTree Music API Testing

  @Scenario1
  Scenario Outline: Media API call is successful, verify status code and response time
    Given API service is up and running
    When OTT Platform Media API is called in using GET
    Then Verified Return status code is 200
    And Verified Response time is within "<responseTime>" milliseconds
    Examples:
      | responseTime  |
      | 1000          |

  @Scenario2
  Scenario Outline: Media API call is successful and verify id and segment_type
    Given API service is up and running
    When OTT Platform Media API is called in using GET
    Then Verified the id is not null or empty for all the items
    And Verified the segment_type is "<segment_Type>" for every track
    Examples:
      | segment_Type  |
      | music         |

  @Scenario3
  Scenario: Media API call is successful and verify primary field is not null or empty
    Given API service is up and running
    When OTT Platform Media API is called in using GET
    Then Verified Return status code is 200
    And Verified the primary field in title_list is not null or empty in any track

  @Scenario4
  Scenario: Media API call is successful and  verify only one now_playing field is true
    Given API service is up and running
    When OTT Platform Media API is called in using GET
    Then Verified Return status code is 200
    And Verified only one Now_playing field in offset is true

  Scenario:
  @Scenario5
  Scenario: Media API call is successful and verify the Date Value in header
    Given API service is up and running
    When OTT Platform Media API is called in using GET
    Then Verified Return status code is 200
    And Verified Date Value in Header


