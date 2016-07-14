

app.service("WindService", function ($http, ShareData) {

    this.getDevices = function () {
        
        return $http.get(ShareData.url + "/api/Wind");
    };

    
    this.postDevices = function (Devices) {
        var request = $http({
            method: "post",
            url: ShareData.url + "/api/Wind",
            data: Devices
        });
        return request;
    };

    //Edit Student By ID 
    this.putDevices = function (id, Device) {
        var request = $http({
            method: "put",
            url: ShareData.url + "/api/Wind/" + id,
            data: Device
        });
        return request;

    };

    //Delete Student By Student ID
    this.deleteDevices = function (id) {
        var request = $http({
            method: "delete",
            url: ShareData.url + "/api/Wind/" + id,
        });
        return request;
    };


    this.getDevicesHistory = function () {
        return $http.get(ShareData.url + "/history/");
    };
});