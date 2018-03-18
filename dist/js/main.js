!function(){!function(){"use strict";Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError("'this' is null or not defined");var t=Object(this),i=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],a=0;a<i;){var o=t[a];if(e.call(n,o,a,t))return o;a++}}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError("'this' is null or not defined");var i=Object(this),n=i.length>>>0;if(0===n)return!1;var a,o,r=t||0,c=Math.max(0<=r?r:n-Math.abs(r),0);for(;c<n;){if((a=i[c])===(o=e)||"number"==typeof a&&"number"==typeof o&&isNaN(a)&&isNaN(o))return!0;c++}return!1}})}();var d={min_sm:window.matchMedia("(min-width: 576px)"),min_md:window.matchMedia("(min-width: 768px)"),min_lg:window.matchMedia("(min-width: 992px)"),min_xl:window.matchMedia("(min-width: 1200px)"),max_xs:window.matchMedia("(max-width: 575px)"),max_sm:window.matchMedia("(max-width: 767px)"),max_md:window.matchMedia("(max-width: 991px)"),max_lg:window.matchMedia("(max-width: 1199px)"),only_xs:window.matchMedia("(max-width: 575px)"),only_sm:window.matchMedia("(min-width: 576px) and (max-width: 767px)"),only_md:window.matchMedia("(min-width: 768px) and (max-width: 991px)"),only_lg:window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),only_xl:window.matchMedia("(min-width: 1200px)"),max_sm_portrait:window.matchMedia("(max-width: 767px) and (orientation: portrait)"),max_md_portrait:window.matchMedia("(max-width: 991px) and (orientation: portrait)")};!function(){"use strict";var a={};window.$cache=function(e,t,i){"boolean"==typeof t&&(i=t,t=!1);var n=t?t.selector+" "+e:e;return(void 0===a[n]||i)&&(a[n]=t?t.find(e):jQuery(e)),a[n]},$.easing.easeInOutExpo=function(e){return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2}}(),function(){"use strict";var i="data-scrollto",n="html, body";$cache(document).on("click","["+i+"]",function(){var e=$(this).attr(i),t=$(e);t&&$cache(n).stop().animate({scrollTop:t.offset().top-a.getHeight()},1500,"easeInOutExpo")})}();var a=function(e){"use strict";var i="header--active",n="#header";return e.getHeight=function(){return $cache(n).height()},e.toggleActiveStyles=function(){var e=o.getHeaderTop()-100,t=$cache(document).scrollTop()>=e;$cache(n).toggleClass(i,t)},e.init=function(){$cache(document).on("scroll",e.toggleActiveStyles)},e}(a||(a={})),o=function(t){"use strict";var e="hero__image--active",i={Index:0,Paths:["img/hero/0.jpg","img/hero/1.jpg","img/hero/2.jpg","img/hero/3.jpg","img/hero/4.jpg","img/hero/5.jpg","img/hero/6.jpg","img/hero/7.jpg","img/hero/8.jpg","img/hero/9.jpg"]},n={HERO:"#hero",HERO_HEADER:".hero__header",HERO_IMAGE:".hero__image",HERO_IMAGE_NOT_ACTIVE:".hero__image:not(."+e+")",TYPER:"#typer"},a=3e3,o=1e4,r={Delay:5e3,Pause:300,Speed:75,Words:["user interfaces.","business websites.","your next project.","web applications."]};return t.getHeaderTop=function(){return $cache(n.HERO).find(n.HERO_HEADER).offset().top},t.getNextImagePath=function(){return i.Index>=i.Paths.length-1?i.Index=0:i.Index+=1,i.Paths[i.Index]},t.setImagePath=function(e,t){e.css("background-image","url('"+t+"')")},t.setRandomImageIndex=function(){i.Index=Math.floor(Math.random()*(i.Paths.length+1))},t.startSlideshow=function(){setInterval(function(){$cache(n.HERO).find(n.HERO_IMAGE).toggleClass(e),setTimeout(function(){var e=$cache(n.HERO).find(n.HERO_IMAGE_NOT_ACTIVE);t.setImagePath(e,t.getNextImagePath())},a)},o)},t.startTyper=function(){new TypeIt(n.TYPER,{strings:r.Words,breakLines:!1,lifeLike:!1,loop:!0,loopDelay:r.Delay,nextStringDelay:[r.Pause,r.Delay],speed:r.Speed,startDelete:!0})},t.init=function(){t.setRandomImageIndex(),$cache(n.HERO).find(n.HERO_IMAGE).each(function(){t.setImagePath($(this),t.getNextImagePath())}),$cache(n.HERO).find(n.HERO_IMAGE).first().addClass(e),t.startSlideshow(),t.startTyper()},t}(o||(o={}));!function(){"use strict";$(document).ready(function(){a.init(),o.init(),e.init()})}();var e=function(t){"use strict";var e="sidemenu__pusher--pushed",i="sidemenu--visible",n="#sidemenu, #btnSideMenu",a=".sidemenu__item",o="#sidemenu__pusher",r="#sidemenu",c="#btnSideMenu";return t.clickedOff=function(e){return 0===$(e.target).closest(n).length},t.hide=function(){t.isVisible()&&t.toggle()},t.isVisible=function(){return $cache(r).hasClass(i)},t.toggle=function(){$cache(r).toggleClass(i),$cache(o).toggleClass(e)},t.init=function(){$cache(c).on("click",function(){t.toggle()}),$cache(document).on("click",function(e){t.clickedOff(e)&&t.hide()}),$cache(r).on("click",a,function(){t.hide()}),d.min_lg.addListener(function(e){e.matches&&t.hide()})},t}(e||(e={}))}();