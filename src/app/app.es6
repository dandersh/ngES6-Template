(function() {
    'use strict';

    var app = angular.module('template-project', ['ui.router','template-project.DemoFeature']);

    app.controller('HelloController', HelloController);

    HelloController.$inject = [];

    function HelloController() {
        var vm = this;
        vm.text = 'Hello Angular!';
    }
})();