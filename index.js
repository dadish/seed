var express                     = require('express')
var chalk                       = require('chalk');
var argv                        = require('yargs').argv;

var app = express();
var port = argv.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use('/deps/', express.static(__dirname + '/deps'));
app.use('/build/', express.static(__dirname + '/build'));

app.listen(port);

console.log(chalk.green('Serving at 127.0.0.1:' + port));