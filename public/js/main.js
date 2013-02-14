require.config({
  paths : {
    underscore 	: 'lib/marionette/underscore',
    backbone   	: 'lib/marionette/backbone',
    marionette 	: 'lib/marionette/backbone.marionette',
    jquery     	: 'lib/jquery/jquery',
    bootstrap  	: 'lib/bootstrap/bootstrap',	
    tpl        	: 'lib/marionette/tpl',
    wreqr		: 'lib/marionette/backbone.wreqr'
  },
  shim : {
    underscore : {
      exports : '_'
    },
    backbone : {
      exports : 'Backbone',
      deps : ['jquery','underscore']
    },
    bootstrap : {
    	exports:"bootstrap", 
    	deps:['jquery']
    },
    wreqr: {
	  exports: 'Backbone.Wreqr',
	  deps: ['backbone']  
    },
    marionette : {
      exports : 'Backbone.Marionette',
      deps : ['backbone']
    }
  },
  deps : ['jquery','underscore']
});

require(['marionette','backbone','app','routers/index','controllers/index', 'bootstrap' ],function(m, Backbone,app,Router,Controller){
  "use strict";

  app.start();
  
  var router = new Router({
    controller : Controller
   });
   
   Backbone.history.start();
  
 
});
