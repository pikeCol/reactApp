var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var http = require('http')
var path = require('path');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var server = http.createServer(app);

app.use(function(req,res,next){
  return res.sendFile(path.resolve('build/index.html'))
})
app.use(express.static(path.join(__dirname, 'build/static')));


server.listen(8000,function(){
  console.log('success');
})
