var express                     = require('express');
var chalk                       = require('chalk');
var argv                        = require('yargs').argv;
var path                        = require('path');

var app = express();
var defaultPort = 3000;
var port = argv.port || defaultPort;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/deps/', express.static(path.join(__dirname, '/deps')));
app.use('/build/', express.static(path.join(__dirname, '/build')));

app.listen(port);

console.log(chalk.green('Serving at 127.0.0.1:' + port));
