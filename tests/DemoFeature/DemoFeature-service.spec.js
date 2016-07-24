/**
 * Created by dandersh on 7/17/16.
 */
describe('test for Demo service', function() {
    var scope, DemoService;
    beforeEach(module('template-project.DemoFeature'));

    beforeEach(inject(function($injector) {
        DemoService = $injector.get('DemoService')
    }));

    it('Demo service mock should be defined', function() {
        expect(DemoService).toBeDefined();
    });

});