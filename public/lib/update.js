define(['timeline'], function(timeline) {
  $('button[type=submit]').click(sendUpdate);

  function sendUpdate(e) {
    e.preventDefault();

    var text = $('textarea[name=text]').val();
    console.log('submitting', text);

    var promise = jQuery.post('/statuses', {
      name: 'Me',
      text: text
    });

    promise.then(
      timeline.update,
      alert.bind(null, 'Something\'s wrong Jimmy...')
    );

    return false;
  }
});
