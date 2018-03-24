
var About = ((About) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Data = {
    PERCENT : "data-percent"
  }

  const Selector = {
    BARS     : "#bars",
    BAR_FILL : ".bar__fill",
    BLOCKS   : "#blocks",
    TEXT     : "#about__text"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  About.addBarsAnimation = function() {
    const delay = 75

    Animation.add({
      selector : Selector.BARS,
      offset   : 25,
      animation() {
        $cache(Selector.BAR_FILL).each(function(i) {
          const $fill   = $(this)
          const percent = $fill.attr(Data.PERCENT)

          $fill.velocity({right: `${100 - percent}%`}, {
            delay: delay * i
          })
        })
      }
    })
  }

  About.addBlocksAnimation = function() {
    Animation.add({
      selector : Selector.BLOCKS,
      offset   : 25,
      animation() {
        $cache(Selector.BLOCKS).velocity({
          translateY : "0px",
          opacity    : 1
        })
      },
      hook() {
        $.Velocity.hook($cache(Selector.BLOCKS), "translateY", "50px")
        $.Velocity.hook($cache(Selector.BLOCKS), "opacity", "0")
      }
    })
  }

  About.addTextAnimation = function() {
    Animation.add({
      selector : Selector.TEXT,
      animation() {
        $cache(Selector.TEXT).velocity({
          translateY : "0px",
          opacity    : 1
        })
      },
      hook() {
        $.Velocity.hook($cache(Selector.TEXT), "translateY", "50px")
        $.Velocity.hook($cache(Selector.TEXT), "opacity", "0")
      }
    })
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  About.init = function() {
    About.addBarsAnimation()
    About.addBlocksAnimation()
    About.addTextAnimation()
  }


  return About
})(About || (About = {}))
