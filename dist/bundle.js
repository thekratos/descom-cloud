(()=>{var n={150:(n,e,o)=>{"use strict";o.d(e,{Z:()=>i});var t=o(645),r=o.n(t)()((function(n){return n[1]}));r.push([n.id,"/* ----- ----- ----- ----- ----- Ajutes Inciciales ----- ----- ----- ----- ----- */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #F6F6F6;\n  font-family: 'Roboto', sans-serif;\n  -webkit-transition: .3s ease all;\n  transition: .3s ease all;\n}\n\nbody.dark {\n  background: #333333;\n}\n\n#lienzo {\n  width: 100%;\n  margin: auto;\n}\n\n/* ----- ----- ----- ----- ----- Contenedor ----- ----- ----- ----- ----- */\n\n#contenedor {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 40px;\n}\n\n\n\n\n\n\n.grid {\n  display: grid;\n  grid-gap: 40px 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding: 40px 0;\n}\n\n.grid .card {\n  background: #FEFEFE;\n  padding: 20px;\n  border-radius: 5px;\n  -webkit-box-shadow: 10px 10px 20px rgba(170, 170, 170, 0.16);\n          box-shadow: 10px 10px 20px rgba(170, 170, 170, 0.16);\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n  min-height: 195px;\n  margin-top: 50px;\n  -webkit-transition: .3s ease all;\n  transition: .3s ease all;\n}\n\nbody.dark .grid .card {\n  background: #222222;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, .16);\n}\n\n.grid .card img {\n  border-radius: 7px;\n  position: absolute;\n  top: -50px;\n  width: calc(100% - 40px);\n  max-height: 165px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.grid .card .botones {\n  width: 100%;\n  margin-top: 20px;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.grid .card .botones .boton {\n  padding: 10px;\n  color: #fff;\n  width: 100%;\n  display: block;\n  background: #111111;\n  text-align: center;\n  border-radius: 5px;\n  -webkit-transition: .3s ease all;\n  transition: .3s ease all;\n}\n\n.grid .card .botones .boton.primario {\n  background: #3E60E9;\n}\n\n.grid .card .botones .boton.primario:hover {\n  background: #254BE6;\n}\n\n.grid .card .botones .boton.secundario {\n  background: #C8C8C8;\n}\n\n.grid .card .botones .boton.secundario:hover {\n  background: #ACABAB;\n}\n\n\n/* ----- ----- ----- ----- ----- Switch ----- ----- ----- ----- ----- */\n",""]);const i=r},257:(n,e,o)=>{"use strict";o.d(e,{Z:()=>i});var t=o(645),r=o.n(t)()((function(n){return n[1]}));r.push([n.id,"/* ----- ----- ----- ----- ----- Contenedor Header----- ----- ----- ----- ----- */\n\n#lienzo-header {\n    background: #FEFEFE;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px 20px;\n    -webkit-transition: .3s ease all;\n    transition: .3s ease all;\n    box-shadow: 10px 10px 20px rgba(170, 170, 170, 0.16);\n}\n\nbody.dark #lienzo-header {\n    background: #222222;\n    box-shadow: 10px 10px 20px rgba(0, 0, 0, .16);\n}\n\n/* ----- ----- ----- ----- ----- Logo Tipo ----- ----- ----- ----- ----- */\n\n#header-logoTipo {\n    font-size: 25px;\n    text-decoration: none;\n    font-weight: 500;\n    margin-left: 15px;\n    display: flex;\n    align-items: center;\n}\n\n#header-logoTipo svg {\n    width: 60px;\n    height: 60px;\n}\n\n#header-logoTipo h1 {\n    color: #FF2315;\n    text-decoration: none;\n    font-weight: 700;\n    font-family: 'Roboto', sans-serif;\n    margin-left: 15px;\n}\n\n#header-logoTipo h1:hover {\n    opacity: 75%;\n}\n\n#header-logoTipo h1 span {\n    color: #1273FF;\n}\n\n/* ----- ----- ----- ----- ----- Menu Opciones del Header ----- ----- ----- ----- ----- */\n\n#header-optionsheader {\n    display: flex;\n    align-items: center;\n}\n\n#optionsheader-nombreUsuario {\n    margin-right: 15px;\n    color: #222222;\n    text-decoration: none;\n    font-weight: 500;\n}\n\n#optionsheader-nombreUsuario:hover {\n    color:#e9817a;\n}\n\nbody.dark #optionsheader-nombreUsuario {\n    color: #C8C8C8;\n}\n\nbody.dark #optionsheader-nombreUsuario:hover {\n    color:#FF2315;\n}\n\n/* ----- ----- ----- ----- ----- Switch header ----- ----- ----- ----- ----- */\n\n#optionsheader-switch {\n    background: #343D5B;\n    border-radius: 1000px;\n    border: none;\n    position: relative;\n    cursor: pointer;\n    display: flex;\n    outline: none;\n}\n\n#optionsheader-switch::after {\n    content: \"\";\n    display: block;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    background: #ffffff;\n    top: 0;\n    left: 0;\n    right: unset;\n    border-radius: 100px;\n    transition: .3s ease all;\n    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .2);\n}\n\n#optionsheader-switch.active {\n    background: #e9817a;\n    color: #000000;\n}\n\n#optionsheader-switch.active::after {\n    right: 0;\n    left: unset;\n  }\n\n#optionsheader-switch span {\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    display: block;\n    background: none;\n    color: #ffffff;\n}\n\n@media (min-width: 320px) and (max-width: 767px){\n\n    /* ----- ----- ----- Logo ----- ----- ----- */\n\n    #lienzo-header {\n        padding: 10px 20px;\n    }\n\n    #header-logoTipo {\n        margin-left: 0px;\n    }\n\n    #header-logoTipo svg {\n        width: 45px;\n        height: 45px;\n    }\n\n    #header-logoTipo h1 {\n        margin-left: 5px;\n        font-size: 25px;\n    }\n\n    /* ----- ----- ----- Nombre de Usuario ----- ----- ----- */\n\n    #optionsheader-nombreUsuario {\n        display: none;\n    }\n\n    /* ----- ----- ----- Boton Switch ----- ----- ----- */\n\n    #optionsheader-switch::after {\n        width: 25px;\n        height: 25px;\n    }\n\n    #optionsheader-switch span {\n        width: 25px;\n        height: 25px;\n    }\n}",""]);const i=r},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o=n(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(n,o,t){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&r[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),e.push(d))}},e}},670:n=>{n.exports=' <nav id="lienzo-header"> <a id="header-logoTipo" href="#"> <svg width="45" height="46" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M62.1249 62.4636L69.7079 9.87568L69.3413 7.26847L68.7594 5.75589L67.4826 3.78992L65.916 2.28216L64.781 1.54329L63.6129 0.982689L62.4554 0.600548L61.0993 0.34758L60.1779 0.288094L60.9499 1.3914L61.3086 2.41364L61.2676 3.91121L56.0345 39.9331L55.3513 41.5198L54.5059 42.4541L52.5706 43.4594L51.1845 43.6211L49.2272 43.136L33.7455 30.5113L33.0633 29.2786L33.1617 28.1965L34.0689 27.2551L27.2648 29.8702L26.48 30.1607L25.4807 31.3483L24.6194 33.3489L24.2388 35.0754L24.6277 36.5458L25.8236 38.2748L57.9219 65.0572L58.92 65.3196L59.924 65.0791L61.1712 64.4427L61.667 63.7121L62.1249 62.4636Z" fill="url(#paint0_linear)"/> <path d="M48.5275 25.0396L47.9276 23.661L46.7214 23.1035L42.7389 24.3075L37.4303 26.1478L27.8739 29.6448L26.48 30.1607L25.1209 31.7759L24.3312 34.2532L24.6277 36.5458L25.1942 37.6657L27.3109 39.7144L57.9219 65.0572L59.3596 65.2816L60.7727 64.7748L61.667 63.7121L61.2872 65.2372L60.2235 66.9629L58.9224 68.3295L56.6829 69.777L53.4707 70.6668L50.0025 70.3927L47.9496 69.5799L45.7109 67.9813L3.40541 32.9568L2.90527 30.847L4.25412 28.7935L9.13927 27.1328L42.1175 15.998L44.9974 15.4869L47.2243 16.5453L48.4349 17.5478L49.4265 19.3358L49.1451 22.2141L48.5275 25.0396Z" fill="url(#paint1_linear)"/> <path d="M3.40539 32.9568L1.86751 31.1581L0.451904 27.7046L0.603285 23.4256L2.50778 19.7176L3.81587 18.4241L6.45825 16.903L27.8688 10.0582L49.0868 3.29267L59.2131 0.321987L60.1778 0.288097L60.8606 0.853516L61.1546 1.916L61.3183 2.80927L56.9111 34.1171L56.1697 39.2782L55.8117 41.0108L54.5059 42.4541L52.5705 43.4594L51.1844 43.6211L49.2272 43.136L44.1345 39.081L45.1036 39.0237L46.3767 38.4119L46.8516 37.1393L49.0133 23.5611L49.4265 19.3358L48.0091 16.9646L46.2529 15.5108L43.8735 15.4655L40.5736 16.4664L9.95322 26.8487L6.11822 28.1874L4.2541 28.7935L3.556 29.4515L2.90525 30.847L3.40539 32.9568Z" fill="url(#paint2_linear)"/> <path d="M69.6047 11.3049L62.1247 62.4636C61.0354 69.915 52.131 73.2966 46.3032 68.472L3.7715 33.2598C-2.09918 28.3996 -0.259892 19.0272 7.0198 16.7061L57.0315 0.759337C63.8645 -1.41935 70.6349 4.25905 69.6047 11.3049Z" stroke="#222222" stroke-miterlimit="10"/> <path d="M60.1778 0.288049C61.0073 1.12664 61.4762 2.32716 61.2862 3.65012L56.1402 39.4845C55.6045 43.2172 51.146 44.9169 48.2278 42.501L33.7457 30.5114C32.5897 29.5542 32.9249 27.7127 34.3454 27.2173L45.9167 23.2059C47.2784 22.7339 48.6651 23.8481 48.4818 25.2673L47.7152 31.2139" stroke="#222222" stroke-miterlimit="10"/> <path d="M68.1968 20.935L61.8996 62.9437C61.585 65.0423 59.0808 66.0168 57.4569 64.6723L26.2624 38.8465C23.0495 36.1866 23.9448 31.0742 27.8739 29.6449L39.2444 25.5084" stroke="#222222" stroke-miterlimit="10"/> <path d="M36.7898 60.5294L3.88587 33.3547C2.24222 31.9971 2.70471 29.3685 4.70682 28.6914L42.7874 15.7073C46.2792 14.5168 49.7996 17.4237 49.2525 21.0459L46.7699 37.4827C46.5455 38.968 44.7693 39.6378 43.6068 38.6754L36.6795 32.9404" stroke="#222222" stroke-miterlimit="10"/> </g> <defs> <linearGradient id="paint0_linear" x1="49.0544" y1="2.82662" x2="43.857" y2="52.6982" gradientUnits="userSpaceOnUse"> <stop stop-color="#1273FF"/> <stop offset="0.00040983" stop-color="#1273FF"/> <stop offset="1" stop-color="#0C0CB3"/> </linearGradient> <linearGradient id="paint1_linear" x1="21.0814" y1="21.2506" x2="71.0012" y2="63.2446" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF3C00"/> <stop offset="0.460213" stop-color="#FF0031"/> <stop offset="0.981414" stop-color="#FF0031"/> <stop offset="0.987114" stop-color="#FF0031"/> <stop offset="1" stop-color="#FF0031"/> </linearGradient> <linearGradient id="paint2_linear" x1="4.79886" y1="39.2988" x2="66.5891" y2="16.132" gradientUnits="userSpaceOnUse"> <stop stop-color="#E27703"/> <stop offset="0.0489195" stop-color="#E27703"/> <stop offset="0.234871" stop-color="#E27703"/> <stop offset="0.994975" stop-color="#DDFF17"/> <stop offset="0.994977" stop-color="#DDFF17"/> <stop offset="1" stop-color="#DDFF17"/> </linearGradient> <clipPath id="clip0"> <rect width="70" height="71" fill="white"/> </clipPath> </defs> </svg> <h1>Descom<span>Cloud</span></h1> </a> <div id="header-optionsheader"> <a id="optionsheader-nombreUsuario" href="#">Usuario</a> <button id="optionsheader-switch"> <span><i class="fas fa-sun"></i></span> <span><i class="fas fa-moon"></i></span> </button> </div> </nav> '},379:(n,e,o)=>{"use strict";var t,r=function(){var n={};return function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[e]=o}return n[e]}}(),i=[];function a(n){for(var e=-1,o=0;o<i.length;o++)if(i[o].identifier===n){e=o;break}return e}function s(n,e){for(var o={},t=[],r=0;r<n.length;r++){var s=n[r],d=e.base?s[0]+e.base:s[0],l=o[d]||0,c="".concat(d," ").concat(l);o[d]=l+1;var p=a(c),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(h)):i.push({identifier:c,updater:L(h,e),references:1}),t.push(c)}return t}function d(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=o.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,c=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,o,t){var r=o?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function h(n,e,o){var t=o.css,r=o.media,i=o.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,u=0;function L(n,e){var o,t,r;if(e.singleton){var i=u++;o=f||(f=d(e)),t=p.bind(null,o,i,!1),r=p.bind(null,o,i,!0)}else o=d(e),t=h.bind(null,o,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var o=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<o.length;t++){var r=a(o[t]);i[r].references--}for(var d=s(n,e),l=0;l<o.length;l++){var c=a(o[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}o=d}}}}},e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={id:t,exports:{}};return n[t](r,r.exports,o),r.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";var n=o(670),e=o.n(n),t=o(379),r=o.n(t),i=o(257);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=document.createElement("div");a.innerHTML=e();const s=a.querySelector("#optionsheader-switch");window.onload=function(){"true"===localStorage.getItem("dark-mode")?(document.body.classList.add("dark"),s.classList.add("active")):(document.body.classList.remove("dark"),s.classList.remove("active"))};const d={home:[()=>(s.addEventListener("click",(()=>{document.body.classList.toggle("dark"),s.classList.toggle("active"),document.body.classList.contains("dark")?localStorage.setItem("dark-mode","true"):localStorage.setItem("dark-mode","false")})),a)]};let l=document.getElementById("root");const c=n=>{switch(l.innerHTML=" ",n){case"#/":d.home.forEach((n=>{l.appendChild(n())}));case"":d.home.forEach((n=>{l.appendChild(n())}))}};var p=o(150);r()(p.Z,{insert:"head",singleton:!1}),p.Z.locals,c(window.location.hash),window.addEventListener("hashchange",(()=>{c(window.location.hash)}))})()})();