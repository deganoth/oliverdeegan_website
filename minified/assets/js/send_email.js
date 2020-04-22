/*global emailjs*/
/*global console*/
/*global $ */
/*jslint white: true */

function sendMail(contactForm) {
    "use strict";
    emailjs.send("gmail", "contact_form", {
            "full_name": contactForm.full_name.value,
            "email": contactForm.email.value,
            "message": contactForm.message.value,
        })
        .then(
            function(response) {
                console.log("Success", response);
                $('#thank-you').show(40, function() {
                    $('#contact-form').hide(1);
                    $('#full_name').val(null);
                    $('#email').val(null);
                    $('#message').val(null);
                });
            },
            function(error) {
                console.log("failed", error);
                $('#error').show(40, function() {
                    $('#contact-form').hide(1);
                    $('#full_name').val(null);
                    $('#email').val(null);
                    $('#message').val(null);
                });
            }
        );
    return false;
}