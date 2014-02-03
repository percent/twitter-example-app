define(['views/timeline', 'views/busy'], function(setupView, busy) {

  var Single = Backbone.Model.extend({
  });

  var Collection = Backbone.Collection.extend({
    url: '/statuses',
    model: Single
  });

  var collection = new Collection();
  setupView(collection);

  collection.update = update;
  function update() {
    return collection.fetch({reset: true});
  }

  return collection;
});
