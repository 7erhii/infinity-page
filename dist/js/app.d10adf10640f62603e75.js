/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();
document.querySelector('.switch__theme-link').addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('.theme').classList.add('dark');
    } else {
      document.querySelector('.theme').classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClassToHTML();
document.querySelector('.switch__position-grid').addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('positionstyle') === 'list') {
    localStorage.setItem('positionstyle', 'grid');
  } else {
    localStorage.setItem('positionstyle', 'grid');
  }

  addListClassToHTML();
});
document.querySelector('.switch__position-list').addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('positionstyle') === 'grid') {
    localStorage.setItem('positionstyle', 'list');
  } else {
    localStorage.setItem('positionstyle', 'list');
  }

  addListClassToHTML();
});

function addListClassToHTML() {
  try {
    if (localStorage.getItem('positionstyle') === 'list') {
      document.querySelector('.positionstyle').classList.add('list');
    } else {
      document.querySelector('.positionstyle').classList.remove('list');
    }
  } catch (err) {}
}

addListClassToHTML();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;







pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/main.pug */ "./src/views/parts/main.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/main.pug":
/*!**********************************!*\
  !*** ./src/views/parts/main.pug ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"main\" style=\"background-image: url('..\u002F..\u002Fassets\u002Fimages\u002Fmount.jpeg')\"\u003E\u003Cdiv class=\"main__descr\"\u003E \u003Cdiv class=\"main__title\"\u003E\u003Ch1\u003ESahen Rahman\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__subtitle\"\u003E \u003Cp\u003EDefault City\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__links\"\u003E\u003Ca class=\"main__link\" href=\"#\"\u003E\u003Cdiv class=\"main__link-logo\"\u003E \u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!DOCTYPE svg PUBLIC \"-\u002F\u002FW3C\u002F\u002FDTD SVG 1.1\u002F\u002FEN\" \"http:\u002F\u002Fwww.w3.org\u002FGraphics\u002FSVG\u002F1.1\u002FDTD\u002Fsvg11.dtd\"\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg fill=\"#000000\"  version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"  width=\"800px\"\n\t height=\"800px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"\u003E\n\n\u003Cg id=\"7935ec95c421cee6d86eb22ecd12f847\"\u003E\n\n\u003Cpath style=\"display: inline;\" d=\"M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565\n\t\tc0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47\n\t\tc49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886\n\t\tc9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318\n\t\tc14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7\n\t\tc51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832\n\t\tc30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002\n\t\tc21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z\"\u003E\n\n\u003C\u002Fpath\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"main__link\" href=\"#\"\u003E\u003Cdiv class=\"main__link-logo\"\u003E \u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \n    \u003Ctitle\u003Elinkedin [#161]\u003C\u002Ftitle\u003E\n    \u003Cdesc\u003ECreated with Sketch.\u003C\u002Fdesc\u003E\n    \u003Cdefs\u003E\n\n\u003C\u002Fdefs\u003E\n    \u003Cg id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Dribbble-Light-Preview\" transform=\"translate(-180.000000, -7479.000000)\" fill=\"#000000\"\u003E\n            \u003Cg id=\"icons\" transform=\"translate(56.000000, 160.000000)\"\u003E\n                \u003Cpath d=\"M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z\" id=\"linkedin-[#161]\"\u003E\n\n\u003C\u002Fpath\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"main__link\" href=\"#\"\u003E\u003Cdiv class=\"main__link-logo\"\u003E \u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \n    \u003Ctitle\u003Egithub [#142]\u003C\u002Ftitle\u003E\n    \u003Cdesc\u003ECreated with Sketch.\u003C\u002Fdesc\u003E\n    \u003Cdefs\u003E\n\n\u003C\u002Fdefs\u003E\n    \u003Cg id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Dribbble-Light-Preview\" transform=\"translate(-140.000000, -7559.000000)\" fill=\"#000000\"\u003E\n            \u003Cg id=\"icons\" transform=\"translate(56.000000, 160.000000)\"\u003E\n                \u003Cpath d=\"M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399\" id=\"github-[#142]\"\u003E\n\n\u003C\u002Fpath\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"main__link\" href=\"#\"\u003E\u003Cdiv class=\"main__link-logo\"\u003E \u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \n    \u003Ctitle\u003Einstagram [#167]\u003C\u002Ftitle\u003E\n    \u003Cdesc\u003ECreated with Sketch.\u003C\u002Fdesc\u003E\n    \u003Cdefs\u003E\n\n\u003C\u002Fdefs\u003E\n    \u003Cg id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Dribbble-Light-Preview\" transform=\"translate(-340.000000, -7439.000000)\" fill=\"#000000\"\u003E\n            \u003Cg id=\"icons\" transform=\"translate(56.000000, 160.000000)\"\u003E\n                \u003Cpath d=\"M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792\" id=\"instagram-[#167]\"\u003E\n\n\u003C\u002Fpath\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"main__link\" href=\"#\"\u003E\u003Cdiv class=\"main__link-logo\"\u003E \u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"-5 0 20 20\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \n    \u003Ctitle\u003Efacebook [#176]\u003C\u002Ftitle\u003E\n    \u003Cdesc\u003ECreated with Sketch.\u003C\u002Fdesc\u003E\n    \u003Cdefs\u003E\n\n\u003C\u002Fdefs\u003E\n    \u003Cg id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Dribbble-Light-Preview\" transform=\"translate(-385.000000, -7399.000000)\" fill=\"#000000\"\u003E\n            \u003Cg id=\"icons\" transform=\"translate(56.000000, 160.000000)\"\u003E\n                \u003Cpath d=\"M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z\" id=\"facebook-[#176]\"\u003E\n\n\u003C\u002Fpath\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"main__link\" href=\"#\"\u003E\u003Cdiv class=\"main__link-logo\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Crect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ (() => {

// console.log(1);
// document.querySelector('.themetoggle').addEventListener('click', (event) => {
//    event.preventDefault();
//    if (localStorage.getItem('theme') === 'dark') {
//       localStorage.removeItem('theme');
//    }
//    else {
//       localStorage.setItem('theme', 'dark')
//    }
//    addDarkClassToHTML()
// });
// function addDarkClassToHTML() {
//    try {
//       if (localStorage.getItem('theme') === 'dark') {
//          document.querySelector('.page').classList.add('dark');
//       }
//       else {
//          document.querySelector('.page').classList.remove('dark');
//       }
//    } catch (err) { }
// }
// addDarkClassToHTML();


/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.ts");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUM3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9tYWluLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3Byb2plY3RzL2luZmluaXRlUGhvdG8vcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0V2lkdGggPSAxNDQwLFxuICBkZWZhdWx0Rm9udCA9IDE2LFxuICBtb2JpbGVGb250ID0gMTYsXG4gIG1pbldpZHRoID0gNzY4LFxuICBtaW5IZWlnaHQgPSA2MDAsXG4gIGRlZmF1bHRIZWlnaHQgPSA5MDA7XG5cbmZ1bmN0aW9uIGZTaXplKGRldmljZSwgdlcsIHZIKSB7XG4gIGlmICh2VyA8PSAzNzQpIHtcbiAgICByZXR1cm4gMTM7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlXG4gICAgPyBtb2JpbGVGb250XG4gICAgOiBkZWZhdWx0Rm9udCAqXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgIE1hdGgubWF4KG1pbldpZHRoLCB2VykgLyBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgTWF0aC5tYXgobWluSGVpZ2h0LCB2SCkgLyBkZWZhdWx0SGVpZ2h0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmaWVyRGV2aWNlKCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGlzTW9iaWxlID0gd2luZG93V2lkdGggPD0gNzY3O1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250U2l6ZSA9XG4gICAgICBmU2l6ZShpc01vYmlsZSwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxubW9kaWZpZXJEZXZpY2UoKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoX190aGVtZS1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyaycpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWUnKTtcbiAgfVxuICBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpXG4gIH1cbiAgYWRkRGFya0NsYXNzVG9IVE1MKClcbn0pO1xuXG5mdW5jdGlvbiBhZGREYXJrQ2xhc3NUb0hUTUwoKSB7XG4gIHRyeSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyaycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHsgfVxufVxuXG5hZGREYXJrQ2xhc3NUb0hUTUwoKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoX19wb3NpdGlvbi1ncmlkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3NpdGlvbnN0eWxlJykgPT09ICdsaXN0Jykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbnN0eWxlJywgJ2dyaWQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb25zdHlsZScsICdncmlkJylcbiAgfVxuICBhZGRMaXN0Q2xhc3NUb0hUTUwoKVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX3Bvc2l0aW9uLWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnKSA9PT0gJ2dyaWQnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnLCAnbGlzdCcpO1xuICB9XG4gIGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbnN0eWxlJywgJ2xpc3QnKVxuICB9XG4gIGFkZExpc3RDbGFzc1RvSFRNTCgpXG59KTtcblxuXG5mdW5jdGlvbiBhZGRMaXN0Q2xhc3NUb0hUTUwoKSB7XG4gIHRyeSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3NpdGlvbnN0eWxlJykgPT09ICdsaXN0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc2l0aW9uc3R5bGUnKS5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc2l0aW9uc3R5bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHsgfVxufVxuXG5hZGRMaXN0Q2xhc3NUb0hUTUwoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO1xuXG5cblxuXG5cblxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJlblxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9tYWluLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcIm1haW5cXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uXFx1MDAyRi4uXFx1MDAyRmFzc2V0c1xcdTAwMkZpbWFnZXNcXHUwMDJGbW91bnQuanBlZycpXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19kZXNjclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX3RpdGxlXFxcIlxcdTAwM0VcXHUwMDNDaDFcXHUwMDNFU2FoZW4gUmFobWFuXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19zdWJ0aXRsZVxcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRURlZmF1bHQgQ2l0eVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19saW5rc1xcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcIm1haW5fX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX2xpbmstbG9nb1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcImlzby04ODU5LTFcXFwiP1xcdTAwM0VcXG5cXHUwMDNDIURPQ1RZUEUgc3ZnIFBVQkxJQyBcXFwiLVxcdTAwMkZcXHUwMDJGVzNDXFx1MDAyRlxcdTAwMkZEVEQgU1ZHIDEuMVxcdTAwMkZcXHUwMDJGRU5cXFwiIFxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkZHcmFwaGljc1xcdTAwMkZTVkdcXHUwMDJGMS4xXFx1MDAyRkRURFxcdTAwMkZzdmcxMS5kdGRcXFwiXFx1MDAzRVxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyBmaWxsPVxcXCIjMDAwMDAwXFxcIiAgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiAgd2lkdGg9XFxcIjgwMHB4XFxcIlxcblxcdCBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ2cgaWQ9XFxcIjc5MzVlYzk1YzQyMWNlZTZkODZlYjIyZWNkMTJmODQ3XFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDcGF0aCBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lO1xcXCIgZD1cXFwiTTQ1OS4xODYsMTUxLjc4N2MwLjIwMyw0LjUwMSwwLjMwNSw5LjAyMywwLjMwNSwxMy41NjVcXG5cXHRcXHRjMCwxMzguNTQyLTEwNS40NjEsMjk4LjI4NS0yOTguMjc0LDI5OC4yODVjLTU5LjIwOSwwLTExNC4zMjItMTcuMzU3LTE2MC43MTYtNDcuMTA0YzguMjEyLDAuOTczLDE2LjU0NiwxLjQ3LDI1LjAxMiwxLjQ3XFxuXFx0XFx0YzQ5LjEyMSwwLDk0LjMxOC0xNi43NTksMTMwLjIwOS00NC44ODRjLTQ1Ljg4Ny0wLjg0MS04NC41OTYtMzEuMTU0LTk3LjkzOC03Mi44MDRjNi40MDgsMS4yMjcsMTIuOTY4LDEuODg2LDE5LjczLDEuODg2XFxuXFx0XFx0YzkuNTUsMCwxOC44MTYtMS4yODcsMjcuNjE3LTMuNjhjLTQ3Ljk1NS05LjYzMy04NC4xLTUyLjAwMS04NC4xLTEwMi43OTVjMC0wLjQ0NiwwLTAuODgyLDAuMDExLTEuMzE4XFxuXFx0XFx0YzE0LjEzMyw3Ljg0NywzMC4yOTQsMTIuNTYyLDQ3LjQ4OCwxMy4xMDljLTI4LjEzNC0xOC43OTYtNDYuNjM3LTUwLjg4NS00Ni42MzctODcuMjYyYzAtMTkuMjEyLDUuMTYtMzcuMjE4LDE0LjE5My01Mi43XFxuXFx0XFx0YzUxLjcwNyw2My40MjYsMTI4Ljk0MSwxMDUuMTU2LDIxNi4wNzIsMTA5LjUzNmMtMS43ODQtNy42NzUtMi43MTgtMTUuNjc0LTIuNzE4LTIzLjg5NmMwLTU3Ljg5MSw0Ni45NDEtMTA0LjgzMiwxMDQuODMyLTEwNC44MzJcXG5cXHRcXHRjMzAuMTczLDAsNTcuNDA0LDEyLjczNCw3Ni41MjUsMzMuMTAyYzIzLjg4Ny00LjY5NCw0Ni4zMTMtMTMuNDIzLDY2LjU2OS0yNS40MzhjLTcuODI3LDI0LjQ4NS0yNC40MzQsNDUuMDI1LTQ2LjA4OSw1OC4wMDJcXG5cXHRcXHRjMjEuMjA5LTIuNTM1LDQxLjQyNi04LjE3MSw2MC4yMjItMTYuNTA1QzQ5Ny40NDgsMTE4LjU0Miw0NzkuNjY2LDEzNy4wMDQsNDU5LjE4NiwxNTEuNzg3elxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZwYXRoXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcIm1haW5fX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX2xpbmstbG9nb1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcIlVURi04XFxcIiBzdGFuZGFsb25lPVxcXCJub1xcXCI/XFx1MDAzRVxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIlxcdTAwM0VcXG4gICAgXFxuICAgIFxcdTAwM0N0aXRsZVxcdTAwM0VsaW5rZWRpbiBbIzE2MV1cXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgICBcXHUwMDNDZGVzY1xcdTAwM0VDcmVhdGVkIHdpdGggU2tldGNoLlxcdTAwM0NcXHUwMDJGZGVzY1xcdTAwM0VcXG4gICAgXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcbiAgICBcXHUwMDNDZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NnIGlkPVxcXCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMTgwLjAwMDAwMCwgLTc0NzkuMDAwMDAwKVxcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2cgaWQ9XFxcImljb25zXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BhdGggZD1cXFwiTTE0NCw3MzM5IEwxNDAsNzMzOSBMMTQwLDczMzIuMDAxIEMxNDAsNzMzMC4wODEgMTM5LjE1Myw3MzI5LjAxIDEzNy42MzQsNzMyOS4wMSBDMTM1Ljk4MSw3MzI5LjAxIDEzNSw3MzMwLjEyNiAxMzUsNzMzMi4wMDEgTDEzNSw3MzM5IEwxMzEsNzMzOSBMMTMxLDczMjYgTDEzNSw3MzI2IEwxMzUsNzMyNy40NjIgQzEzNSw3MzI3LjQ2MiAxMzYuMjU1LDczMjUuMjYgMTM5LjA4Myw3MzI1LjI2IEMxNDEuOTEyLDczMjUuMjYgMTQ0LDczMjYuOTg2IDE0NCw3MzMwLjU1OCBMMTQ0LDczMzkgTDE0NCw3MzM5IFogTTEyNi40NDIsNzMyMy45MjEgQzEyNS4wOTMsNzMyMy45MjEgMTI0LDczMjIuODE5IDEyNCw3MzIxLjQ2IEMxMjQsNzMyMC4xMDIgMTI1LjA5Myw3MzE5IDEyNi40NDIsNzMxOSBDMTI3Ljc5LDczMTkgMTI4Ljg4Myw3MzIwLjEwMiAxMjguODgzLDczMjEuNDYgQzEyOC44ODQsNzMyMi44MTkgMTI3Ljc5LDczMjMuOTIxIDEyNi40NDIsNzMyMy45MjEgTDEyNi40NDIsNzMyMy45MjEgWiBNMTI0LDczMzkgTDEyOSw3MzM5IEwxMjksNzMyNiBMMTI0LDczMjYgTDEyNCw3MzM5IFpcXFwiIGlkPVxcXCJsaW5rZWRpbi1bIzE2MV1cXFwiXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGcGF0aFxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcIm1haW5fX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX2xpbmstbG9nb1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcIlVURi04XFxcIiBzdGFuZGFsb25lPVxcXCJub1xcXCI/XFx1MDAzRVxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIlxcdTAwM0VcXG4gICAgXFxuICAgIFxcdTAwM0N0aXRsZVxcdTAwM0VnaXRodWIgWyMxNDJdXFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXG4gICAgXFx1MDAzQ2Rlc2NcXHUwMDNFQ3JlYXRlZCB3aXRoIFNrZXRjaC5cXHUwMDNDXFx1MDAyRmRlc2NcXHUwMDNFXFxuICAgIFxcdTAwM0NkZWZzXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG4gICAgXFx1MDAzQ2cgaWQ9XFxcIlBhZ2UtMVxcXCIgc3Ryb2tlPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZyBpZD1cXFwiRHJpYmJibGUtTGlnaHQtUHJldmlld1xcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTE0MC4wMDAwMDAsIC03NTU5LjAwMDAwMClcXFwiIGZpbGw9XFxcIiMwMDAwMDBcXFwiXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NnIGlkPVxcXCJpY29uc1xcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAxNjAuMDAwMDAwKVxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NwYXRoIGQ9XFxcIk05NCw3Mzk5IEM5OS41MjMsNzM5OSAxMDQsNzQwMy41OSAxMDQsNzQwOS4yNTMgQzEwNCw3NDEzLjc4MiAxMDEuMTM4LDc0MTcuNjI0IDk3LjE2Nyw3NDE4Ljk4MSBDOTYuNjYsNzQxOS4wODIgOTYuNDgsNzQxOC43NjIgOTYuNDgsNzQxOC40ODkgQzk2LjQ4LDc0MTguMTUxIDk2LjQ5Miw3NDE3LjA0NyA5Ni40OTIsNzQxNS42NzUgQzk2LjQ5Miw3NDE0LjcxOSA5Ni4xNzIsNzQxNC4wOTUgOTUuODEzLDc0MTMuNzc3IEM5OC4wNCw3NDEzLjUyMyAxMDAuMzgsNzQxMi42NTYgMTAwLjM4LDc0MDguNzE4IEMxMDAuMzgsNzQwNy41OTggOTkuOTkyLDc0MDYuNjg0IDk5LjM1LDc0MDUuOTY2IEM5OS40NTQsNzQwNS43MDcgOTkuNzk3LDc0MDQuNjY0IDk5LjI1Miw3NDAzLjI1MiBDOTkuMjUyLDc0MDMuMjUyIDk4LjQxNCw3NDAyLjk3NyA5Ni41MDUsNzQwNC4zMDMgQzk1LjcwNiw3NDA0LjA3NiA5NC44NSw3NDAzLjk2MiA5NCw3NDAzLjk1OCBDOTMuMTUsNzQwMy45NjIgOTIuMjk1LDc0MDQuMDc2IDkxLjQ5Nyw3NDA0LjMwMyBDODkuNTg2LDc0MDIuOTc3IDg4Ljc0Niw3NDAzLjI1MiA4OC43NDYsNzQwMy4yNTIgQzg4LjIwMyw3NDA0LjY2NCA4OC41NDYsNzQwNS43MDcgODguNjQ5LDc0MDUuOTY2IEM4OC4wMSw3NDA2LjY4NCA4Ny42MTksNzQwNy41OTggODcuNjE5LDc0MDguNzE4IEM4Ny42MTksNzQxMi42NDYgODkuOTU0LDc0MTMuNTI2IDkyLjE3NSw3NDEzLjc4NSBDOTEuODg5LDc0MTQuMDQxIDkxLjYzLDc0MTQuNDkzIDkxLjU0LDc0MTUuMTU2IEM5MC45Nyw3NDE1LjQxOCA4OS41MjIsNzQxNS44NzEgODguNjMsNzQxNC4zMDQgQzg4LjYzLDc0MTQuMzA0IDg4LjEwMSw3NDEzLjMxOSA4Ny4wOTcsNzQxMy4yNDcgQzg3LjA5Nyw3NDEzLjI0NyA4Ni4xMjIsNzQxMy4yMzQgODcuMDI5LDc0MTMuODcgQzg3LjAyOSw3NDEzLjg3IDg3LjY4NCw3NDE0LjE4NSA4OC4xMzksNzQxNS4zNyBDODguMTM5LDc0MTUuMzcgODguNzI2LDc0MTcuMiA5MS41MDgsNzQxNi41OCBDOTEuNTEzLDc0MTcuNDM3IDkxLjUyMiw3NDE4LjI0NSA5MS41MjIsNzQxOC40ODkgQzkxLjUyMiw3NDE4Ljc2IDkxLjMzOCw3NDE5LjA3NyA5MC44MzksNzQxOC45ODIgQzg2Ljg2NSw3NDE3LjYyNyA4NCw3NDEzLjc4MyA4NCw3NDA5LjI1MyBDODQsNzQwMy41OSA4OC40NzgsNzM5OSA5NCw3Mzk5XFxcIiBpZD1cXFwiZ2l0aHViLVsjMTQyXVxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZwYXRoXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwibWFpbl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fbGluay1sb2dvXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwiVVRGLThcXFwiIHN0YW5kYWxvbmU9XFxcIm5vXFxcIj9cXHUwMDNFXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiXFx1MDAzRVxcbiAgICBcXG4gICAgXFx1MDAzQ3RpdGxlXFx1MDAzRWluc3RhZ3JhbSBbIzE2N11cXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgICBcXHUwMDNDZGVzY1xcdTAwM0VDcmVhdGVkIHdpdGggU2tldGNoLlxcdTAwM0NcXHUwMDJGZGVzY1xcdTAwM0VcXG4gICAgXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcbiAgICBcXHUwMDNDZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NnIGlkPVxcXCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMzQwLjAwMDAwMCwgLTc0MzkuMDAwMDAwKVxcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2cgaWQ9XFxcImljb25zXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BhdGggZD1cXFwiTTI4OS44Njk2NTIsNzI3OS4xMjI3MyBDMjg4LjI0MTc2OSw3Mjc5LjE5NjE4IDI4Ni44MzA4MDUsNzI3OS41OTQyIDI4NS42OTE0ODYsNzI4MC43Mjg3MSBDMjg0LjU0ODE4Nyw3MjgxLjg2OTE4IDI4NC4xNTUxNDcsNzI4My4yODU1OCAyODQuMDgxNTE0LDcyODQuODk2NTMgQzI4NC4wMzU3NDIsNzI4NS45MDIwMSAyODMuNzY4MDc3LDcyOTMuNDk4MTggMjg0LjU0NDIwNyw3Mjk1LjQ5MDI4IEMyODUuMDY3NTk3LDcyOTYuODM0MjIgMjg2LjA5ODQ1Nyw3Mjk3Ljg2NzQ5IDI4Ny40NTQ2OTQsNzI5OC4zOTI1NiBDMjg4LjA4NzUzOCw3Mjk4LjYzODcyIDI4OC44MDk5MzYsNzI5OC44MDU0NyAyODkuODY5NjUyLDcyOTguODU0MTEgQzI5OC43MzA0NjcsNzI5OS4yNTUxMSAzMDIuMDE1MDg5LDcyOTkuMDM2NzQgMzAzLjQwMDE4Miw3Mjk1LjQ5MDI4IEMzMDMuNjQ1OTU2LDcyOTQuODU5IDMwMy44MTUxMTMsNzI5NC4xMzc0IDMwMy44NjE4OCw3MjkzLjA4MDMxIEMzMDQuMjY2ODYsNzI4NC4xOTY3NyAzMDMuNzk2MjA3LDcyODIuMjcxMTcgMzAyLjI1MTkwOCw3MjgwLjcyODcxIEMzMDEuMDI3MDE2LDcyNzkuNTA2ODUgMjk5LjU4NjIsNzI3OC42NzUwOCAyODkuODY5NjUyLDcyNzkuMTIyNzMgTTI4OS45NTEyNDUsNzI5Ny4wNjc0OCBDMjg4Ljk4MTA4Myw3Mjk3LjAyMzggMjg4LjQ1NDcwNyw3Mjk2Ljg2MjAxIDI4OC4xMDM0NTksNzI5Ni43MjYwMyBDMjg3LjIxOTg2NSw3Mjk2LjM4MjYgMjg2LjU1NjE3NCw3Mjk1LjcyMTU1IDI4Ni4yMTQ4NzYsNzI5NC44NDMxMiBDMjg1LjYyMzgyMyw3MjkzLjMyOTQ0IDI4NS44MTk4NDYsNzI4Ni4xNDAyMyAyODUuODcyNTgzLDcyODQuOTc2OTMgQzI4NS45MjQzMjUsNzI4My44Mzc0NSAyODYuMTU1MTc0LDcyODIuNzk2MjQgMjg2Ljk1OTE2NSw3MjgxLjk5MjI2IEMyODcuOTU0MjAzLDcyODAuOTk5NjggMjg5LjIzOTc5Miw3MjgwLjUxMzMyIDI5Ny45OTMxNDQsNzI4MC45MDgzNyBDMjk5LjEzNTQ0OCw3MjgwLjk1OTk4IDMwMC4xNzkyNDMsNzI4MS4xOTAyNiAzMDAuOTg1MjI0LDcyODEuOTkyMjYgQzMwMS45ODAyNjIsNzI4Mi45ODQ4MyAzMDIuNDczODAxLDcyODQuMjgwMTQgMzAyLjA3MTgwNiw3MjkyLjk5OTkxIEMzMDIuMDI4MDI0LDcyOTMuOTY3NjcgMzAxLjg2NTgzMyw3Mjk0LjQ5Mjc0IDMwMS43Mjk1MTMsNzI5NC44NDMxMiBDMzAwLjgyOTAwMyw3Mjk3LjE1MDg1IDI5OC43NTczMzMsNzI5Ny40NzE0NSAyODkuOTUxMjQ1LDcyOTcuMDY3NDggTTI5OC4wODk2NjMsNzI4My42ODk1NiBDMjk4LjA4OTY2Myw3Mjg0LjM0NjY1IDI5OC42MjM5OTgsNzI4NC44ODA2NSAyOTkuMjgzNzA5LDcyODQuODgwNjUgQzI5OS45NDM0MTksNzI4NC44ODA2NSAzMDAuNDc4NzUsNzI4NC4zNDY2NSAzMDAuNDc4NzUsNzI4My42ODk1NiBDMzAwLjQ3ODc1LDcyODMuMDMyNDggMjk5Ljk0MzQxOSw3MjgyLjQ5ODQ3IDI5OS4yODM3MDksNzI4Mi40OTg0NyBDMjk4LjYyMzk5OCw3MjgyLjQ5ODQ3IDI5OC4wODk2NjMsNzI4My4wMzI0OCAyOTguMDg5NjYzLDcyODMuNjg5NTYgTTI4OC44NjI2NzMsNzI4OC45ODc5MiBDMjg4Ljg2MjY3Myw3MjkxLjgwMjg2IDI5MS4xNTAyNjYsNzI5NC4wODQ3OSAyOTMuOTcyMTk0LDcyOTQuMDg0NzkgQzI5Ni43OTQxMjMsNzI5NC4wODQ3OSAyOTkuMDgxNzE2LDcyOTEuODAyODYgMjk5LjA4MTcxNiw3Mjg4Ljk4NzkyIEMyOTkuMDgxNzE2LDcyODYuMTcyOTggMjk2Ljc5NDEyMyw3MjgzLjg5MjA1IDI5My45NzIxOTQsNzI4My44OTIwNSBDMjkxLjE1MDI2Niw3MjgzLjg5MjA1IDI4OC44NjI2NzMsNzI4Ni4xNzI5OCAyODguODYyNjczLDcyODguOTg3OTIgTTI5MC42NTU3MzIsNzI4OC45ODc5MiBDMjkwLjY1NTczMiw3Mjg3LjE2MTU5IDI5Mi4xNDAzMjksNzI4NS42Nzk2NyAyOTMuOTcyMTk0LDcyODUuNjc5NjcgQzI5NS44MDQwNiw3Mjg1LjY3OTY3IDI5Ny4yODg2NTcsNzI4Ny4xNjE1OSAyOTcuMjg4NjU3LDcyODguOTg3OTIgQzI5Ny4yODg2NTcsNzI5MC44MTUyNSAyOTUuODA0MDYsNzI5Mi4yOTcxNiAyOTMuOTcyMTk0LDcyOTIuMjk3MTYgQzI5Mi4xNDAzMjksNzI5Mi4yOTcxNiAyOTAuNjU1NzMyLDcyOTAuODE1MjUgMjkwLjY1NTczMiw3Mjg4Ljk4NzkyXFxcIiBpZD1cXFwiaW5zdGFncmFtLVsjMTY3XVxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZwYXRoXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwibWFpbl9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fbGluay1sb2dvXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwiVVRGLThcXFwiIHN0YW5kYWxvbmU9XFxcIm5vXFxcIj9cXHUwMDNFXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiLTUgMCAyMCAyMFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIlxcdTAwM0VcXG4gICAgXFxuICAgIFxcdTAwM0N0aXRsZVxcdTAwM0VmYWNlYm9vayBbIzE3Nl1cXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgICBcXHUwMDNDZGVzY1xcdTAwM0VDcmVhdGVkIHdpdGggU2tldGNoLlxcdTAwM0NcXHUwMDJGZGVzY1xcdTAwM0VcXG4gICAgXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcbiAgICBcXHUwMDNDZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NnIGlkPVxcXCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMzg1LjAwMDAwMCwgLTczOTkuMDAwMDAwKVxcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2cgaWQ9XFxcImljb25zXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BhdGggZD1cXFwiTTMzNS44MjEyODIsNzI1OSBMMzM1LjgyMTI4Miw3MjUwIEwzMzguNTUzNjkzLDcyNTAgTDMzOSw3MjQ2IEwzMzUuODIxMjgyLDcyNDYgTDMzNS44MjEyODIsNzI0NC4wNTIgQzMzNS44MjEyODIsNzI0My4wMjIgMzM1Ljg0NzU5Myw3MjQyIDMzNy4yODY4ODQsNzI0MiBMMzM4Ljc0NDY4OSw3MjQyIEwzMzguNzQ0Njg5LDcyMzkuMTQgQzMzOC43NDQ2ODksNzIzOS4wOTcgMzM3LjQ5MjQ5Nyw3MjM5IDMzNi4yMjU2ODcsNzIzOSBDMzMzLjU4MDAwNCw3MjM5IDMzMS45MjM0MDcsNzI0MC42NTcgMzMxLjkyMzQwNyw3MjQzLjcgTDMzMS45MjM0MDcsNzI0NiBMMzI5LDcyNDYgTDMyOSw3MjUwIEwzMzEuOTIzNDA3LDcyNTAgTDMzMS45MjM0MDcsNzI1OSBMMzM1LjgyMTI4Miw3MjU5IFpcXFwiIGlkPVxcXCJmYWNlYm9vay1bIzE3Nl1cXFwiXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGcGF0aFxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcIm1haW5fX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX2xpbmstbG9nb1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk00IDcuMDAwMDVMMTAuMiAxMS42NUMxMS4yNjY3IDEyLjQ1IDEyLjczMzMgMTIuNDUgMTMuOCAxMS42NUwyMCA3XFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3JlY3QgeD1cXFwiM1xcXCIgeT1cXFwiNVxcXCIgd2lkdGg9XFxcIjE4XFxcIiBoZWlnaHQ9XFxcIjE0XFxcIiByeD1cXFwiMlxcXCIgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCIvLyBjb25zb2xlLmxvZygxKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4vLyAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyaycpIHtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpO1xuLy8gICAgfVxuLy8gICAgZWxzZSB7XG4vLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpXG4vLyAgICB9XG4vLyAgICBhZGREYXJrQ2xhc3NUb0hUTUwoKVxuLy8gfSk7XG4vLyBmdW5jdGlvbiBhZGREYXJrQ2xhc3NUb0hUTUwoKSB7XG4vLyAgICB0cnkge1xuLy8gICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyaycpIHtcbi8vICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuLy8gICAgICAgfVxuLy8gICAgICAgZWxzZSB7XG4vLyAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbi8vICAgICAgIH1cbi8vICAgIH0gY2F0Y2ggKGVycikgeyB9XG4vLyB9XG4vLyBhZGREYXJrQ2xhc3NUb0hUTUwoKTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEZvbnQiLCJtb2JpbGVGb250IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJkZWZhdWx0SGVpZ2h0IiwiZlNpemUiLCJkZXZpY2UiLCJ2VyIsInZIIiwiTWF0aCIsIm1pbiIsIm1heCIsIm1vZGlmaWVyRGV2aWNlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpc01vYmlsZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiZm9udFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImFkZERhcmtDbGFzc1RvSFRNTCIsImVyciIsImFkZExpc3RDbGFzc1RvSFRNTCJdLCJzb3VyY2VSb290IjoiIn0=