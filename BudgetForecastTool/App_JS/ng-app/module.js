/// <reference path="D:\Wind Files\Wind.DeviceWINDtabManagement.Web\Wind.DeviceWINDtabManagement.Web\Templates/home.html" />
/// <reference path="D:\Wind Files\Wind.DeviceWINDtabManagement.Web\Wind.DeviceWINDtabManagement.Web\Templates/home.html" />
var app = angular.module("app", ["xeditable","ngRoute"]);

var common = [];

app.factory("ShareData", function () {
    return { value: 0, url: "http://localhost:50763" }
});

app.config(function ($routeProvider,$locationProvider) {

    $routeProvider
        .when("/", {

            redirectTo: function () {
                return '/home';
            }
        })
        .when("/home", {

            templateUrl: "/Templates/home.html",
            controller: "Ctrl"

        })
     .when("/adddevice", {

         templateUrl: "/Templates/adddevice.html",
         controller: "Ctrl"

     })
     .when("/revHis", {

         templateUrl: "/Templates/history.html",
         controller: "Ctrl"

     });

});

app.filter('filterBoth', function ($filter) {
    return function (users, search) {
        if (!search) return users;
        var arrSearch = search.split('|'),
            lookup = '',
             lookup1 = '',
            result = [];

        arrSearch.forEach(function (item) {
            lookup = $filter('filter')(users, { 'imeiStartRange': item } );
           
            if (lookup.length > 0) result = result.concat(lookup);
           
        });

        arrSearch.forEach(function (item) {
            lookup = $filter('filter')(users, { 'sku': item });

            if (lookup.length > 0) result = result.concat(lookup);

        });

        arrSearch.forEach(function (item) {
            lookup = $filter('filter')(users, { 'deviceName': item });

            if (lookup.length > 0) result = result.concat(lookup);

        });

      
        return unique(result);
    };
});

function unique(list) {
    var result = [];
    $.each(list, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}



//app.factory("authentication", function ($http, $q, $window,ShareData) {

//    var user;

//    function login() {

//        // check if the user already exists for this session
//        if (user) {
//            return $q.when(user); // resolve with given value, necessary because calling function expects a promise.
//        }

//        var url = ShareData.url + '/current/';
//        return $http.get(url).then(function (result) {
//            var result = result.data;

//            user = {
//                id: result.UserId,
//                displayName: result.DisplayName,
//                guid: result.ADGuid,
//                isAdmin: result.IsAdmin
//            };

//            addUserToStorage();

//            console.log("user created.");
//            return $q.when(user);
//        });
//    }

//    function addUserToStorage() {
//        $window.sessionStorage["user"] = JSON.stringify(user);
//    }

//    function getUser() {
//        return user;
//    }

//    function init() {
//        if ($window.sessionStorage["user"]) {
//            user = JSON.parse($window.sessionStorage["user"]);
//        }
//    }

//    init();

//    return {
//        user: user,
//        init: init,
//        addUserToStorage: addUserToStorage,
//        login: login,
//        getUser: getUser
//    };
//});

app.controller('base',['$scope', function ($scope)
{
    $scope.$on('LOAD', function () {
        $scope.isLoading = true;
    });

    $scope.$on('UNLOAD', function () {
        $scope.isLoading = false;
    });

}]);

app.run(function (editableOptions) {
    editableOptions.theme = 'bs3';

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

   
});

