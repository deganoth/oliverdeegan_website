/*global emailjs*/
/*global console*/
/*global $ */
/*jslint white: true */

function sendMail(contactForm) {
    "use strict";
    emailjs.send("gmail", "contact_form", {
            "full_name": contactForm.full_name.value,
            "email": contactForm.email.value,
            "project_title": contactForm.project_title.value,
            "project_idea": contactForm.project_idea.value
        })
        .then(
            function(response) {
                console.log("Success", response);
                $('#thank-you').show(40, function() {
                    $('#contact-form').hide(1);
                    $('#full_name').val(null);
                    $('#email').val(null);
                    $('#project_title').val(null);
                    $('#project_idea').val(null);
                });
            },
            function(error) {
                console.log("failed", error);
                $('#error').show(40, function() {
                    $('#contact-form').hide(1);
                    $('#full_name').val(null);
                    $('#email').val(null);
                    $('#project_title').val(null);
                    $('#project_idea').val(null);
                });
            }
        );
    return false;
}