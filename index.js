/**
 * Expose `series`
 */

module.exports = series;

/**
 * series
 */

function series (callbacks) {
  var n = callbacks.length;
  var i;
  var wrapped = new Array(n);
  
  function wrap (current, next) {
    return function () { 
      current(next); 
    };
  }

  for (i = n-1; i >= 0; i -= 1) {
    wrapped[i] = wrap(callbacks[i], wrapped[i+1]);
  }

  wrapped[0]();
}
