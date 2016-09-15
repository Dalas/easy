define(["angular", "angular-modals"],
    function(ng) {
        ng.module('Application', ['angularModalService'])
            .controller('AuthController', ['$scope', 'ModalService', function($scope, ModalService){}])
    }
);
