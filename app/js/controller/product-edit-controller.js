'use strict';

myAppControllers.controller('ProductEditController', ['$scope', '$routeParams', 'ProductService', '$location', function ($scope, $routeParams, ProductService, $location) {

    $scope.product = [];

    ProductService.findOne($routeParams.id,
        function (data) {
            console.log(data);
            $scope.product = data;
        },
        function () {
            console.log('Failure');
        });

    $scope.back = function () {
        $location.path('/productList');
    }

    $scope.edit = function () {
        ProductService.edit($scope.product,
            function (data) {
                console.log(data);
                $location.path('/productList');
            }, function () {
                console.log("Failure");
            })
    };

}]);