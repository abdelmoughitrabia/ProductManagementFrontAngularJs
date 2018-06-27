'use strict';

myAppServices.service('ProductService', ['$http', function ($http) {

    // let self = this;// to resolve the conflicts during a cull within a function

    this.create = function (product, successCallBack, failureCallBack) {
        $http({
            url: 'http://localhost:8080/save',
            method: "POST",
            data: product
        }).success(function (data) {
            successCallBack(data);
        }).error(function (data, status) {
            failureCallBack(data, status);
        })
    };

    this.find = function (page, size, mc, successCallBack, failureCallBack) {
        $http({
            url: "http://localhost:8080/chercherProducts?page=" + page + "&size=" + size + "&mc=" + mc,
            method: "GET",
        }).success(function (data) {
            successCallBack(data);
        }).error(function (data, status) {
            failureCallBack(data, status);
        })
    };

    this.findOne = function (id, successCallBack, failureCallBack) {
        $http({
            url: "http://localhost:8080/products/" + id,
            method: "GET",
        }).success(function (data) {
            successCallBack(data);
        }).error(function (data, status) {
            failureCallBack(data, status);
        })
    };

    this.edit = function (product, successCallBack, failureCallBack) {
        $http({
            url: 'http://localhost:8080/edit/' + product.id,
            method: "PUT",
            data: product
        }).success(function (data) {
            successCallBack(data);
        }).error(function (data, status) {
            failureCallBack(data, status);
        })
    };

    this.delete = function (id, successCallBack, failureCallBack) {
        $http({
            url: 'http://localhost:8080/remove/' + id,
            method: "DELETE",
        }).success(function (data) {
            successCallBack(data);
        }).error(function (data, status) {
            failureCallBack(data, status);
        })
    };

}]);