'use strict';

myAppControllers.controller('NavController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.navId = $rootScope.navId = 0;

    $scope.dashboard = function () {
        $scope.navId = $rootScope.navId = 0;
    };
    $scope.addProduct = function () {
        $scope.navId = $rootScope.navId = 1;
    };
    $scope.productList = function () {
        $scope.navId = $rootScope.navId = 2;
    };

}]);
