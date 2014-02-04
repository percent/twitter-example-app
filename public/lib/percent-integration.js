(function() {
  percent.app.key('61i0tihq9c34fz');

  percent.user.on('signed out', setupAuth);
  percent.user.on('user', setupAuth);
  setupAuth();

  function setupAuth() {
    var user = percent.user.user;
    var auth = user && user.auth;
    var value = auth ? JSON.stringify(auth) : '';
    console.log('set cookie', value);
    document.cookie = 'percent-auth='+encodeURIComponent(value);
  }

  $(document).ajaxError(function(ev, xhr, settings, err) {
    if (xhr.status === 401 && percent.user.user)
      percent.user.logout();
  });
})();

