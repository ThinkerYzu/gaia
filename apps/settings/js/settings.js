/* -*- Mode: Javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

(function() {
  DataCall = {
	  init: function() {
      var dcenable = document.getElementById("data-call-enable");
      
      if(dcenable.checked) {
        this.makeDataCall();
      }
      dcenable.addEventListener("changed", this.onChange);
	  },

    onChange: function(evt) {
      var dcenable = event.originalTarget;

      if(dcenable.checked) {
        this.makeDataCall();
      } else {
        this.deactivate();
      }
    },

    makeDataCall: function() {
      var cdma = 1;
      var apn = "internet";
      var user = "";
      var passwd = "";
      var chappap = 0;
      var pdptype = "IP";
      
      window.navigator.connect(cdma, apn,
                               user, passwd, chappap, pdptype);
      dump("connect");
    },

    deactivate: function() {
      window.navigator.deactivate("0001", "0");
      dump("deactivate");
    },
  }
})();


