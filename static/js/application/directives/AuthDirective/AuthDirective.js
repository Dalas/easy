define(["angular", "angular-modals"],
    function(ng) {
        ng.module('Application')
            .controller('AuthController', ['$scope', 'ModalService', function($scope, ModalService){}])
    }
);