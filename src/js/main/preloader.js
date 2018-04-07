
var Preloader = ((Preloader) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    ACTIVE        : "preloader--active",
    CONTAINER_RUN : "preloader__container--run",
    FADE          : "preloader--fade",
    HIDE          : "preloader--hide",
    TEXT_FADE     : "preloader__text--fade"
  }

  const Selector = {
    PRELOADER           : "#preloader",
    PRELOADER_CONTAINER : "#preloader__container",
    PRELOADER_TEXT      : "#preloader__text"
  }

  const FADE_DURATION   = 1500
  const LOAD_INTERVAL   = 50
  const RUN_DURATION    = 2750


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Preloader.fadeOut = function() {
    $cache(Selector.PRELOADER).addClass(ClassName.FADE)
    Hero.startSlideshow()
    Hero.startTyper()
    Hero.setMobileHeight()

    setTimeout(() => {
      $cache(Selector.PRELOADER).addClass(ClassName.HIDE)
      $cache(Selector.PRELOADER).removeClass(ClassName.ACTIVE)
    }, FADE_DURATION)
  }

  Preloader.run = function() {
    const easing = BP.max_sm.matches
      ? [0.680, -1.2, 0.265, 1.4]
      : [0.680, -0.65, 0.265, 1.4]

    $cache(Selector.PRELOADER_CONTAINER).velocity({left: "110%"}, RUN_DURATION, easing)
  }

  Preloader.stop = function() {
    $cache(Selector.PRELOADER_TEXT).addClass(ClassName.TEXT_FADE)
    Preloader.run()

    setTimeout(() => {
      Preloader.fadeOut()
    }, RUN_DURATION - 500)
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Preloader.init = function() {
    let percent = 10

    const int = setInterval(() => {
      percent >= 80
        ? percent = 100
        : percent += 2

      $cache(Selector.PRELOADER_TEXT).html(`${percent}%`)

      if (percent === 100) {
        clearInterval(int)
        Preloader.stop()
      }
    }, LOAD_INTERVAL)
  }


  return Preloader
})(Preloader || (Preloader = {}))
