'use strict';

directives.directive('infoDevelopper', function () {
    return {
        restrict: 'E', // as 'E'lement
        templateUrl: "../../view/info-developper-directive.html",
        replace: true, // replace the Element tag by it content '<div> ...'
        scope: { // isolating the scope so to prevent unexpected changes in the parent 'host-controller' scope .
            developperInfo: '=', // 'developper-info' as attr name on the html , '=' set-up a bi-directionnal binding use it for complex attributes such as objects, '@' on way from ctrl to directive and data data is only a string
            getFullNameFunction: '&' // a function that well return the full name
        }
    }
});