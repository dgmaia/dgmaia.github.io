!function(o,t,l){"use strict";function e(){function e(o,t){this.scrollLeft=o,this.scrollTop=t}function r(o){return.5*(1-Math.cos(Math.PI*o))}function c(o){if("object"!=typeof o||null===o||o.behavior===l||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior not valid")}function i(l){var e,r,c;do{l=l.parentNode,e=l===t.body,r=l.clientHeight<l.scrollHeight||l.clientWidth<l.scrollWidth,c="visible"===o.getComputedStyle(l,null).overflow}while(!e&&(!r||c));return e=r=c=null,l}function s(t){t.frame=o.requestAnimationFrame(s.bind(o,t));var l,e,c,i=h(),n=(i-t.startTime)/f;if(n=n>1?1:n,l=r(n),e=t.startX+(t.x-t.startX)*l,c=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,c),e===t.x&&c===t.y)return void o.cancelAnimationFrame(t.frame)}function n(l,r,c){var i,n,a,f,u,y=h();l===t.body?(i=o,n=o.scrollX||o.pageXOffset,a=o.scrollY||o.pageYOffset,f=p.scroll):(i=l,n=l.scrollLeft,a=l.scrollTop,f=e),u&&o.cancelAnimationFrame(u),s({scrollable:i,method:f,startTime:y,startX:n,startY:a,x:r,y:c,frame:u})}if(!("scrollBehavior"in t.documentElement.style)){var a=o.HTMLElement||o.Element,f=468,p={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elScroll:a.prototype.scroll||e,scrollIntoView:a.prototype.scrollIntoView},h=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now;o.scroll=o.scrollTo=function(){if(c(arguments[0]))return void p.scroll.call(o,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);n.call(o,t.body,~~arguments[0].left,~~arguments[0].top)},o.scrollBy=function(){if(c(arguments[0]))return void p.scrollBy.call(o,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);n.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset))},a.prototype.scroll=a.prototype.scrollTo=function(){if(c(arguments[0]))return void p.elScroll.call(this,arguments[0].left||arguments[0],arguments[0].top||arguments[1]);n.call(this,this,arguments[0].left,arguments[0].top)},a.prototype.scrollBy=function(){var o=arguments[0];"object"==typeof o?this.scroll({left:o.left+this.scrollLeft,top:o.top+this.scrollTop,behavior:o.behavior}):this.scroll(this.scrollLeft+o,this.scrollTop+arguments[1])},a.prototype.scrollIntoView=function(){if(c(arguments[0]))return void p.scrollIntoView.call(this,arguments[0]||!0);var l=i(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(n.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:e}:e()}(window,document);