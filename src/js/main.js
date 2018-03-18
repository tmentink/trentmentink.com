!function() {


!function () {
  "use strict";

  // ----------------------------------------------------------------------
  // Array.find
  // ----------------------------------------------------------------------

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
      value: function value(predicate) {

        // eslint-disable-next-line eqeqeq
        if (this == null) {
          throw new TypeError("'this' is null or not defined");
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        var thisArg = arguments[1];
        var k = 0;

        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          k++;
        }

        return undefined;
      }
    });
  }

  // ----------------------------------------------------------------------
  // Array.includes
  // ----------------------------------------------------------------------

  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
      value: function value(searchElement, fromIndex) {

        // eslint-disable-next-line eqeqeq
        if (this == null) {
          throw new TypeError("'this' is null or not defined");
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex || 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }

        return false;
      }
    });
  }
}();

var BP = {
  min_sm: window.matchMedia("(min-width: 576px)"),
  min_md: window.matchMedia("(min-width: 768px)"),
  min_lg: window.matchMedia("(min-width: 992px)"),
  min_xl: window.matchMedia("(min-width: 1200px)"),

  max_xs: window.matchMedia("(max-width: 575px)"),
  max_sm: window.matchMedia("(max-width: 767px)"),
  max_md: window.matchMedia("(max-width: 991px)"),
  max_lg: window.matchMedia("(max-width: 1199px)"),

  only_xs: window.matchMedia("(max-width: 575px)"),
  only_sm: window.matchMedia("(min-width: 576px) and (max-width: 767px)"),
  only_md: window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
  only_lg: window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),
  only_xl: window.matchMedia("(min-width: 1200px)"),

  max_sm_portrait: window.matchMedia("(max-width: 767px) and (orientation: portrait)"),
  max_md_portrait: window.matchMedia("(max-width: 991px) and (orientation: portrait)")
};

!function () {
  "use strict";

  // ----------------------------------------------------------------------
  // Selector Cache
  // ----------------------------------------------------------------------

  var SelectorCache = {};

  window.$cache = function (selector, context, reset) {
    if (typeof context === "boolean") {
      reset = context;
      context = false;
    }
    var cacheKey = context ? context.selector + " " + selector : selector;

    if (undefined === SelectorCache[cacheKey] || reset) {
      SelectorCache[cacheKey] = context ? context.find(selector) : jQuery(selector);
    }

    return SelectorCache[cacheKey];
  };

  // ----------------------------------------------------------------------
  // Easings
  // ----------------------------------------------------------------------

  $.easing.easeInOutExpo = function (x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
  };
}();

!function () {
  "use strict";

  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  var DATA_ATTR = "data-scrollto";
  var DURATION = 1500;
  var EASING = "easeInOutExpo";

  var Selector = {
    HTML_BODY: "html, body"

    // ----------------------------------------------------------------------
    // Smooth Scroll
    // ----------------------------------------------------------------------

  };$cache(document).on("click", "[" + DATA_ATTR + "]", function () {
    var target = $(this).attr(DATA_ATTR);
    var $target = $(target);

    if ($target) {
      $cache(Selector.HTML_BODY).stop().animate({
        scrollTop: $target.offset().top - Header.getHeight()
      }, DURATION, EASING);
    }
  });
}();

var Header = function (Header) {
  "use strict";

  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  var ClassName = {
    ACTIVE: "header--active"
  };

  var Selector = {
    HEADER: "#header",
    HERO: "#hero",
    HERO_HEADER: ".hero__header"

    // ----------------------------------------------------------------------
    // Public Methods
    // ----------------------------------------------------------------------

  };Header.getHeight = function () {
    return $cache(Selector.HEADER).height();
  };

  Header.toggleActiveStyles = function () {
    var heroOffset = Hero.getHeaderTop() - 100;
    var toggle = $cache(document).scrollTop() >= heroOffset;
    $cache(Selector.HEADER).toggleClass(ClassName.ACTIVE, toggle);
  };

  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Header.init = function () {
    $cache(document).on("scroll", Header.toggleActiveStyles);
  };

  return Header;
}(Header || (Header = {}));

var Hero = function (Hero) {
  "use strict";

  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  var ClassName = {
    HERO_IMAGE_ACTIVE: "hero__image--active"
  };

  var Selector = {
    HERO: "#hero",
    HERO_HEADER: ".hero__header",
    HERO_IMAGE: ".hero__image",
    HERO_IMAGE_NOT_ACTIVE: ".hero__image:not(." + ClassName.HERO_IMAGE_ACTIVE + ")",
    HERO_TYPER: ".hero__typer"
  };

  var Images = {
    CurrentIndex: 10,
    Paths: ["img/hero/0.jpg", "img/hero/1.jpg", "img/hero/2.jpg", "img/hero/3.jpg", "img/hero/4.jpg", "img/hero/5.jpg", "img/hero/6.jpg", "img/hero/7.jpg", "img/hero/8.jpg", "img/hero/9.jpg"]
  };

  var Slideshow = {
    FadeDuration: 3000,
    Interval: 10000
  };

  var Typer = {
    Duration: 6000,
    Speed: 75,
    Words: ["web applications.", "user interfaces.", "business websites.", "[ your next project ]"]

    // ----------------------------------------------------------------------
    // Public Methods
    // ----------------------------------------------------------------------

  };Hero.getHeaderTop = function () {
    return $cache(Selector.HERO).find(Selector.HERO_HEADER).offset().top;
  };

  Hero.getNextImagePath = function () {
    Images.CurrentIndex += 1;
    if (Images.CurrentIndex >= Images.Paths.length) {
      Images.CurrentIndex = 0;
    }
    return Images.Paths[Images.CurrentIndex];
  };

  Hero.setImagePath = function ($img, path) {
    $img.css("background-image", "url('" + path + "')");
  };

  Hero.setRandomImageIndex = function () {
    Images.CurrentIndex = Math.floor(Math.random() * (Images.Paths.length + 1));
  };

  Hero.startSlideshow = function () {
    setInterval(function () {
      $cache(Selector.HERO).find(Selector.HERO_IMAGE).toggleClass(ClassName.HERO_IMAGE_ACTIVE);

      setTimeout(function () {
        var $img = $cache(Selector.HERO).find(Selector.HERO_IMAGE_NOT_ACTIVE);
        Hero.setImagePath($img, Hero.getNextImagePath());
      }, Slideshow.FadeDuration);
    }, Slideshow.Interval);
  };

  Hero.startTyper = function () {
    new TypeIt(Selector.HERO_TYPER, {
      strings: Typer.Words,
      breakLines: false,
      lifeLike: false,
      loop: true,
      loopDelay: Typer.Duration,
      nextStringDelay: Typer.Duration,
      speed: Typer.Speed
    });
  };

  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Hero.init = function () {
    Hero.setRandomImageIndex();

    $cache(Selector.HERO).find(Selector.HERO_IMAGE).each(function () {
      Hero.setImagePath($(this), Hero.getNextImagePath());
    });

    $cache(Selector.HERO).find(Selector.HERO_IMAGE).first().addClass(ClassName.HERO_IMAGE_ACTIVE);

    Hero.startSlideshow();
    Hero.startTyper();
  };

  return Hero;
}(Hero || (Hero = {}));

!function () {
  "use strict";

  // ----------------------------------------------------------------------
  // Page Init
  // ----------------------------------------------------------------------

  $(document).ready(function () {
    Header.init();
    Hero.init();
    SideMenu.init();
  });
}();

var SideMenu = function (SM) {
  "use strict";

  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  var ClassName = {
    PUSHED: "sidemenu__pusher--pushed",
    VISIBLE: "sidemenu--visible"
  };

  var Selector = {
    CLICKED_OFF: "#sidemenu, #btnSideMenu",
    MENU_ITEM: ".sidemenu__item",
    PUSHER: "#sidemenu__pusher",
    SIDE_MENU: "#sidemenu",
    TOGGLE_BUTTON: "#btnSideMenu"

    // ----------------------------------------------------------------------
    // Public Methods
    // ----------------------------------------------------------------------

  };SM.clickedOff = function (e) {
    return $(e.target).closest(Selector.CLICKED_OFF).length === 0;
  };

  SM.hide = function () {
    if (SM.isVisible()) SM.toggle();
  };

  SM.isVisible = function () {
    return $cache(Selector.SIDE_MENU).hasClass(ClassName.VISIBLE);
  };

  SM.toggle = function () {
    $cache(Selector.SIDE_MENU).toggleClass(ClassName.VISIBLE);
    $cache(Selector.PUSHER).toggleClass(ClassName.PUSHED);
  };

  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  SM.init = function () {
    $cache(Selector.TOGGLE_BUTTON).on("click", function () {
      SM.toggle();
    });

    $cache(document).on("click", function (e) {
      if (SM.clickedOff(e)) SM.hide();
    });

    $cache(Selector.SIDE_MENU).on("click", Selector.MENU_ITEM, function () {
      SM.hide();
    });

    BP.min_lg.addListener(function (e) {
      if (e.matches) SM.hide();
    });
  };

  return SM;
}(SideMenu || (SideMenu = {}));
}()
