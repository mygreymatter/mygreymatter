(function () {
    angular.module('Home', [])
        .controller('HomeController', function ($scope) {
            $scope.message = 'Awesomeness ends with me!\nThere is no charge for awesomeness!';
        });
})();
