!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2),r(3);window.addEventListener("load",(function(){var e,t,r=document.querySelector("#location"),n=document.querySelector("#country"),o=document.querySelector(".temperature"),a=document.querySelector("#temperature-description"),i=document.querySelector(".icon-weather"),c=document.getElementById("deg");function d(e){document.querySelectorAll(".weather-loading").forEach((function(e){e.style.display="none"}));var t=e.sys.country;n.innerHTML=t,r.innerHTML=e.name+", ",e.weather.map((function(e){var t=e.main,r=e.icon;i.innerHTML='<img id="icon" src="./src/img/'.concat(r,'.png">'),a.innerHTML=t}));var d=e.main.temp_max,s=e.main.temp_min,l=e.main.temp-273.15;o.innerHTML=Math.floor(l),document.getElementById("temp-min").innerHTML=Math.floor(s-273.15)+"&#8451",document.getElementById("temp-max").innerHTML=Math.floor(d-273.15)+"&#8451 -",c.innerHTML="&#8451"}navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(r){e=r.coords.longitude,t=r.coords.latitude;var n="".concat("https://cors-anywhere.herokuapp.com/","api.openweathermap.org/data/2.5/weather?lat=").concat(t,"&lon=").concat(e,"&appid=").concat("cb4d6dc72e1f42b1bf2032c8587d1143");fetch(n).then((function(e){return e.json()})).then(d).catch((function(e){console.log("Error",e)}))}))})),function(){var e,t=document.getElementById("checkbox");if(t){e=null!==localStorage.getItem("themeSwitch")&&"dark"===localStorage.getItem("themeSwitch"),t.checked=e,e?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme"),t.addEventListener("change",(function(e){t.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("themeSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("themeSwitch"))}))}}()},function(e,t){window.addEventListener("load",(function(){var e,t;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(r){e=r.coords.longitude,t=r.coords.latitude;var n="".concat("https://cors-anywhere.herokuapp.com/","api.openweathermap.org/data/2.5/forecast?lat=").concat(t,"&lon=").concat(e,"&appid=").concat("cb4d6dc72e1f42b1bf2032c8587d1143");fetch(n).then((function(e){return e.json()})).then((function(e){document.querySelectorAll(".weather-loading").forEach((function(e){e.style.display="none"})),document.querySelector("footer").style.height="0";var t=document.querySelector(".forecast");e.list.forEach((function(e){var r=moment.unix(e.dt).utc().format("dddd, Do MMMM, HH:mm"),n=e.weather[0].icon,o=Math.floor(e.main.temp-273.15),a=Math.floor(e.main.temp_max-273.15),i=Math.floor(e.main.temp_min-273.15),c=e.weather[0].main,d='<div class="forecast__container">\n                <div class="forecast__container-date">\n                  '.concat(r,'\n                </div>\n\n                <div class="forecast__container-weather forecast">\n                  <div class="forecast__temp-icon">\n                    <img src="./src/img/').concat(n,'.png" width="60" height="60" />\n                  </div>\n                  <div class="forecast__temp-details temp">\n                    <div class="temp-desc">').concat(c,'</div>\n                    <div class="temp-details">\n                      <div id="temp-max" class="temp-max">').concat(a+"&#8451 -",'</div>\n                      <div id="temp-max" class="temp-min">').concat(i+" &#8451",'</div>\n                    </div>\n                  </div>\n\n                  <div class="forecast__container-temp">\n                    <div class="temp">').concat(o+"&#8451","</div>\n                  </div>\n\n                </div>\n              </div>\n            </div>");t.insertAdjacentHTML("beforeend",d)}))})).catch((function(e){console.log("Error",e)}))}))}))},function(e,t,r){var n=r(4),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function c(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function d(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],s=r[d]||0,l="".concat(d," ").concat(s);r[d]=s+1;var m=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==m?(i[m].references++,i[m].updater(f)):i.push({identifier:l,updater:g(f,t),references:1}),n.push(l)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,m=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function u(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,p=0;function g(e,t){var r,n,o;if(t.singleton){var a=p++;r=h||(h=s(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=s(t),n=u.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=d(e,t),s=0;s<r.length;s++){var l=c(r[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=a}}}},function(e,t,r){(t=r(6)(!1)).push([e.i,":root{--primary-color: #ffffff;--secondary-color: #353688;--third-color: #ffffff;--font-color: #090d28;--second-font-color: #c51c1c;--third-font-color: #c5c5c5;--bg-color: #ffffff;--forecast-color: #353688;--temp-color: #c51c1c}[data-theme='dark']{--primary-color: #353688;--secondary-color: #7768e5;--third-color: #21264e;--font-color: #ffffff;--second-font-color: #7768e5;--third-font-color: #7768e5;--bg-color: #090d28;--forecast-color: #353688;--temp-color: #ffffff}*,*:before,*:after{padding:0;margin:0;box-sizing:border-box}html{font-size:62.5%;font-family:\"Montserrat\",sans-serif;font-weight:400}body{font-size:1.6rem;width:100%;height:100vh;scroll-behavior:smooth;background-color:var(--bg-color);color:var(--font-color);padding:1rem 2rem;transition:all .3s ease-in-out}.header{display:flex;flex-direction:column;align-items:center;width:100%;min-height:100%}.header__timezone{text-align:center}.header__timezone #current-location{color:var(--secondary-color);padding-bottom:2.5rem;letter-spacing:.1rem}.header__weather{padding:1.5rem 0;margin-top:2rem;width:100%;margin:0 auto;display:flex;flex-direction:column;justify-content:center;text-align:center;background-color:var(--third-color);box-shadow:1px 10px 40px 10px rgba(0,0,0,0.1);transition:all .3s ease-in-out;border-radius:.5rem}.header__weather:hover{transform:translateY(-0.5rem);background-color:var(--primary-color);box-shadow:1px 1px 20px 1px rgba(0,0,0,0.1)}@media screen and (min-width: 499px){.header__weather{width:40rem}}@media screen and (min-width: 899px){.header__weather{min-width:60rem;min-height:30rem}}.header__weather .weather-location .location-timezone{display:flex;justify-content:center;font-size:2.4rem;padding-bottom:2rem}@media screen and (min-width: 899px){.header__weather .weather-location .location-timezone{padding-bottom:1.5rem}}.header__weather .weather-location .location-timezone #country{padding-left:1rem}.header__weather .weather-container{display:flex;flex-direction:row-reverse;justify-content:space-around}.header__weather .weather-container .weather-temperature{display:flex;font-size:3rem;align-self:center;color:var(--temp-color)}@media screen and (min-width: 899px){.header__weather .weather-container .weather-temperature{font-size:3.5rem}}.header__weather:nth-child(2){min-height:18rem}@media screen and (min-width: 899px){.header__weather:nth-child(2){min-height:20rem}}.header__description #temperature-description{font-size:1.8rem;padding:1rem 0;padding-top:2rem;color:var(--secondary-color)}@media screen and (min-width: 899px){.header__description #temperature-description{margin-top:1.5rem}}.header__search,.header .search{padding-top:4rem}.header__search__location-text,.header .search__location-text{padding-bottom:3rem;text-align:center;color:var(--third-font-color)}.weather-loading{border-radius:50%;width:4.5rem;height:4.5rem;position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;background-color:var(--bg-color);animation-name:loading;animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes loading{0%{transform:scale(1)}50%{transform:scale(0.6);background-color:var(--secondary-color)}100%{transform:scale(1)}}#icon{height:9rem;width:9rem}@media screen and (min-width: 899px){#icon{height:9rem;width:9rem}}.temperature-limit{display:flex;justify-content:center;font-size:1.4rem}.temperature-limit #temp-max{padding-right:.5rem}.footer{margin-top:10rem;margin-bottom:3rem;height:100%}.footer-content{font-size:1.2rem}.footer-content #author,.footer-content a{color:var(--font-color)}.nav{margin-bottom:2rem}.checkbox{opacity:0;position:absolute}.label{background-color:#353688;display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-radius:5rem;position:relative;padding:.5rem;height:2.6rem;width:5rem}.ball{background-color:#fff;position:absolute;border-radius:50%;top:2px;left:2px;height:2.2rem;width:2.2rem;transition:transform .2s linear}.checkbox:checked+.label .ball{transform:translateX(2.4rem)}.fa-moon{color:black}.fa-sun{color:#f39c12}.forecast{width:100%}.forecast__container{display:flex;flex-direction:column;margin:0 auto;background-color:var(--third-color);box-shadow:1px 10px 40px 10px rgba(0,0,0,0.1);border-radius:.5rem;transition:all .3s ease-in-out;width:100%;margin-top:4rem}@media screen and (min-width: 499px){.forecast__container{width:40rem}}@media screen and (min-width: 899px){.forecast__container{min-width:60rem}}.forecast__container-date{text-align:center;margin-top:1rem}.forecast__container-weather,.forecast__container .forecast{display:flex;padding:1rem 2rem}.forecast__container-weather__temp-details,.forecast__container-weather .temp,.forecast__container .forecast__temp-details,.forecast__container .forecast .temp{display:flex;flex-direction:column;justify-content:center;width:100%;padding-left:1rem}.forecast__container-weather__temp-details-details,.forecast__container-weather .temp-details,.forecast__container .forecast__temp-details-details,.forecast__container .forecast .temp-details{display:flex;font-size:1.2rem}.forecast__container-weather__temp-details-details .temp-min,.forecast__container-weather .temp-details .temp-min,.forecast__container .forecast__temp-details-details .temp-min,.forecast__container .forecast .temp-details .temp-min{padding-left:.3rem}.forecast__container-temp{width:100%;display:flex;justify-content:center}.forecast__container-temp .temp{text-align:end;padding-right:1rem;font-size:2.5rem;color:var(--second-font-color)}.forecast__container:hover{background-color:var(--forecast-color);color:#fff}\n",""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,d;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),t.push(d))}},t}}]);