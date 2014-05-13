// Orange.js 0.1.0

(function() {

  /**
   * 实现需求：
   *
   * $()
   * addEvent
   *
   * class:
   * add
   * has
   * get
   * 
   * 
   * 对象方法：
   * 
   */
  
  // global object `orange`
  window.orange = function(selector) {
    return new Orange(selector);
  }

  // contructor of class `Orange`
  var Orange = function(selector) {

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
    }
  }
  
})();