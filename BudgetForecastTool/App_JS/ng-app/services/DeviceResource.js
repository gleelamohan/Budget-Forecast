(function () {
    "use strict";

    angular.module("common.services",
                            ["ngResource"])
                            .factory("DeviceResource",["$resource", "appSettings", DeviceResource]);

    function DeviceResource($resource, appSettings) {

        return $resource(appSettings.serverPath + "api/Wind/:id");
    }
}());