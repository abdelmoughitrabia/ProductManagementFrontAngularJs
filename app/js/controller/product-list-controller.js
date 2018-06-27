'use strict';

myAppControllers.controller('ProductListController', ['$scope', 'ProductService', '$location', function ($scope, ProductService, $location) {

    $scope.viewStat = 0;
    $scope.mc = '';
    $scope.size = 5;
    $scope.pageNumber = 0;
    $scope.pageNumbers = [];
    $scope.totalPages = 0;
    $scope.selectedProduct = {};
    $scope.productsPage = {};

    $scope.getProductsPage = function () {
        ProductService.find(this.pageNumber, this.size, this.mc,
            function (data) {
                $scope.productsPage = data;
                $scope.totalPages = data["totalPages"];
                $scope.pageNumbers = new Array($scope.totalPages);
                console.log(data);
            },
            function () {
                console.log("Failure !!");
            })
    };

    initData();

    $scope.onPageNumberClick = function (page) {
        console.log(page);
        $scope.pageNumber = page;
        initData();
    };

    $scope.onPreviousClick = function () {
        if ($scope.pageNumber > 0) {
            $scope.pageNumber -= 1;
            initData();
        }
    };

    $scope.onNextClick = function () {
        if ($scope.pageNumber < $scope.totalPages - 1) {
            $scope.pageNumber += 1;
            initData();
        }
    };

    $scope.onEdit = function (id) {
        $location.path('/editProduct/' + id);
    };

    $scope.delete = function () {
        ProductService.delete($scope.selectedProduct.id,
            function (data) {
                console.log(data);
                $scope.viewStat = 0;
                $scope.productsPage.content.splice($scope.productsPage.content.indexOf($scope.selectedProduct), 1);
            }, function () {
                console.log("Failure");
            });
    };

    $scope.onRemove = function (product) {
        $scope.viewStat = 1;
        $scope.selectedProduct = product;
    };

    $scope.onCancel = function () {
        $scope.viewStat = 0;
    };

    function initData() {
        $scope.getProductsPage();
    }

}]);