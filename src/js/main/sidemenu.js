
var SideMenu = ((SM) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    PUSHED  : "sidemenu__pusher--pushed",
    VISIBLE : "sidemenu--visible"
  }

  const Selector = {
    CLICKED_OFF   : "#sidemenu, #btnSideMenu",
    MENU_ITEM     : ".sidemenu__item",
    PUSHER        : "#sidemenu__pusher",
    SIDE_MENU     : "#sidemenu",
    TOGGLE_BUTTON : "#btnSideMenu"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  SM.clickedOff = function(e) {
    return $(e.target).closest(Selector.CLICKED_OFF).length === 0
  }

  SM.hide = function() {
    if (SM.isVisible()) SM.toggle()
  }

  SM.isVisible = function() {
    return $cache(Selector.SIDE_MENU).hasClass(ClassName.VISIBLE)
  }

  SM.toggle = function() {
    $cache(Selector.SIDE_MENU).toggleClass(ClassName.VISIBLE)
    $cache(Selector.PUSHER).toggleClass(ClassName.PUSHED)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  SM.init = function() {
    $cache(Selector.TOGGLE_BUTTON).on("click", function() {
      SM.toggle()
    })

    $cache(document).on("click", function(e) {
      if (SM.clickedOff(e)) SM.hide()
    })

    $cache(Selector.SIDE_MENU).on("click", Selector.MENU_ITEM, function() {
      SM.hide()
    })

    BP.min_lg.addListener(function(e) {
      if (e.matches) SM.hide()
    })
  }


  return SM
})(SideMenu || (SideMenu = {}))
