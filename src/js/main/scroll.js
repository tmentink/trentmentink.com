
var Scroll = ((Scroll) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Data = {
    SCROLLTO : "data-scrollto"
  }

  const Selector = {
    BODY      : "body",
    HTML_BODY : "html, body"
  }

  const DURATION = 1500
  const EASING   = "easeInOutExpo"
  let SCROLL_TOP = 0


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Scroll.disable = function() {
    SCROLL_TOP = $cache(Selector.HTML_BODY).scrollTop()

    $cache(Selector.BODY).css({
      position : "fixed",
      left     : "0px",
      right    : "0px",
      top      : `${SCROLL_TOP * -1}px`
    })
  }

  Scroll.enable = function() {
    $cache(Selector.BODY).css({
      position : "",
      left     : "",
      right    : "",
      top      : ""
    })

    $cache(Selector.HTML_BODY).scrollTop(SCROLL_TOP)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Scroll.init = function() {
    $cache(document).on("click", `[${Data.SCROLLTO}]`, function() {
      const target  = $(this).attr(Data.SCROLLTO)
      const $target = $(target)

      if ($target) {
        $cache(Selector.HTML_BODY).stop().animate({
          scrollTop: $target.offset().top - Header.getHeight()
        }, DURATION, EASING)
      }
    })
  }


  return Scroll
})(Scroll || (Scroll = {}))
