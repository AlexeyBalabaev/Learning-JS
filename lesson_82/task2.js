"use strict";

function positionAt(anchor, position, elem) {
  let anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case "top":
      elem.style.left = anchorCoords
  }
}