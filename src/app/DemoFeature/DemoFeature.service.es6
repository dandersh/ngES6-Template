/**
 *     Created by dandersh on 7/16/16
 **/
(function() {

    'use strict';

    let DemoFeature = angular.module('template-project.DemoFeature');

    DemoFeature.service('DemoService', DemoService);

    DemoService.$inject = [];

    function DemoService() {
        let demoMathFn = (x, y) =>  x + y;

        return {
            demoMathFn : demoMathFn
        };
    }

})();