package com.mindtree.subi.musictest.stepdef;

import com.mindtree.subi.musictest.util.PropertyUtil;
import io.restassured.http.Headers;
import io.restassured.response.Response;

public class BaseStepDef {

    protected String endpointURL;

    protected Response response;

    protected PropertyUtil propertyUtil;

    public BaseStepDef() {
        propertyUtil = new PropertyUtil();
    }
}
