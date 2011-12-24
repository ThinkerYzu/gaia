/* -*- Mode: Javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';

(function() {
  var DataCall = {
	  init: function() {
      try {
        this._init();
      } catch(e) {
        dump("Exception: " + e);
      }
    },
    
    _init: function() {
      var dcenable = document.getElementById("data-call-enable");
      
      if(dcenable.checked) {
        this.makeDataCall();
      }
      dcenable.addEventListener("change", this.onChange.bind(this));
	  },

    onChange: function(evt) {
      try {
        var dcenable = evt.originalTarget;
        
        if(dcenable.checked) {
          this.makeDataCall();
        } else {
        this.deactivateDataCall();
        }
      } catch(e) {
        dump("Exception: " + e);
      }
    },

    makeDataCall: function() {
      var cdma = 1;
      var apn = "internet";
      var user = "";
      var passwd = "";
      var chappap = 0;
      var pdptype = "IP";
      var phone = window.navigator.mozTelephony;
      
      phone.setupDataCall(cdma, apn,
                          user, passwd, chappap, pdptype);
    },

    deactivateDataCall: function() {
      var phone = window.navigator.mozTelephony;
      
      phone.deactivateDataCall("0001", "0");
    },
  }
  
  window.addEventListener("load", function() {
    DataCall.init();
  });
})();


