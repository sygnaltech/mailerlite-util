
// v1.2
// Sygnal Technology Group
// http://sygnal.com

var MailerLiteUtil = function (options) {

    const version = 'v1.2';

//    get readOnlyProperty() { return 42; }

    this.getVersion = function () {
        return version;
    }

    // Option variables
    var vars = {
        logging: false,
    };

    var root = this;

    // Constructor
    this.construct = function (options) {
        $.extend(vars, options);

        if (vars.logging)
            console.log("Started MailerLite Util " + version);

    };

    // Re-opens MailerLite popups that have been closed.
    // Only works during the same session, if the pop-up did not display, it cannot be re-opened.
    this.reOpenAllPopups = function() {

        if (vars.logging)
            console.log("Re-open all pop-ups");

        // Find all MailerLite pop-ups
        var popups = $('iframe[id*="ml-webforms-popup-"]');

        // Iterate and display each individually
        $.each(popups, function (i, elem) {

            // Set necessary styles to cause it to re-appear properly
            $(elem).css("inset", "auto 0px 0px");
            $(elem).css("visibility", "visible");
            $(elem).css("opacity", "1");
            $(elem).css("height", "840px");

        })

    }

    // Returns the number of MailerLite popups found
    this.popupsCount = function() {

        var popups = $('iframe[id*="ml-webforms-popup-"]');

        //if (vars.logging)
        //    console.log("Found " + popups.length + " popups");

        return popups.length;
    }

    // Returns true if at least one MailerLite popup was found
    this.popupsExist = function() {

        //if (vars.logging)
        //    console.log("Popups exist = " + this.popupsCount() > 0);

        return this.popupsCount() > 0;
    }

    // Pass options when class is instantiated
    this.construct(options);

}
