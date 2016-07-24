'use strict';

/**
 *     Created by dandersh on 7/16/16
 **/
(function () {

    'use strict';

    var DemoFeature = angular.module('template-project.DemoFeature');

    DemoFeature.service('DemoService', DemoService);

    DemoService.$inject = [];

    function DemoService() {
        var demoMathFn = function demoMathFn(x, y) {
            return x + y;
        };

        return {
            demoMathFn: demoMathFn
        };
    }
})();
//# sourceMappingURL=DemoFeature.service.js.map