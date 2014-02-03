define(['text!templates/post.html'], function(template) {

  var compiled = _.template(template);

  var Single = Backbone.View.extend({
    render: renderSingle
  });

  var List = Backbone.View.extend({
    el: '.media-list',
    render: renderList
  });

  var view;

  return setupView;

  function renderSingle() {
    var $newEl = $(compiled(this.model.attributes));
    var $old = this.$el;
    this.setElement($newEl[0]);
    $old.replaceWith($newEl);
    return this;
  }

  function renderList() {
    var this$el = this.$el;
    this.model.each(function(model) {
      var view = new Single({ model: model });
      view.render();
      view.$el.appendTo(this$el);
    });
    return this;
  }

  function setupView(model) {
    if (view)
      return;

    view = new List({ model: model });
    model.on('reset', view.render, view);
  }
});
