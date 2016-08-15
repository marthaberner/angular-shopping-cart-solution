app.controller('TeasController', [ '$http', function ($http) {
  var teas = this;
  $http.get('/data/tea.json').success(function (teas) {
    teas.all = teas;
  })
}])
