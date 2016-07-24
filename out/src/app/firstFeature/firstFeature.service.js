'use strict';

/**
 *     Created by dandersh on 7/16/16
 **/
(function () {

    'use strict';

    var firstFeature = angular.module('template-project.firstFeature');

    firstFeature.service('FirstService', FirstService);

    FirstService.$inject = [];

    function FirstService() {
        var firstMathFn = function firstMathFn(x, y) {
            return x + y;
        };

        return {
            firstMathFn: firstMathFn
        };
    }
})();
//# sourceMappingURL=firstFeature.service.js.map