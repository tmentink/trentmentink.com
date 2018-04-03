
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
  // Public
  // ----------------------------------------------------------------------

  Projects.addCardsAnimation = function() {
    const delay  = 100
    const $cards = $cache(Selector.CARDS).find(Selector.CARD)

    $.Velocity.hook($cards, "translateY", "50px")
    $.Velocity.hook($cards, "opacity", "0")

    Animation.add({
      selector : Selector.CARDS,
      offset   : 50,
      animation() {
        $cards.each(function(i) {
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


  return Projects
})(Projects || (Projects = {}))
