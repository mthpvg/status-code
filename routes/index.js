"use strict";
//-----------------------------------------------------------------------------
//                                     DECLARATIONS
//-----------------------------------------------------------------------------
var express = require('express');
var router = express.Router();
//-----------------------------------------------------------------------------
//                                     PROGRAM
//-----------------------------------------------------------------------------
router.get('/', function(req, res, next) {
  res.send('index')
});
//-----------------------------------------------------------------------------
//                                     EXPORTS
//-----------------------------------------------------------------------------
module.exports = router;
//-----------------------------------------------------------------------------
//                                     END
//-----------------------------------------------------------------------------
