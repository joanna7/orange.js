// Orange.js 0.1.0

(function() {
  
  // global object `orange`
  window.orange = function(selector) {
    return new Orange(selector);
  }

  // contructor of class `Orange`
  var Orange = function(selector) {

    // store document, shorten scope
    var document = window.document;

    // storing elements matching the selector
    this.el = [];

    if (!selector) {
      return this;
    }

    // for modern browsers
    if (document.querySelectorAll) {
      // nodeList can be modified in the future
      var nodeList = document.querySelectorAll(selector);
      this.el = nodeList;
    } 

  };

  /*methods*/
  Orange.prototype = {

    // event
    addEvent: function(type, fn) {
      if (document.addEventListener) {
        for (var i = 0, len = this.el.length; i < len; i++) {
          this.el[i].addEventListener(type, fn, false);
          return this;
        }
      } else if (document.attachEvent) {
        for (var i = 0, len = this.el.length; i < len; i++) {
          this.el[i].attachEvent('on' + type, fn);
          return this;
        }
      } else {
        this.el[0]['on' + type] = fn;
        return this;
      }
    },

    // class
    has: function(cls) {
      if (this.el.length != 1) {
        throw new Error('There should be only one matched element.');
      }
      return this.el[0].getAttribute('class').split(' ').indexOf(cls) != -1;
    }
  }
  
})();