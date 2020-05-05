/* main, section and sidenav reveals and navbar style change on navigation */
/*global $ */
/*global document: false */
/*jslint white: true */

$(document).ready(function() {
    "use strict";
    $('#home-button').on('click', function() {
        $('#home').show(1, function() {
            $('#home-button').addClass('to-blue');
            $('#resume-button').removeClass('to-blue');
            $('#code-button').removeClass('to-blue');
            $('#interests-button').removeClass('to-blue');
            $('#contact-form-button').removeClass('to-blue');
            $('#code').hide(1);
            $('#resume').hide(1);
            $('#interests').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
        });
    });

    $('#resume-button').on('click', function() {
        $('#resume').show(1, function() {
            $('#home-button').removeClass('to-blue');
            $('#resume-button').addClass('to-blue');
            $('#code-button').removeClass('to-blue');
            $('#interests-button').removeClass('to-blue');
            $('#contact-form-button').removeClass('to-blue');
            $('#home').hide(1);
            $('#code').hide(1);
            $('#interests').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
        });
    });

    $('#interests-button').on('click', function() {
        $('#interests').show(1, function() {
            $('#home-button').removeClass('to-blue');
            $('#resume-button').removeClass('to-blue');
            $('#code-button').removeClass('to-blue');
            $('#interests-button').addClass('to-blue');
            $('#contact-form-button').removeClass('to-blue');
            $('#home').hide(1);
            $('#resume').hide(1);
            $('#code').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
        });
    });

    $('#code-button').on('click', function() {
        $('#code').show(1, function() {
            $('#home-button').removeClass('to-blue');
            $('#resume-button').removeClass('to-blue');
            $('#code-button').addClass('to-blue');
            $('#interests-button').removeClass('to-blue');
            $('#contact-form-button').removeClass('to-blue');
            $('#home').hide(1);
            $('#resume').hide(1);
            $('#interests').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
        });
    });

    $('#contact-form-button').on('click', function() {
        $('#contact-form').show(1, function() {
            $('#home-button').removeClass('to-blue');
            $('#resume-button').removeClass('to-blue');
            $('#code-button').removeClass('to-blue');
            $('#interests-button').removeClass('to-blue');
            $('#contact-form-button').addClass('to-blue');
            $('#home').hide(1);
            $('#resume').hide(1);
            $('#code').hide(1);
            $('#interests').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
        });
    });

    /* interests button fades */
    $('#btn-one').on('click', function() {
        $('#interest-two-show').fadeOut(1, function() {
            $('#interest-one-show').fadeIn(100);
            $('#interest-three-show').fadeOut(1);
        });
    });

    $('#btn-two').on('click', function() {
        $('#interest-one-show').fadeOut(1, function() {
            $('#interest-two-show').fadeIn(100);
            $('#interest-three-show').fadeOut(1);
        });
    });

    $('#btn-three').on('click', function() {
        $('#interest-two-show').fadeOut(1, function() {
            $('#interest-three-show').fadeIn(100);
            $('#interest-one-show').fadeOut(1);
        });
    });

    /* github button fades */
    $('#button-one').on('click', function() {
        $('#git-two-show').fadeOut(1, function() {
            $('#git-one-show').fadeIn(100);
            $('#git-three-show').fadeOut(1);

        });
    });

    $('#button-two').on('click', function() {
        $('#git-one-show').fadeOut(1, function() {
            $('#git-two-show').fadeIn(100);
            $('#git-three-show').fadeOut(1);

        });
    });

    $('#button-three').on('click', function() {
        $('#git-two-show').fadeOut(1, function() {
            $('#git-three-show').fadeIn(100);
            $('#git-one-show').fadeOut(1);
        });
    });
});
