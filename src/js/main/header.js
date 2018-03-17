
var Header = ((Header) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    ACTIVE : "header--active"
  }

  const Selector = {
    HEADER      : "#header",
    HERO        : "#hero",
    HERO_HEADER : ".hero__header"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Header.getHeight = function() {
    return $cache(Selector.HEADER).height()
  }

  Header.toggleActiveStyles = function() {
    const heroOffset = Hero.getHeaderTop() - 100
    const toggle     = $cache(document).scrollTop() >= heroOffset
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
