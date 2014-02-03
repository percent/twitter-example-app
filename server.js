var statuses = [];

var express = require('express');
var cors = require('cors');

var app = express()
  .use(express.logger('dev'))
  .use(cors())
  .use(express.static(__dirname + '/public'));

app.get('/statuses', list);
app.post('/statuses',
   express.json(),
   express.urlencoded(),
   update);

function list(req, res) {
  res.send(statuses);
}

function update(req, res) {
  if (validStatus(req.body))
    statuses.push(req.body);
  res.send(200);
}

function validStatus(status) {
  return status.name && status.text;
}

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Listening on http://localhost:%d', port);
});

