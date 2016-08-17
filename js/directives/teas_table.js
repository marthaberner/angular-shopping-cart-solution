app.directive('teasTable', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/teas/partials/teas_table.html',
    controller: 'TeasController',
    controllerAs: 'teasCtrl'
  }
})
