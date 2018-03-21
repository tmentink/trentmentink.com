
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
  const LOAD_DURATION   = 1500
  const LOAD_INTERVAL   = 50
  const RUN_DURATION    = 2500


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Preloader.fadeOut = function() {
    $cache(Selector.PRELOADER).addClass(ClassName.FADE)
    Hero.startSlideshow()
    Hero.startTyper()

    setTimeout(() => {
      $cache(Selector.PRELOADER).addClass(ClassName.HIDE)
    }, FADE_DURATION)
  }

  Preloader.stop = function() {
    $cache(Selector.PRELOADER_TEXT).addClass(ClassName.TEXT_FADE)
    $cache(Selector.PRELOADER_CONTAINER).addClass(ClassName.CONTAINER_RUN)

    setTimeout(() => {
      Preloader.fadeOut()
    }, RUN_DURATION)
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
