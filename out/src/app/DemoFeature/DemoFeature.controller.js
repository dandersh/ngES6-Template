'use strict';

/**
 *     Created by dandersh on 7/16/16
 **/
(function () {
    'use strict';

    var DemoFeature = angular.module('template-project.DemoFeature');

    DemoFeature.controller('DemoController', DemoController);

    DemoController.$inject = ['DemoService'];

    function DemoController(DemoService) {
        var fc = this;
        fc.demoText = 'This is text from demo controller';
        var demoFunc = DemoService.demoMathFn(3, 5);
    }
})();
//# sourceMappingURL=DemoFeature.controller.js.map