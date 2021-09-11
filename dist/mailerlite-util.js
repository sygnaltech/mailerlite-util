
// v1.1
// Sygnal Technology Group
// http://sygnal.com

// Re-opens MailerLite popups that have been closed.
// Only works during the same session, if the pop-up did not display, it cannot be re-opened.
function reOpenAllMailerLitePopups() {

    console.log("Re-open all pop-ups");

    // Find all MailerLite pop-ups
    var mailerLitePopups = $('iframe[id*="ml-webforms-popup-"]');

    // Iterate and display each individually
    $.each(mailerLitePopups, function (i, elem) {

        // Set necessary styles to cause it to re-appear properly
        $(elem).css("inset", "auto 0px 0px");
        $(elem).css("visibility", "visible");
        $(elem).css("opacity", "1");
        $(elem).css("height", "840px");

    })

}

// Returns the number of MailerLite popups found
function mailerLitePopupsCount() {

    var mailerLitePopups = $('iframe[id*="ml-webforms-popup-"]');

    return mailerLitePopups.length;
}

// Returns true if at least oen MailerLite popup was found
function mailerLitePopupsExist() {

    return mailerLitePopupsCount() > 0;
}
