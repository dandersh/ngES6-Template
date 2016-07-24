var app = angular.module('template-project', []);

app.controller('HelloController', HelloController);

HelloController.$inject = ['$http'];

function HelloController($http) {
    var vm = this;
    vm.text = 'Hello Angular! HEREEEE';
}

let text = 'this is es6 text estint';
console.log(text);