
var SideMenu = ((SM) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    PUSHED       : "sidemenu__pusher--pushed"
  }

  const Selector = {
    CLICKED_OFF   : "#sidemenu, #btnSideMenu",
    MENU_ITEM     : ".sidemenu__item",
    PUSHER        : "#sidemenu__pusher",
    SIDE_MENU     : "#sidemenu",
    TOGGLE_BUTTON : "#btnSideMenu"
  }

  const DURATION  = 250
  const EASING    = "ease-in-out"
  const MAX_WIDTH = "275px"


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  SM.clickedOff = function(e) {
    return $(e.target).closest(Selector.CLICKED_OFF).length === 0
  }

  SM.hide = function() {
    $cache(Selector.PUSHER).removeClass(ClassName.PUSHED).velocity("reverse")
    $cache(Selector.SIDE_MENU).velocity("reverse")
  }

  SM.isVisible = function() {
    return $cache(Selector.PUSHER).hasClass(ClassName.PUSHED)
  }

  SM.show = function() {
    $cache(Selector.PUSHER)
      .addClass(ClassName.PUSHED)
      .velocity({right: MAX_WIDTH}, DURATION, EASING)

    $cache(Selector.SIDE_MENU).velocity({right: "0px"}, DURATION, EASING)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  SM.init = function() {
    $cache(Selector.TOGGLE_BUTTON).on("click", function() {
      SM.isVisible()
        ? SM.hide()
        : SM.show()
    })

    $cache(document).on("click", function(e) {
      if (SM.clickedOff(e) && SM.isVisible()) SM.hide()
    })

    $cache(Selector.SIDE_MENU).on("click", Selector.MENU_ITEM, function() {
      SM.hide()
    })

    BP.min_lg.addListener(function(e) {
      if (e.matches && SM.isVisible()) SM.hide()
    })
  }


  return SM
})(SideMenu || (SideMenu = {}))
