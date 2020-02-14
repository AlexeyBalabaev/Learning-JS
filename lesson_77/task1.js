"use strict";

// get element
let elemWidget = document.querySelector('[data-widget-name]');

// read the value
alert(elemWidget.dataset.widgetName);
// or that
alert(elemWidget.getAttribute('data-widget-name'));