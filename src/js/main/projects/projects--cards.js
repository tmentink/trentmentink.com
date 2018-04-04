
var Projects = ((Projects) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    ANIMATING  : "velocity-animating",
    CLOSE_SHOW : "card__close--show",
    EXPANDED   : "card--expanded"
  }

  const Selector = {
    CARD            : ".card",
    CARD_BODY       : ".card__body",
    CARD_CLOSE      : ".card__close",
    CARDS           : "#cards",
    OVERLAY         : "#card-overlay",
    OVERLAY_CONTENT : "#card-overlay__content",
    PLACEHOLDER     : "#card-placeholder"
  }

  const CARD_MARGIN_X   = 12
  const DURATION        = 250
  const EASING          = "ease-in-out"
  const MD_WIDTH        = 400
  const OVERLAY_PADDING = 50
  const SM_BODY_HEIGHT  = "60vh"
  const SM_WIDTH        = "100vw"
  const Z_INDEX         = 3001

  let SelectedCard


  // ----------------------------------------------------------------------
  // Private
  // ----------------------------------------------------------------------

  class Card {
    constructor($card) {
      this.$card      = $card
      this.$body      = $card.find(Selector.CARD_BODY)
      this.index      = $cache(Selector.CARDS).find(Selector.CARD).index($card)
      this.bodyHeight = SM_BODY_HEIGHT
      this.final      = {
        top   : Scroll.getPosition(),
        left  : 0,
        width : SM_WIDTH
      }
      this.original   = {
        top   : $card.position().top,
        left  : $card.position().left,
        width : $card.outerWidth()
      }
    }

    adjustVariables() {
      if (BP.min_md.matches) {
        this.final.top  += OVERLAY_PADDING
        this.final.left  = ((window.innerWidth - MD_WIDTH) / 2) - CARD_MARGIN_X
        this.final.width = MD_WIDTH

        this.$body.css({
          display : "block",
          width   : this.final.width
        })
        this.bodyHeight = this.$body.innerHeight()

        this.final.left    += Scroll.getScrollBarWidth()
        this.original.left += Scroll.getScrollBarWidth()
      }
    }

    appendToOverlay() {
      $cache(Selector.OVERLAY_CONTENT).scrollTop(0).append(this.$card)

      this.$card.css({
        position : "relative",
        top      : "0px",
        left     : "0px"
      })
    }

    close() {
      const pos = $cache(Selector.PLACEHOLDER).position()

      this.$card.velocity({
        top   : pos.top,
        left  : pos.left,
        width : this.original.width
      },
      {
        duration : DURATION,
        easing   : EASING,
        begin    : () => {
          this.removeFromOverlay()
          this.toggleCloseIcon(false)
          this.closeBody()
          Overlay.hide()
        },
        complete : () => {
          this.$card.css({
            position : "",
            zIndex   : 0
          }).removeClass(ClassName.EXPANDED)
          $cache(Selector.OVERLAY).append($cache(Selector.PLACEHOLDER))
          Scroll.enable()
        }
      })
    }

    closeBody() {
      this.$body.css({opacity: 0})
      this.$body.velocity({
        height: 0
      },
      {
        duration : DURATION,
        easing   : EASING,
        complete : () => {
          this.$body.css({
            display : "none",
            height  : "unset",
            width   : "unset"
          })
        }
      })
    }

    expand() {
      this.$card.velocity({
        top   : this.final.top,
        left  : this.final.left,
        width : this.final.width
      },
      {
        duration : DURATION,
        easing   : EASING,
        begin    : () => {
          Overlay.show()
          this.$card.addClass(ClassName.EXPANDED)
          this.expandBody()
        },
        complete : () => {
          this.appendToOverlay()
          this.toggleCloseIcon(true)
        }
      })
    }

    expandBody() {
      this.$body.velocity({height: this.bodyHeight}, {
        duration : DURATION,
        easing   : EASING,
        complete : () => {
          this.$body.css({height: "unset"})
          this.$body.velocity({opacity: 1}, DURATION, EASING)
        }
      })
    }

    isAnimating() {
      return this.$card.hasClass(ClassName.ANIMATING) ||
             this.$body.hasClass(ClassName.ANIMATING)
    }

    removeFromOverlay() {
      this.$card.insertAt(this.index, $cache(Selector.CARDS))
      this.$card.css({
        position : "absolute",
        top      : this.final.top,
        left     : this.final.left
      })
    }

    setVelocityHooks() {
      $.Velocity.hook(this.$body, "height", 0)
      $.Velocity.hook(this.$body, "display", "block")
      $.Velocity.hook(this.$body, "opacity", 0)
    }

    toggleCloseIcon(show) {
      this.$card.find(Selector.CARD_CLOSE)
        .toggleClass(ClassName.CLOSE_SHOW, show)
    }

    swapWithPlaceholder() {
      $cache(Selector.PLACEHOLDER).insertAt(this.index, $cache(Selector.CARDS))

      this.$card.css({
        position : "absolute",
        top      : this.original.top,
        left     : this.original.left,
        width    : this.original.width,
        zIndex   : Z_INDEX
      })
    }
  }

  const Overlay = {
    hide() {
      $cache(Selector.OVERLAY).velocity("fadeOut", {
        duration : DURATION,
        easing   : EASING
      })
    },
    show() {
      $cache(Selector.OVERLAY).velocity("fadeIn", {
        duration : DURATION,
        easing   : EASING
      })
    }
  }

  var hideCard = function() {
    if (SelectedCard.isAnimating()) return
    SelectedCard.close()
  }

  var showCard = function($card) {
    if (SelectedCard && SelectedCard.isAnimating()) return

    SelectedCard = new Card($card)
    Scroll.disable()
    SelectedCard.adjustVariables()
    SelectedCard.setVelocityHooks()
    SelectedCard.swapWithPlaceholder()
    SelectedCard.expand()
  }


  // ----------------------------------------------------------------------
  // Public
  // ----------------------------------------------------------------------

  Projects.initCards = function() {
    $cache(Selector.CARDS).on("click", Selector.CARD, function() {
      showCard($(this))
    })

    $cache(Selector.OVERLAY).on("click", function() {
      hideCard()
    })

    $cache(Selector.OVERLAY).on("click", Selector.CARD, function(e) {
      e.stopPropagation()
    })

    $cache(Selector.OVERLAY).on("click", Selector.CARD_CLOSE, function(e) {
      e.stopPropagation()
      hideCard()
    })
  }


  return Projects
})(Projects || (Projects = {}))
