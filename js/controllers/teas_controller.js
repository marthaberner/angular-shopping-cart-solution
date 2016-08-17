app.controller('TeasController', [ '$http', 'priceFilter', function ($http, priceFilter, $sanitize) {
  var _this = this;
  _this.sortTitle = '';
  $http.get('/data/tea.json').success(function (teas) {
    _this.all = teas;
  })

  _this.setSort = function (choice) {
    _this.sortTitle = choice;
    choice = choice === 'highest' ? "-price" : "price";
    _this.sortBy = choice;
  }
}])
