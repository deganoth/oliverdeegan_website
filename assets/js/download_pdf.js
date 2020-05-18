/*global document: false */
/*global html2pdf */
/*global print */
/*jslint white: true */

var print_doc = document.getElementById('cv');
var mobile = document.getElementById('cv-r');
var buttons = document.getElementById('menu-buttons');

function download() {
    "use strict";
    print_doc.style.display = "block";
    buttons.style.display = "block";
    mobile.style.display = "none";

    // Generate the PDF.
    html2pdf().from(print_doc).set({
            margin: 0,
            filename: 'OliverDeeganCV2020.pdf',
            html2canvas: { scale: 4 },
            jsPDF: { orientation: 'portrait', unit: 'in', format: 'A4', compressPDF: false }
        })
        .save();
}

function mobile() {
    "use strict";
    print_doc.style.display = "none";
    buttons.style.display = "none";
    mobile.style.display = "block";

}
