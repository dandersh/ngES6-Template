/**
 * Created by dandersh on 7/17/16.
 */
describe('test for Demo controller', function() {
    var scope, controller;
    beforeEach(module('template-project.DemoFeature'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('DemoController as Demo', {$scope: scope});
    }));

    it('Demo controller should be defined', function() {
        expect(controller).toBeDefined();
    });

    it('should have correct text', function() {
        expect(scope.Demo.demoText).toBe('This is text from demo controller')
    });
});