/*global define*/

define(['vent'], function (vent) {
  "use strict";

  return {
    funcName : function() {
      vent.trigger('some:event');
    }    
  };
});
