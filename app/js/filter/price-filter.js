myAppfilters.filter('PriceFilter', [function () {
    return function (input) {
        let num = (input / 1000).toFixed(2);
        return num >= 1 ? num + 'K' : input;
    };
}]);