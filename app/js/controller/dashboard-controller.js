'use strict';


myAppControllers.controller('DashboardController', ['$scope', function ($scope) {

    $scope.about = {};
    $scope.about.name = 'abdo';
    $scope.about.pseudo = 'Abrab';
    $scope.about.email = 'abrab@gmail.com';
    $scope.about.appName = 'Product Managment';
    $scope.about.version = '0.1 (angularJs)';

    $scope.getFullName = function (name, pseudo) {
        return name + ' ' + pseudo;
    };

}]);