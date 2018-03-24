
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
    const args     = arguments[0]
    args.triggered = false
    Animations.push(args)

    if ($.type(args.hook) === "function") {
      args.hook()
    }
  }

  Animation.watch = function() {
    for (var i = 0, i_end = Animations.length; i < i_end; i++) {
      const anim = Animations[i]
      if (anim.triggered) continue

      if ($cache(anim.selector).inView(anim.offset)) {
        anim.animation()
        anim.triggered = true
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
