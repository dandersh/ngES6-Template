'use strict';

/**
 *     Created by dandersh on 7/16/16
 **/
(function () {
    'use strict';

    var firstFeature = angular.module('template-project.firstFeature');

    firstFeature.controller('FirstController', FirstController);

    FirstController.$inject = ['FirstService'];

    function FirstController(FirstService) {
        var fc = this;
        fc.demoText = 'This is text from first controller';
        var firstFunc = FirstService.firstMathFn(3, 5);
    }
})();
//# sourceMappingURL=firstFeature.controller.js.map