"use strict"
const elt = document.createElement("script")
elt.innerHTML = "Object.defineProperty(window, 'Intercom', {value: function(){/*whatever*/} ,writable: false})"
document.head.appendChild(elt)
