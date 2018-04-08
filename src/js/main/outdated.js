
var Outdated = ((Outdated) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    HIDDEN : "outdated--hidden"
  }

  const Selector = {
    CLOSE    : "#outdated__close",
    OUTDATED : "#outdated"
  }


  // ----------------------------------------------------------------------
  // Public
  // ----------------------------------------------------------------------

  Outdated.hide = function() {
    $cache(Selector.OUTDATED).addClass(ClassName.HIDDEN)
  }

  Outdated.show = function() {
    $cache(Selector.OUTDATED).removeClass(ClassName.HIDDEN)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Outdated.init = function() {
    if (bowser.msie === true) Outdated.show()

    $cache(Selector.CLOSE).on("click", Outdated.hide)
  }


  return Outdated
})(Outdated || (Outdated = {}))
