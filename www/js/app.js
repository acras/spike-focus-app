App = Ember.Application.create();

App.Router.map(function() {
  this.resource('products');
  this.resource('geolocation');
});
