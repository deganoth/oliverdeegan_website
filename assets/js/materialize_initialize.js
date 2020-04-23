/*global $ */
/*global M */
/*global document: false */
/*jslint white: true */

$(document).ready(function() {
   "use strict";
   
   M.updateTextFields();
   M.textareaAutoResize($('#project_idea'));
});
