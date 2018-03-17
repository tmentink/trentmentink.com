
!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Selector Cache
  // ----------------------------------------------------------------------

  var SelectorCache = {}

  window.$cache = function (selector, context, reset) {
    if (typeof context === "boolean") {
      reset   = context
      context = false
    }
    var cacheKey = context
      ? `${context.selector} ${selector}`
      : selector

    if (undefined === SelectorCache[cacheKey] || reset) {
      SelectorCache[cacheKey] = context
        ? context.find(selector)
        : jQuery(selector)
    }

    return SelectorCache[cacheKey]
  }


  // ----------------------------------------------------------------------
  // Easings
  // ----------------------------------------------------------------------

  $.easing.easeInOutExpo = function (x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2
  }

})()
