
/**
 * Module dependencies.
 */
var db=require("./db.js");
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , bodyParser=require('body-parser');
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
   if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  } else {
    return next();
  }
});
app.use(express.static(path.join(__dirname, 'public')));
app.use("/rules",routes)
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
