'use strict';

var express                     = require('express');
var argv                        = require('yargs').argv;
var path                        = require('path');

var app = express();
var defaultPort = 3000;
var port = argv.port || defaultPort;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/deps/', express.static(path.join(__dirname, '/deps')));
app.use('/build/', express.static(path.join(__dirname, '/build')));
app.use('/css/', express.static(path.join(__dirname, '/css')));
app.use('/js/', express.static(path.join(__dirname, '/js')));
app.use('/test/', express.static(path.join(__dirname, '/test')));

app.listen(port);
