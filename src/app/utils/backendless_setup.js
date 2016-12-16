"use strict";
var BackEndlessSetup = (function () {
    function BackEndlessSetup() {
    }
    BackEndlessSetup.APP_ID = "D832DC89-FB85-CFF9-FFCE-0607CA175000";
    BackEndlessSetup.REST_KEY = "BE453F82-A093-F9BE-FF0D-8AF6EC670F00";
    BackEndlessSetup.APP_VERSION = "v1";
    BackEndlessSetup.IMAGE_URL = "https://api.backendless.com/" + BackEndlessSetup.APP_ID + "/" + BackEndlessSetup.APP_VERSION + "/files/Images/Catalog/1/";
    BackEndlessSetup.DATA_URL = "https://api.backendless.com/" + BackEndlessSetup.APP_VERSION + "/data/";
    return BackEndlessSetup;
}());
exports.BackEndlessSetup = BackEndlessSetup;
