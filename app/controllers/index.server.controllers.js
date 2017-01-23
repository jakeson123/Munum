'use strict';

exports.render = function (req, res){
  res.render('layout.server.view.pug',{
    title:'Rutas por Colombia'
  });
};
