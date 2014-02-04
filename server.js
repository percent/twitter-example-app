var express = require('express');
var percentAuth = require('percent-auth-middleware');

var statuses = [];
var percentAppKey = 'dWghkFhBB7SvGLZNI5jjHE5mh0U+73TpkKwkRYAlstc=';

var app = express()
  .use(express.logger('dev'))
  .use(express.cookieParser())
  .use(percentAuth({ key: percentAppKey, maxSessionSeconds: 10 }))
  .use(express.static(__dirname + '/public'));

app.get('/statuses', ensureUser, list);
app.post('/statuses',
   ensureUser,
   express.json(),
   express.urlencoded(),
   update);

function ensureUser(req, res, next) {
  if (! req.percent)
    return res.send(401);
  next();
}

function list(req, res) {
  res.send(statuses.slice(5));
}

function update(req, res) {
  if (req.body.text)
    statuses.unshift({
      name: req.percent.user.slice(0, req.percent.user.indexOf('@')),
      text: req.body.text,
      timestamp: Date.now()
    });
  res.send(200);
}

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Listening on http://localhost:%d', port);
});

