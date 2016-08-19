app.directive('teaCard', function () {
  return {
    restrict: 'E',
    templateUrl: '/templates/teas/partials/tea_card.html',
    controller: 'TeasController',
    controllerAs: 'teasCtrl'
  }
})
