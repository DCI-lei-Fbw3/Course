"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function scrollWindow() {
  var siteNav = document.getElementById("site-title");
  var siteHeading = document.getElementById("heading");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      siteNav.classList.add("fixed-header");
      siteHeading.classList.add("visible-title");
      siteHeading.classList.remove("nav-heading");
    } else {
      siteNav.classList.remove("fixed-header");
      siteHeading.classList.remove("visible-title");
      siteHeading.classList.add("nav-heading");
    }
  });
}

var _default = {
  scrollWindow: scrollWindow
};
exports["default"] = _default;