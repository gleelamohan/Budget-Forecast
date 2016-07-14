define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("configuration", ['ngRoute']);

    app.config(["$provide", "$routeProvider", "$locationProvider", "$httpProvider", function ($provide, $routeProvider, $locationProvider, $httpProvider) {

        $provide.decorator("$sniffer", function ($delegate) {
            $delegate.history = false;
            return $delegate;
        });


        //Showing Routing

        $routeProvider.when(
            "/",
            angularAMD.route({
                templateUrl: "ConfigurationHome",
                controller: "ConfigurationHomeController",
                controllerUrl: "controllers/ConfigurationHomeController",
                caseInsensitiveMatch: true
            }))
            .when(
            "/configuration",
            angularAMD.route({
                templateUrl: "ConfigurationHome",
                controller: "ConfigurationHomeController",
                controllerUrl: "controllers/ConfigurationHomeController",
                caseInsensitiveMatch: true
            }))
            .when(
            "/addnewdevice",
            angularAMD.route({
                templateUrl: "AddNewDevice",
                controller: "AddNewDeviceController",
                controllerUrl: "controllers/AddNewDeviceController",
                caseInsensitiveMatch: true
            }))
            .otherwise(
            { redirectTo: "/configuration" });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix("!");
    }]);
    return angularAMD.bootstrap(app);
});