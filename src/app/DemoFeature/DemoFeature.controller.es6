/**
 *     Created by dandersh on 7/16/16
 **/
(function() {
    'use strict';

    let DemoFeature = angular.module('template-project.DemoFeature');

    DemoFeature.controller('DemoController', DemoController);

    DemoController.$inject = ['DemoService'];

    function DemoController(DemoService) {
        let fc = this;
        fc.demoText = 'This is text from demo controller';
        let demoFunc = DemoService.demoMathFn(3,5);
    }

})();