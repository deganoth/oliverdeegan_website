/* main body section reveals on navigation */
/*global $ */
/*global document: false */
/*jslint white: true */

$(document).ready(function() {
    "use strict";
    $('#home-button').on('click', function() {
        $('#home').show(40, function() {
            $('#code').hide(1);
            $('#resume').hide(1);
            $('#interests').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
            $('#home').addClass('index-background-gradient');
            $('#resume').removeClass('resume-background-gradient', 100);
            $('#interests').removeClass('interests-background-gradient', 100);
            $('#code').removeClass('code-background-gradient', 100);
            $('#contact-form').removeClass('contact-form-background-gradient', 100);
        });
    });

    $('#resume-button').on('click', function() {
        $('#resume').show(40, function() {
            $('#home').hide(1);
            $('#code').hide(1);
            $('#interests').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
            $('#resume').addClass('resume-background-gradient');
            $('#home').removeClass('index-background-gradient', 100);
            $('#interests').removeClass('interests-background-gradient', 100);
            $('#code').removeClass('code-background-gradient', 100);
            $('#contact-form').removeClass('contact-form-background-gradient', 100);
        });
    });

    $('#interests-button').on('click', function() {
        $('#interests').show(40, function() {
            $('#home').hide(1);
            $('#resume').hide(1);
            $('#code').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
            $('#interests').addClass('interests-background-gradient');
            $('#home').removeClass('index-background-gradient', 100);
            $('#resume').removeClass('resume-background-gradient', 100);
            $('#code').removeClass('code-background-gradient', 100);
            $('#contact-form').removeClass('contact-form-background-gradient', 100);
        });
    });

    $('#code-button').on('click', function() {
        $('#code').show(40, function() {
            $('#home').hide(1);
            $('#resume').hide(1);
            $('#interests').hide(1);
            $('#contact-form').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
            $('#code').addClass('code-background-gradient');
            $('#home').removeClass('index-background-gradient', 100);
            $('#resume').removeClass('resume-background-gradient', 100);
            $('#interests').removeClass('interests-background-gradient', 100);
            $('#contact-form').removeClass('contact-form-background-gradient', 100);
        });
    });

    $('#contact-form-button').on('click', function() {
        $('#contact-form').show(40, function() {
            $('#home').hide(1);
            $('#resume').hide(1);
            $('#code').hide(1);
            $('#interests').hide(1);
            $('#thank-you').hide(1);
            $('#error').hide(1);
            $('#code').removeClass('code-background-gradient');
            $('#home').removeClass('index-background-gradient', 100);
            $('#resume').removeClass('resume-background-gradient', 100);
            $('#interests').removeClass('interests-background-gradient', 100);
        });
    });

    /* interests button fades */
    $('#btn-one').on('click', function() {
        $('#interest-two-show').hide(100, function() {
            $('#interest-one-show').show(100);
            $('#interest-three-show').hide();
        });
    });

    $('#btn-two').on('click', function() {
        $('#interest-one-show').hide(100, function() {
            $('#interest-two-show').show(100);
            $('#interest-three-show').hide();
        });
    });

    $('#btn-three').on('click', function() {
        $('#interest-two-show').hide(100, function() {
            $('#interest-three-show').show(100);
            $('#interest-one-show').hide();
        });
    });

    /* github button fades */
    $('#button-one').on('click', function() {
        $('#git-two-show').hide(100, function() {
            $('#git-one-show').show(100);
            $('#git-three-show').hide();
            $('#git-four-show').hide();
        });
    });

    $('#button-two').on('click', function() {
        $('#git-one-show').hide(100, function() {
            $('#git-two-show').show(100);
            $('#git-three-show').hide();
            $('#git-four-show').hide();
        });
    });

    $('#button-three').on('click', function() {
        $('#git-two-show').hide(100, function() {
            $('#git-three-show').show(100);
            $('#git-one-show').hide();
            $('#git-four-show').hide();
        });
    });
});