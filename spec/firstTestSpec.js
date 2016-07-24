describe('first test', function() {
    let scope, controller, val = true;
    beforeEach(angular.module('template-project'));

    beforeEach(inject(function(_$controller_, $rootScope) {
        controller = _$controller_;
        scope = $rootScope.$new();
    }));

    it('should say Hello Angular!', function() {
        var vm = controller('FirstController', {$scope: scope});
        expect(vm.text).toBe('Hello Angular!');
    });
    it('should be true', function() {
        expect(val).toBe(true);
    })
});
