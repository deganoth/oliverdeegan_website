/*global document: false */
/*global $ */
/*jslint white: true */

var e = "oliver";
var m = ".";
var a = "deegan";
var il = "@gmail.com";

var tmail = e;
var end = m + a + il;

$(document).ready(function() {
    "use strict";
    $("#foot-mail").click(function() {
        document.location.href = "mailto:" + tmail + end;
    });
});