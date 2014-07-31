'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.render('home');
});

/* Calculator Web Form */

app.get('/calc', function(req, res){
  res.render('calc');
});

app.post('/calc', function(req, res){
  var x = req.body.x * 1;
  var y = req.body.y * 1;
  var ans;

  switch(req.body.op){
    case '+':
      ans = x + y;
      break;
    case '-':
      ans = x - y;
      break;
    case '*':
      ans = x * y;
      break;
    case '/':
      ans = x / y;
  }

  res.render('calc', {x:x, y:y, op:req.body.op, ans:ans});
});

/* Too Many Boxes */

app.get('/boxes', function(req, res){
  res.render('boxes');
});

app.post('/boxes', function(req, res){
  var colors = req.body.colors.split(',');
  var widths = req.body.widths
  var heights = req.body.
  var count = req.body.count * 1;

  for(var i = 0; i < b; i++){
    boxes.push(b[i]);
  }

  res.render('boxes2', {b:b, w:w, h:h, c:c});
});

var port = process.env.PORT; 

app.listen(port, function(){ 
  console.log('Express.js is listening, on PORT' + port);
});
