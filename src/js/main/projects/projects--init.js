
var Projects = ((Projects) => {
  "use strict"

  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Projects.init = function() {
    Projects.addCardsAnimation()
    Projects.addTextAnimation()
    Projects.initCards()
  }


  return Projects
})(Projects || (Projects = {}))
