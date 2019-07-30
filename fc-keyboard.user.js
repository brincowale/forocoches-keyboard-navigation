// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @match https://www.forocoches.com/foro/showthread.php
// @grant none
// ==/UserScript==

var LEFT_ARROW = [37];  
var RIGHT_ARROW = [39];  
var CURRENT_URL = window.location.href;
var RE = /page=(\d+)/g;

document.addEventListener('keydown', function(e) {
    if (e.keyCode == LEFT_ARROW) {
        var newURL = CURRENT_URL.replace(RE, function($0, $1) {
          return "page=" + (parseInt($1) - 1);
        })
        window.location.href = newURL;
    } else if (e.keyCode == RIGHT_ARROW) {
        var newURL = CURRENT_URL.replace(RE, function($0, $1) {
          return "page=" + (parseInt($1) + 1);
        })
        window.location.href = newURL;
    }
    return false;
});
