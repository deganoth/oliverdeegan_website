/*global emailjs*/
/*global console*/
/*global $ */
/*global M */
/*jslint white: true */

function sendMail(contactForm) {
    "use strict";
    if ($('#cheeky').val().length != 0) {
        return false;
    }
    emailjs.send("gmail", "contact_form", {
            "full_name": contactForm.full_name.value,
            "email": contactForm.email.value,
            "message": contactForm.message.value,
            "cheeky": contactForm.cheeky.value,
        })

        .then(
            function(response) {
                console.log("Success", response);
                $('#home').show(40, function() {
                    $('#contact-form').hide(1);
                    $('#message-form').trigger("reset");
                    $('#thanks-modal').show(40);
                    $('.modal-overlay').show(40);
                });
            },
            function(error) {
                console.log("failed", error);
                $('#error').show(40, function() {
                    $('#contact-form').hide(1);
                    $('#message-form').trigger("reset");
                    $('#error-modal').show(40);
                    $('.modal-overlay').show(40);
                });
            }
        );
    return false;
}


$('.modal-close').on('click', function() {
    $('#error-modal').hide(1);
    $('#thanks-modal').hide(1);
    $('.modal-overlay').hide(1);
});
