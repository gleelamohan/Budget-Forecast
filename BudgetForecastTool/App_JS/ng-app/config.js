require.config({
    baseUrl: "App_JS/ng-app",
    paths: {
        'angular': '../../Scripts/angular.min',
        'angular-route': '../../Scripts/angular-route.min',
        'angularAMD': '../../Scripts/angularAMD',
        'jQuery': '../../Scripts/jquery-1.10.2.min',
        'underscore': '../../Scripts/underscore.min',
        'moment': '../../Scripts/moment.min',
        'bootstrap': '../../Scripts/bootstrap'
    },
    shim: {
        'angular': ['jQuery'],
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'bootstrap': ['jQuery'],
    },
    deps: ['bootstrap', 'app']
});