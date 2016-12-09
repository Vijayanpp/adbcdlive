var express = require('express');
var jsonfile = require('jsonfile');
var server=require('./server/ent.js');
var entjson='./server/json/entertainment.json'
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));


app.get('/', function(request, response) {
  response.render('index.html');
});

app.get('/news', function(request, response) {
 jsonfile.readFile(entjson, function(err, obj) {
  response.send(obj)
})
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log(entjson);
});



