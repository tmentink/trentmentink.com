
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

  const DURATION      = 1500
  const EASING        = "easeInOutExpo"
  let SCROLL_TOP      = 0
  let SCROLLBAR_WIDTH = undefined


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Scroll.disable = function() {
    SCROLL_TOP = $cache(document).scrollTop()

    $cache(Selector.BODY).css({
      "position"    : "fixed",
      "margin-left" : -SCROLLBAR_WIDTH,
      "left"        : "0px",
      "right"       : "0px",
      "top"         : `${SCROLL_TOP * -1}px`
    })

    Header.setWidth(`calc(100% + ${SCROLLBAR_WIDTH}px)`)
  }

  Scroll.enable = function() {
    $cache(Selector.BODY).css({
      "position"    : "",
      "margin-left" : "",
      "left"        : "",
      "right"       : "",
      "top"         : ""
    })

    Header.setWidth("100%")
    $cache(document).scrollTop(SCROLL_TOP)
  }

  Scroll.getScrollBarWidth = function() {
    if (SCROLLBAR_WIDTH === undefined) {
      const $div = $("<div style='width:50px;height:50px;overflow:auto'><div/></div>")
      $div.appendTo(Selector.BODY)

      const $child = $div.children()
      SCROLLBAR_WIDTH = $child.innerWidth() - $child.height(99).innerWidth()
      $div.remove()
    }

    return SCROLLBAR_WIDTH
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Scroll.init = function() {
    Scroll.getScrollBarWidth()

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
