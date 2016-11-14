"use strict";
//-----------------------------------------------------------------------------
//                                     EXPORTS
//-----------------------------------------------------------------------------
module.exports = function errorHandler(node_env) {
  return function (err, req, res, next) {
    res.status(err.status || 500);
    var html = '<div>' + new Date() + '</div><div>Error:</div><div>' + JSON.stringify(err, null, 2) + '</div>'
    res.send(html);
  }
}
//-----------------------------------------------------------------------------
//                                     END
//-----------------------------------------------------------------------------
