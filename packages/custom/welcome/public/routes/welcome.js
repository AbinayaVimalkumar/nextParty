'use strict';

angular.module('mean.welcome').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('welcome example page', {
      url: '/welcome/example',
      templateUrl: 'welcome/views/index.html'
    });
  }
]);

angular.module('mean.welcome', ['mean.system'])
.config(['$viewPathProvider', function($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'welcome/views/index.html');
}]);
