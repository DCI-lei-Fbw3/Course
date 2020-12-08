"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function hoverHeader() {
  var header = document.querySelector(".header");
  var modal = document.getElementById("myModal");
  header.addEventListener("mouseover", function (e) {
    modal.style.display = "block";
  });
  modal.addEventListener("click", function (e) {
    switch (e.target.className) {
      case "close":
      case "modal":
        modal.style.display = "none";
        break;
    }
  });
}

var _default = {
  hoverHeader: hoverHeader
};
exports["default"] = _default;