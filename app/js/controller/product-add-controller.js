'use strict';

myAppControllers.controller('ProductAddController', ['$scope', 'ProductService',
    '$location', '$rootScope', function ($scope, ProductService,
                                         $location, $rootScope) {

        $scope.product = {};
        $scope.product.label = '';
        $scope.product.qte = '';
        $scope.product.price = '';
        $scope.product.comment = '';

        $scope.create = function () {
            console.log($scope.product);
            ProductService.create($scope.product,
                function (product) {
                    console.log('Success');
                    console.log(product);
                    $scope.product = {};
                    $rootScope.navId = 2;
                    $location.path('/productList');
                },
                function () {
                    console.log("Failure");
                })
        };

    }]);
