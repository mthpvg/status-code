"use strict";
//-----------------------------------------------------------------------------
//                                     DECLARATIONS
//-----------------------------------------------------------------------------
var path = require('path');
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - EXTERNAL REQUIRES
var express = require('express');
var favicon = require('serve-favicon')
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - VARIABLES
var errorHandler = require('./lib/errorHandler');
var pageNotFound = require('./lib/pageNotFound');
var app = express();
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -ROUTES
var index = require('./routes/index');
var fiveHundred = require('./routes/five-hundred');
var articles = require('./routes/articles');
//-----------------------------------------------------------------------------
//                                     PROGRAM
//-----------------------------------------------------------------------------
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - HIDING TECH STACK
app.disable('x-powered-by');
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -SETTING PORT
app.set('port', process.env.PORT || 3000);
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - FAVICON
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
//- - - - - - - - -TRUSTING OUR NGINX REVERSE PROXY FOR CLIENT'S IP FOR EXAMPLE
app.enable('trust proxy');
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -PUBLIC
app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ROUTING
app.use('/', index);
app.use('/five-hundred', fiveHundred);
app.use('/articles', articles);
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -PAGE NOT FOUND 404
app.use(pageNotFound());
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ERROR HANDLER
app.use(errorHandler(app.get('env')));
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -LISTEN
app.listen(app.get('port'), function() {
  console.log('Port: %d, in %s mode', app.get('port'), app.get('env'));
});
//-----------------------------------------------------------------------------
//                                     EXPORTS
//-----------------------------------------------------------------------------
module.exports = app;
//-----------------------------------------------------------------------------
//                                     END
//-----------------------------------------------------------------------------
