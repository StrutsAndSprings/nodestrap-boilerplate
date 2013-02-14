// vent.js   inter app event processing
define(['wreqr'], function(Wreqr) {
    "use strict";
    return new Wreqr.EventAggregator();
});