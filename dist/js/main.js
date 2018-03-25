!function(){!function(){"use strict";Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError("'this' is null or not defined");var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],a=0;a<n;){var o=e[a];if(t.call(i,o,a,e))return o;a++}}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError("'this' is null or not defined");var n=Object(this),i=n.length>>>0;if(0===i)return!1;var a,o,c=e||0,r=Math.max(0<=c?c:i-Math.abs(c),0);for(;r<i;){if((a=n[r])===(o=t)||"number"==typeof a&&"number"==typeof o&&isNaN(a)&&isNaN(o))return!0;r++}return!1}})}();var d={min_sm:window.matchMedia("(min-width: 576px)"),min_md:window.matchMedia("(min-width: 768px)"),min_lg:window.matchMedia("(min-width: 992px)"),min_xl:window.matchMedia("(min-width: 1200px)"),max_xs:window.matchMedia("(max-width: 575px)"),max_sm:window.matchMedia("(max-width: 767px)"),max_md:window.matchMedia("(max-width: 991px)"),max_lg:window.matchMedia("(max-width: 1199px)"),only_xs:window.matchMedia("(max-width: 575px)"),only_sm:window.matchMedia("(min-width: 576px) and (max-width: 767px)"),only_md:window.matchMedia("(min-width: 768px) and (max-width: 991px)"),only_lg:window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),only_xl:window.matchMedia("(min-width: 1200px)"),max_sm_portrait:window.matchMedia("(max-width: 767px) and (orientation: portrait)"),max_md_portrait:window.matchMedia("(max-width: 991px) and (orientation: portrait)")};!function(){"use strict";var a={};window.$cache=function(t,e,n){"boolean"==typeof e&&(n=e,e=!1);var i=e?e.selector+" "+t:t;return(void 0===a[i]||n)&&(a[i]=e?e.find(t):jQuery(t)),a[i]},$.fn.inView=function(t){if(!this.length)return!1;var e=this.get(0).getBoundingClientRect();return t=t||0,0<=e.bottom&&0<=e.right&&e.top+t<=document.documentElement.clientHeight&&e.left<=document.documentElement.clientWidth},$.easing.easeInOutExpo=function(t){return 0===t?0:1===t?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2}}(),function(){"use strict";var n="data-scrollto",i="html, body";$cache(document).on("click","["+n+"]",function(){var t=$(this).attr(n),e=$(t);e&&$cache(i).stop().animate({scrollTop:e.offset().top-a.getHeight()},1500,"easeInOutExpo")})}(),function(){"use strict";window.debounce=function(n,i){i=i||250;var a=null;return function(){var t=this,e=arguments;clearTimeout(a),a=setTimeout(function(){n.apply(t,e)},i)}},window.throttle=function(i,a){a=a||250;var o=void 0,c=void 0;return function(){var t=this,e=+new Date,n=arguments;o&&e<o+a?(clearTimeout(c),c=setTimeout(function(){o=e,i.apply(t,n)},a)):(o=e,i.apply(t,n))}}}();var t=function(t){"use strict";var i="data-percent",e="#bars",n=".bar__fill",a="#blocks",o="#about__text";return t.addBarsAnimation=function(){c.add({selector:e,offset:25,animation:function(){$cache(n).each(function(t){var e=$(this),n=e.attr(i);e.velocity({right:100-n+"%"},{delay:75*t})})}})},t.addBlocksAnimation=function(){var t="translateY",e="50px";d.min_lg.matches&&(t="translateX",e="-50px"),$.Velocity.hook($cache(a),t,e),$.Velocity.hook($cache(a),"opacity","0"),c.add({selector:a,offset:25,animation:function(){$cache(a).velocity({translateY:"0px",translateX:"0px",opacity:1})}})},t.addTextAnimation=function(){$.Velocity.hook($cache(o),"translateY","50px"),$.Velocity.hook($cache(o),"opacity","0"),c.add({selector:o,animation:function(){$cache(o).velocity({translateY:"0px",opacity:1})}})},t.init=function(){t.addBarsAnimation(),t.addBlocksAnimation(),t.addTextAnimation()},t}(t||(t={})),c=function(t){"use strict";var n=[];return $.Velocity.defaults.easing="easeOutQuad",$.Velocity.defaults.duration=750,t.add=function(t){t.selector,t.offset,t.animation;n.push(t)},t.watch=function(){for(var t=n.length;t--;){var e=n[t];$cache(e.selector).inView(e.offset)&&(e.animation(),n.splice(t,1))}},t.init=function(){$cache(document).on("scroll",throttle(t.watch,200))},t}(c||(c={})),e=function(t){"use strict";var e="#contact__container";return t.addContainerAnimation=function(){$.Velocity.hook($cache(e),"translateY","50px"),$.Velocity.hook($cache(e),"opacity","0"),c.add({selector:e,offset:50,animation:function(){$cache(e).velocity({translateY:"0px",opacity:1})}})},t.init=function(){t.addContainerAnimation()},t}(e||(e={})),a=function(t){"use strict";var e="header--active",n="#header";return t.getHeight=function(){return $cache(n).height()},t.toggleActiveStyles=function(){var t=$cache(document).scrollTop()>=s.getHeaderTop()-100;$cache(n).toggleClass(e,t)},t.init=function(){$cache(document).on("scroll",t.toggleActiveStyles)},t}(a||(a={})),s=function(e){"use strict";var t="hero__image--active",n={Index:0,Paths:["img/hero/0.jpg","img/hero/1.jpg","img/hero/2.jpg","img/hero/3.jpg","img/hero/4.jpg","img/hero/5.jpg","img/hero/6.jpg","img/hero/7.jpg","img/hero/8.jpg","img/hero/9.jpg"]},i={HERO:"#hero",HERO_HEADER:"#hero__header",HERO_IMAGE:".hero__image",HERO_IMAGE_NOT_ACTIVE:".hero__image:not(."+t+")",TYPER:"#typer"},a=3e3,o=1e4,c={Delay:3500,Pause:300,Speed:75,Words:["web applications.","user interfaces.","business websites.","[ your next project ]"]};return e.getHeaderTop=function(){return $cache(i.HERO_HEADER).offset().top},e.getNextImagePath=function(){return n.Index>=n.Paths.length-1?n.Index=0:n.Index+=1,n.Paths[n.Index]},e.setImagePath=function(t,e){t.css("background-image","url('"+e+"')")},e.setRandomImageIndex=function(){n.Index=Math.floor(Math.random()*(n.Paths.length+1))},e.startSlideshow=function(){setInterval(function(){$cache(i.HERO).find(i.HERO_IMAGE).toggleClass(t),setTimeout(function(){var t=$cache(i.HERO).find(i.HERO_IMAGE_NOT_ACTIVE);e.setImagePath(t,e.getNextImagePath())},a)},o)},e.startTyper=function(){new TypeIt(i.TYPER,{strings:c.Words,breakLines:!1,lifeLike:!1,loop:!0,loopDelay:c.Delay+1e3,nextStringDelay:[c.Pause,c.Delay],speed:c.Speed})},e.init=function(){e.setRandomImageIndex(),$cache(i.HERO).find(i.HERO_IMAGE).each(function(){e.setImagePath($(this),e.getNextImagePath())}),$cache(i.HERO).find(i.HERO_IMAGE).first().addClass(t)},e}(s||(s={}));!function(){"use strict";$(document).ready(function(){n.init(),a.init(),s.init(),o.init(),t.init(),i.init(),e.init(),c.init()})}();var n=function(n){"use strict";var t="preloader--active",e="preloader--fade",i="preloader--hide",a="preloader__text--fade",o="#preloader",c="#preloader__container",r="#preloader__text";return n.fadeOut=function(){$cache(o).addClass(e),s.startSlideshow(),s.startTyper(),setTimeout(function(){$cache(o).addClass(i),$cache(o).removeClass(t)},1500)},n.run=function(){var t=d.max_sm.matches?[.68,-1.2,.265,1.4]:[.68,-.65,.265,1.4];$cache(c).velocity({left:"110%"},2750,t)},n.stop=function(){$cache(r).addClass(a),n.run(),setTimeout(function(){n.fadeOut()},2250)},n.init=function(){var t=10,e=setInterval(function(){80<=t?t=100:t+=2,$cache(r).html(t+"%"),100===t&&(clearInterval(e),n.stop())},50)},n}(n||(n={})),i=function(t){"use strict";var e="#cards",n=".card",i="#projects__text";return t.addCardsAnimation=function(){$.Velocity.hook($cache(n),"translateY","50px"),$.Velocity.hook($cache(n),"opacity","0"),c.add({selector:e,offset:50,animation:function(){$cache(n).each(function(t){$(this).velocity({translateY:"0px",opacity:1},{delay:100*t})})}})},t.addTextAnimation=function(){$.Velocity.hook($cache(i),"translateY","50px"),$.Velocity.hook($cache(i),"opacity","0"),c.add({selector:i,animation:function(){$cache(i).velocity({translateY:"0px",opacity:1})}})},t.init=function(){t.addCardsAnimation(),t.addTextAnimation()},t}(i||(i={})),o=function(e){"use strict";var t="sidemenu__pusher--pushed",n="sidemenu--visible",i="#sidemenu, #btnSideMenu",a=".sidemenu__item",o="#sidemenu__pusher",c="#sidemenu",r="#btnSideMenu";return e.clickedOff=function(t){return 0===$(t.target).closest(i).length},e.hide=function(){e.isVisible()&&e.toggle()},e.isVisible=function(){return $cache(c).hasClass(n)},e.toggle=function(){$cache(c).toggleClass(n),$cache(o).toggleClass(t)},e.init=function(){$cache(r).on("click",function(){e.toggle()}),$cache(document).on("click",function(t){e.clickedOff(t)&&e.hide()}),$cache(c).on("click",a,function(){e.hide()}),d.min_lg.addListener(function(t){t.matches&&e.hide()})},e}(o||(o={}))}();