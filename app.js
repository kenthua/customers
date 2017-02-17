var express = require('express');
var monk = require('monk');
var mysql = require('mysql');

var app = express();

//app configuration
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

//mysql configuration
var mysqlHost = process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost';
var mysqlPort = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306;
var mysqlUser = 'dbadmin'; //mysql username
var mysqlPass = 'dbpassword'; //mysql password
var mysqlDb   = 'nodejs'; //mysql database name

//connection strings
var mysqlString = 'mysql://'   + mysqlUser + ':' + mysqlPass + '@' + mysqlHost + ':' + mysqlPort + '/' + mysqlDb;

//connect to mysql
var mysqlClient = mysql.createConnection(mysqlString);
mysqlClient.connect(function(err){
  if (err) console.log(err);
});


// app is running!
app.get('/', function(req, res) {
  res.send('OK');
});

//MySQL is running!
app.get('/mysql', function(req, res) {
  mysqlClient.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
      res.send('NOT OK' + JSON.stringify(err));
    } else {
      res.send('OK: ' + rows[0].solution);
    }
  });
});


app.listen(port, ipaddr);

console.log('Server running at http://' + ipaddr + ':' + port + '/');
console.log('MySQL running at mysql://[user:password]@' + mysqlHost + ':' + mysqlPort + '/nodejs');
