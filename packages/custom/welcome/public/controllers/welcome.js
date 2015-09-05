'use strict';

/* jshint -W098 */
angular.module('mean.welcome').controller('WelcomeController', ['$scope', 'Global', 'Welcome',
  function($scope, Global, Welcome) {
    $scope.global = Global;
    $scope.package = {
      name: 'welcome'
    };
  }
]);
