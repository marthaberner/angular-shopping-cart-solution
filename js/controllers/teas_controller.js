app.controller('TeasController', [ '$http', function ($http) {
  var _this = this;
  $http.get('/data/tea.json').success(function (teas) {
    _this.all = teas;
  })
}])
