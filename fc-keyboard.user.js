// ==UserScript==
// @name Next page by keyboard (Forocoches)
// @namespace Forocoches
// @match https://www.forocoches.com/foro/showthread.php?t=*
// @grant none
// ==/UserScript==

var LEFT_ARROW = [37];
var RIGHT_ARROW = [39];
var CURRENT_URL = window.location.href;
var RE = /page=(\d+)/g;

document.addEventListener('keydown', function(e) {
    var newURL;
    if (!CURRENT_URL.includes("page=")) {
        CURRENT_URL += "&page=1";
    }
    if (e.keyCode == LEFT_ARROW) {
        if (CURRENT_URL.includes("page=1&") || CURRENT_URL.endsWith("page=1")) {
            return false;
        }
        newURL = CURRENT_URL.replace(RE, function($0, $1) {
            return "page=" + (parseInt($1) - 1);
        })
        window.location.href = newURL;
    } else if (e.keyCode == RIGHT_ARROW) {
        newURL = CURRENT_URL.replace(RE, function($0, $1) {
            return "page=" + (parseInt($1) + 1);
        })
        window.location.href = newURL;
    }
    return false;
});
