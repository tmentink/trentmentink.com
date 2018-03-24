
var Animation = ((Animation) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Animations = []
  const THROTTLE   = 200

  $.Velocity.defaults.easing   = "easeOutQuad"
  $.Velocity.defaults.duration = 750


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Animation.add = function({selector, offset, animation}) {
    Animations.push(arguments[0])
  }

  Animation.watch = function() {
    let i = Animations.length
    while (i--) {
      const anim = Animations[i]
      if ($cache(anim.selector).inView(anim.offset)) {
        anim.animation()
        Animations.splice(i, 1)
      }
    }
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Animation.init = function() {
    $cache(document).on("scroll", throttle(Animation.watch, THROTTLE))
  }


  return Animation
})(Animation || (Animation = {}))
