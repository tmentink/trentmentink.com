
var Projects = ((Projects) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Selector = {
    TEXT : "#projects__text"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Projects.addTextAnimation = function() {
    $.Velocity.hook($cache(Selector.TEXT), "translateY", "50px")
    $.Velocity.hook($cache(Selector.TEXT), "opacity", "0")

    Animation.add({
      selector : Selector.TEXT,
      offset   : 50,
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
    Projects.addTextAnimation()
  }


  return Projects
})(Projects || (Projects = {}))
