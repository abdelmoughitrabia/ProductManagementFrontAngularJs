'use strict';

// Define the `myApp` module
let myApp = angular.module('myApp', [
    'ngRoute',
    'myAppControllers',
    'myAppServices'
]);


/* Routing */
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'view/dashboard.html',
            controller: 'DashboardController'
        }).when('/productList', {
            templateUrl: 'view/productList.html',
            controller: 'ProductListController'
        }).when('/addProduct', {
            templateUrl: 'view/addProduct.html',
            controller: 'ProductAddController'
        }).when('/editProduct/:id', {
            templateUrl: 'view/editProduct.html',
            controller: 'ProductEditController'
        }).otherwise({
            redirectTo: '/dashboard'
        });
    }]);

/* Controllers */
let myAppControllers = angular.module('myAppControllers', []);

/* Services */
let myAppServices = angular.module('myAppServices', []);

/* Filters */
let myAppfilters = angular.module('myAppfilters', []);