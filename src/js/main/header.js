
var Header = ((Header) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    ACTIVE : "header--active"
  }

  const Selector = {
    HEADER : "#header"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Header.getHeight = function() {
    return $cache(Selector.HEADER).height()
  }

  Header.toggleActiveStyles = function() {
    const toggle = $cache(document).scrollTop() >= Hero.getHeaderTop() - 100
    $cache(Selector.HEADER).toggleClass(ClassName.ACTIVE, toggle)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Header.init = function() {
    $cache(document).on("scroll", Header.toggleActiveStyles)
  }


  return Header
})(Header || (Header = {}))
