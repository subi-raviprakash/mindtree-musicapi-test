package com.mindtree.subi.musictest.util;

public class TestConstants {

    public static final String PATH_TEST_PROPERTIES = "src//test//resources//application-test.properties";

    public static final String PROPERTY_MUSIC_API_ENDPOINT = "mindtree.music.api.endpoint";
    public static final String PROPERTY_MUSIC_API_URI = "mindtree.music.api.uri";

    public static final String HEADER_DATE_FORMAT = "EEE, dd MMM";


    public static final String FIELD_HEADER_DATE = "Date";

    public static final String JSONPATH_NOW_PLAYING = "data.offset.now_playing";
    public static final String JSONPATH_PRIMARY = "data.title_list.primary";
    public static final String JSONPATH_SEGMENT_TYPE = "data.segment_type";
    public static final String JSONPATH_ID = "data.id";

    public static final String ERR_MSG_HEADER_DATE_INVALID = "Date in Response Headers is invalid";
    public static final String ERR_MSG_HEADER_DATE_EMPTY = "Date in Response Headers is Empty";
    public static final String ERR_MSG_NOW_PLAYING_ONLY_ONE = "Now playing can be only one";

    public static final String ERR_MSG_PRIMARY_NULL = "title_list/primary cannot be null";
    public static final String ERR_MSG_PRIMARY_EMPTY =  "title_list/primary cannot be empty";

    public static final String ERR_MSG_SEGMENT_TYPE_SHOULD_BE = "Segment should be ";

    public static final String ERR_MSG_ID_NULL = "id cannot be null";
    public static final String ERR_MSG_ID_EMPTY = "id cannot be empty";

    public static final String ERR_MSG_API_RESPONSE_TIME = "API Response Time";



}
