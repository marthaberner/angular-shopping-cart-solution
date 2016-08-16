app.filter('price', function () {
  return function(amount) {
    amount = amount.toString().split('');
    amount.unshift('$');
    amount.reverse().splice(2, 0, '.');
    return amount.reverse().join('');
  }
})
