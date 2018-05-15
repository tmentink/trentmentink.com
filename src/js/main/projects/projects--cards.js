
var Projects = ((Projects) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    CARD_HIDDEN : "card--hidden",
  }

  const Selector = {
    CARD          : ".card",
    CARDS         : "#cards",
    CARD_CLOSE    : ".card__close",
    EXPANDED_CARD : "#expanded-card",
    OVERLAY       : "#card-overlay",
  }

  const DURATION = 300
  const EASING   = "ease-in-out"


  // ----------------------------------------------------------------------
  // Private
  // ----------------------------------------------------------------------

  const ExpandedCard = {
    hide() {
      $cache(Selector.EXPANDED_CARD).velocity({
        scale   : 0.6,
        opacity : 0
      },
      {
        duration : DURATION,
        easing   : EASING
      })
    },
    setHTML(html) {
      $cache(Selector.EXPANDED_CARD).html(html)
    },
    setVelocityHooks() {
      const $card = $cache(Selector.EXPANDED_CARD)
      $.Velocity.hook($card, "scale", 0.6)
      $.Velocity.hook($card, "opacity", 0)
    },
    show() {
      $cache(Selector.EXPANDED_CARD).velocity({
        scale   : 1,
        opacity : 1
      },
      {
        duration : DURATION,
        easing   : EASING
      })
    }
  }

  const Overlay = {
    hide() {
      $cache(Selector.OVERLAY).velocity("fadeOut", {
        duration : DURATION,
        easing   : EASING,
        begin    : () => {
          $cache(Selector.OVERLAY).scrollTop(0)
          SelectedCard.show()
        },
        complete : () => {
          $cache(Selector.OVERLAY).css("display", "none")
          Scroll.enable()
        }
      })
    },
    show() {
      $cache(Selector.OVERLAY).velocity("fadeIn", {
        duration : DURATION,
        easing   : EASING,
        begin    : () => {
          Scroll.disable()
          SelectedCard.hide()
        }
      })
    }
  }

  const SelectedCard = {
    hide() {
      this.$card.addClass(ClassName.CARD_HIDDEN)
    },
    saveSelector($card) {
      this.$card = $card
    },
    show() {
      this.$card.removeClass(ClassName.CARD_HIDDEN)
    }
  }

  var hideExpandedCard = function() {
    ExpandedCard.hide()
    Overlay.hide()
  }

  var showExpandedCard = function($card) {
    ExpandedCard.setHTML($card.html())
    ExpandedCard.setVelocityHooks()
    SelectedCard.saveSelector($card)
    Overlay.show()
    ExpandedCard.show()
    SelectedCard.hide()
  }


  // ----------------------------------------------------------------------
  // Public
  // ----------------------------------------------------------------------

  Projects.initCards = function() {
    $cache(Selector.CARDS).on("click", Selector.CARD, function() {
      showExpandedCard($(this))
    })

    $cache(Selector.OVERLAY).on("click", function() {
      hideExpandedCard()
    })

    $cache(Selector.OVERLAY).on("click", Selector.CARD, function(e) {
      e.stopPropagation()
    })

    $cache(Selector.OVERLAY).on("click", Selector.CARD_CLOSE, function(e) {
      e.stopPropagation()
      hideExpandedCard()
    })
  }


  return Projects
})(Projects || (Projects = {}))
