// require('lazysizes');
;(function(window, document, undefined) {

  /**
   * Matches.
   * @param  {Element}  elem
   * @param  {String}   selector
   * @return {Boolean}
   */
  function matches(elem, selector) {
    if (!selector || !elem || elem.nodeType !== 1) {
      return false;
    }

    var matchesSelector = elem.webkitMatchesSelector ||
      elem.mozMatchesSelector ||
      elem.oMatchesSelector ||
      elem.msMatchesSelector ||
      elem.matchesSelector;

    if (matchesSelector) {
      return matchesSelector.call(elem, selector);
    }

    return false;
  }

  /**
   * Closest.
   * @param  {Element}  elem
   * @param  {String}   selector
   * @return {Element}
   */
  function closest(elem, selector) {
    while (elem && !matches(elem, selector)) {
      elem = elem.parentNode;
    }

    return elem || null;
  }

  /**
   * Once the user agent has fully parsed the element and its descendants and
   * is ready to render the element to the target device.
   *
   * Referenced external resources that are required must be loaded, parsed
   * and ready to render before the event is triggered.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Events/SVGLoad
   */
  document.querySelector('svg').addEventListener('load', function(e) {
    var parent = closest(e.target, '.o-lazyload');
    if (!parent) { return false; }
    parent.classList.add('has-loaded');
  });

})(window, document);
