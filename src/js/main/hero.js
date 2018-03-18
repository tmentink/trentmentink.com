
var Hero = ((Hero) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    HERO_IMAGE_ACTIVE : "hero__image--active"
  }

  const Selector = {
    HERO                  : "#hero",
    HERO_HEADER           : ".hero__header",
    HERO_IMAGE            : ".hero__image",
    HERO_IMAGE_NOT_ACTIVE : `.hero__image:not(.${ClassName.HERO_IMAGE_ACTIVE})`,
    HERO_TYPER            : ".hero__typer"
  }

  const Images = {
    CurrentIndex: 10,
    Paths: [
      "img/hero/0.jpg",
      "img/hero/1.jpg",
      "img/hero/2.jpg",
      "img/hero/3.jpg",
      "img/hero/4.jpg",
      "img/hero/5.jpg",
      "img/hero/6.jpg",
      "img/hero/7.jpg",
      "img/hero/8.jpg",
      "img/hero/9.jpg"
    ]
  }

  const Slideshow = {
    FadeDuration : 3000,
    Interval     : 10000
  }

  const Typer = {
    Duration: 6500,
    Speed: 75,
    Words: [
      "user interfaces.",
      "business websites.",
      "[ your next project ]",
      "web applications."
    ]
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Hero.getHeaderTop = function() {
    return $cache(Selector.HERO).find(Selector.HERO_HEADER).offset().top
  }

  Hero.getNextImagePath = function() {
    Images.CurrentIndex += 1
    if (Images.CurrentIndex >= Images.Paths.length) {
      Images.CurrentIndex = 0
    }
    return Images.Paths[Images.CurrentIndex]
  }

  Hero.setImagePath = function($img, path) {
    $img.css("background-image", `url('${path}')`)
  }

  Hero.setRandomImageIndex = function() {
    Images.CurrentIndex = Math.floor(Math.random() * (Images.Paths.length +1))
  }

  Hero.startSlideshow = function() {
    setInterval(function() {
      $cache(Selector.HERO).find(Selector.HERO_IMAGE)
        .toggleClass(ClassName.HERO_IMAGE_ACTIVE)

      setTimeout(function() {
        let $img = $cache(Selector.HERO).find(Selector.HERO_IMAGE_NOT_ACTIVE)
        Hero.setImagePath($img, Hero.getNextImagePath())
      }, Slideshow.FadeDuration)

    }, Slideshow.Interval)
  }

  Hero.startTyper = function() {
    new TypeIt(Selector.HERO_TYPER, {
      strings: Typer.Words,
      breakLines: false,
      lifeLike: false,
      loop: true,
      loopDelay: Typer.Duration,
      nextStringDelay: Typer.Duration,
      speed: Typer.Speed,
      startDelete: true
    })
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Hero.init = function() {
    Hero.setRandomImageIndex()

    $cache(Selector.HERO).find(Selector.HERO_IMAGE).each(function() {
      Hero.setImagePath($(this), Hero.getNextImagePath())
    })

    $cache(Selector.HERO).find(Selector.HERO_IMAGE).first()
      .addClass(ClassName.HERO_IMAGE_ACTIVE)

    Hero.startSlideshow()
    Hero.startTyper()
  }


  return Hero
})(Hero || (Hero = {}))
