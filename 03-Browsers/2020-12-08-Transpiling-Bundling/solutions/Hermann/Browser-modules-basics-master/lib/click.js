"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function clickImages() {
  var sectionContent = document.getElementById("content");
  sectionContent.addEventListener("click", function (e) {
    switch (e.target.tagName) {
      case "IMG":
        alert("All of the yarn is available in our shop!");
    }
  });
}

var _default = {
  clickImages: clickImages
};
exports["default"] = _default;