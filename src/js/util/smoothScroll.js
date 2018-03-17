
!(() => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const DATA_ATTR = "data-scrollto"
  const DURATION  = 1500
  const EASING    = "easeInOutExpo"

  const Selector = {
    HTML_BODY : "html, body"
  }


  // ----------------------------------------------------------------------
  // Smooth Scroll
  // ----------------------------------------------------------------------

  $cache(document).on("click", `[${DATA_ATTR}]`, function() {
    const target  = $(this).attr(DATA_ATTR)
    const $target = $(target)

    if ($target) {
      $cache(Selector.HTML_BODY).stop().animate({
        scrollTop: $target.offset().top - Header.getHeight()
      }, DURATION, EASING)
    }
  })


})()
