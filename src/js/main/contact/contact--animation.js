
var Contact = ((Contact) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const Selector = {
    CONTAINER : "#contact__container"
  }


  // ----------------------------------------------------------------------
  // Public
  // ----------------------------------------------------------------------

  Contact.addContainerAnimation = function() {
    $.Velocity.hook($cache(Selector.CONTAINER), "translateY", "50px")
    $.Velocity.hook($cache(Selector.CONTAINER), "opacity", "0")

    Animation.add({
      selector : Selector.CONTAINER,
      offset   : 50,
      animation() {
        $cache(Selector.CONTAINER).velocity({
          translateY : "0px",
          opacity    : 1
        })
      }
    })
  }


  return Contact
})(Contact || (Contact = {}))
