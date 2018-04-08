
var Contact = ((Contact) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    BTN_MORPHED  : "button--morphed",
    MODAL_HIDDEN : "modal--hidden"
  }

  const Selector = {
    BUTTON        : "#contact__button",
    MODAL         : "#modal",
    MODAL_BG      : "#modal__bg",
    MODAL_CLOSE   : "#modal__close",
    MODAL_CONTENT : "#modal__content"
  }


  // ----------------------------------------------------------------------
  // Private
  // ----------------------------------------------------------------------

  const Button = {
    isMorphed : false,

    getHeight() {
      // TODO: This should not be hardcoded
      return BP.min_md.matches
        ? 52
        : 42.1875
    },

    getPosition() {
      const offset    = $cache(Selector.BUTTON).offset()
      const scrollTop = Scroll.getPosition()
      offset.top      = offset.top - scrollTop
      return offset
    },

    morph() {
      Button.isMorphed = true
      $cache(Selector.BUTTON).addClass(ClassName.BTN_MORPHED)
      $cache(Selector.BUTTON).velocity({width: Button.getHeight()}, {
        duration : 250,
        easing   : "ease-in-out",
        complete() {
          Modal.expand()
        }
      })
    },

    unmorph() {
      $cache(Selector.BUTTON).velocity("reverse", {
        complete() {
          Modal.resetBG()
          $cache(Selector.BUTTON).removeClass(ClassName.BTN_MORPHED)
          Button.isMorphed = false
        }
      })
    }
  }

  const Modal = {
    close() {
      $cache(Selector.MODAL_BG).velocity("reverse", {
        easing   : "ease-out",
        begin() {
          Modal.hideContent()
        },
        complete() {
          Scroll.enable()
          Button.unmorph()
        }
      })
    },

    expand() {
      Modal.setupBG()
      Scroll.disable()

      $cache(Selector.MODAL_BG).velocity({scale: Modal.getScale()}, {
        duration : 325,
        easing   : "ease-in",
        complete() {
          Modal.showContent()
        }
      })
    },

    getScale() {
      const winH   = window.innerHeight
      const winW   = window.innerWidth
      const scale  = Math.max(winH, winW) / Button.getHeight()
      return scale * 2.25
    },

    hideContent() {
      $cache(Selector.MODAL_CONTENT).velocity("reverse", {
        complete() {
          $cache(Selector.MODAL).addClass(ClassName.MODAL_HIDDEN)
        }
      })
    },

    resetBG() {
      $cache(Selector.MODAL_BG).attr("style", "")
    },

    setupBG() {
      const pos  = Button.getPosition()
      const size = Button.getHeight()

      $cache(Selector.MODAL_BG).css({
        position  : "fixed",
        top       : pos.top,
        left      : pos.left,
        height    : size,
        width     : size,
      })
    },

    showContent() {
      $cache(Selector.MODAL_CONTENT).velocity("fadeIn", {
        duration : 200,
        easing   : "ease-in-out",
        begin() {
          $cache(Selector.MODAL).removeClass(ClassName.MODAL_HIDDEN)
        }
      })
    }
  }


  // ----------------------------------------------------------------------
  // Public
  // ----------------------------------------------------------------------

  Contact.initModal = function() {
    $cache(Selector.BUTTON).on("click", function() {
      if (Button.isMorphed) return
      Button.morph()
    })

    $cache(Selector.MODAL_CLOSE).on("click", function() {
      Modal.close()
    })
  }


  return Contact
})(Contact || (Contact = {}))
