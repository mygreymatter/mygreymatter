var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

app.set('port', PORT);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Server running at http://127.0.0.1:' + app.get('port'));
});
