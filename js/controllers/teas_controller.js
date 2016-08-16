app.controller('TeasController', [ '$http', 'priceFilter', function ($http, priceFilter) {
  var _this = this;
  $http.get('/data/tea.json').success(function (teas) {
    _this.all = teas;
  })
}])
