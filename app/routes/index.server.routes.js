'use strict';

module.exports=function(app){
  var index = require('../controllers/index.server.controllers');
  app.route('/').get(index.render);
}
