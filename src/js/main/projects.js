
var Projects = ((Projects) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Selector = {
    CARDS : "#cards",
    CARD  : ".card",
    TEXT  : "#projects__text"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Projects.addCardsAnimation = function() {
    const delay = 100

    $.Velocity.hook($cache(Selector.CARD), "translateY", "50px")
    $.Velocity.hook($cache(Selector.CARD), "opacity", "0")

    Animation.add({
      selector : Selector.CARDS,
      offset   : 50,
      animation() {
        $cache(Selector.CARD).each(function(i) {
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

  Projects.addTextAnimation = function() {
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


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Projects.init = function() {
    Projects.addCardsAnimation()
    Projects.addTextAnimation()
  }


  return Projects
})(Projects || (Projects = {}))
