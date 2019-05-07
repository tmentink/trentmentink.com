
var About = ((About) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Data = {
    PERCENT : "data-percent"
  }

  const Selector = {
    BLOCKS        : "#blocks",
    BLOCK_WRAPPER : ".block__wrapper",
    EXPERIENCE    : "[data-experience]",
    TEXT          : "#about__text"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  About.addBlocksAnimation = function() {
    const delay = 100

    $.Velocity.hook($cache(Selector.BLOCK_WRAPPER), "translateY", "50px")
    $.Velocity.hook($cache(Selector.BLOCK_WRAPPER), "opacity", "0")

    Animation.add({
      selector : Selector.BLOCKS,
      offset   : 25,
      animation() {
        $cache(Selector.BLOCK_WRAPPER).each(function(i) {
          $(this).velocity({
            translateY : "0px",
            opacity    : 1
          },
          {
            delay: delay * i
          })
        })
      }
    })
  }

  About.addTextAnimation = function() {
    $.Velocity.hook($cache(Selector.TEXT), "translateY", "50px")
    $.Velocity.hook($cache(Selector.TEXT), "opacity", "0")

    Animation.add({
      selector : Selector.TEXT,
      animation() {
        $cache(Selector.TEXT).velocity({
          translateY : "0px",
          opacity    : 1
        })
      }
    })
  }

  About.calculateExperience = function() {
    const start = 2015
    const current = new Date().getFullYear()

    $cache(Selector.EXPERIENCE).html(current - start)
  }

  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  About.init = function() {
    About.addBlocksAnimation()
    About.addTextAnimation()
    About.calculateExperience()
  }


  return About
})(About || (About = {}))
