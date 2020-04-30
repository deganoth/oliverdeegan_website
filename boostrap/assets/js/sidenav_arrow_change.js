/* changes direction of arrow from right facing to down on smaller screen to show location of menu item once clicked */
/* changes pop out direction of tooptip for different screen sizes */
/*global $ */
/*global document: false */
/*global window: false */
/*jslint white: true */

$(document).ready(function() {
    "use strict";
    if ($(window).width() < 993) {
        $('.full').removeClass('fill-height');
        $(".arrow").text("keyboard_arrow_down");
        $("#github-text").removeClass('menutiptext');
        $("#github-text").addClass('menutiptext-right');
    }
    else {
        $('.full').addClass('fill-height');
        $(".arrow").text("keyboard_arrow_right");
        $("#github-text").addClass('menutiptext');
        $("#github-text").removeClass('menutiptext-right');
    }
    $(window).resize(function() {

        if ($(window).width() < 993) {
            $('.full').removeClass('fill-height');
            $(".arrow").text("keyboard_arrow_down");
            $("#github-text").removeClass('menutiptext');
            $("#github-text").addClass('menutiptext-right');
        }
        else {
            $('.full').addClass('fill-height');
            $(".arrow").text("keyboard_arrow_right");
            $("#github-text").addClass('menutiptext');
            $("#github-text").removeClass('menutiptext-right');
        }
    });
});

