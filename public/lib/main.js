_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };

percent.app.id('61i0tihq9c34fz');

require.config({
  paths: {
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',

    templates: '../templates'
  }
});

require(['timeline', 'update'], function(timeline, update) {
  // timeline.update();
});

