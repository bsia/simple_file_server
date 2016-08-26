
var express = require('express');
var app = express();

app.get('/', function (req, res) {
      res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3333, function () {
      console.log('Example app listening on port 3333!');
});


/*
var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000;
*/

//app.listen(port);

