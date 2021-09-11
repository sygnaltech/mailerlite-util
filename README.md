# MailerLite Utilities

*Requires jQuery.*

## Introduction

This library provides a set of helper functions to add some functionality to a 
[MailerLite](https://https://www.mailerlite.com/) integration in your website.

It's designed specifically to overcome certain limitations of pop-ups in MailerLite's current version.

Current core features;

1. Allow users to re-display MailerLite pop-ups that have been viewed, and closed, in the current page visit.
2. Determines whether pop-ups have been shown, so that you can hide/show your re-display pop-up button appropriately.

*This library will be expanded as needed, and broken into modules for convenient selection of the parts you need.*

> See **Limitations** for details on what this utility library can and cannot do.

## Using MailerLite Utilities

### STEP 1 - Add the Library

You can embed our library directly from the [JSDelivr](https://en.wikipedia.org/wiki/JSDelivr) CDN.

Add to your HTML page `<head>` section.

```
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/mailerlite-util@latest/dist/mailerlite-util.js"></script>
```

*Note JSDelivr's [versioning](https://www.jsdelivr.com/features) support.*

We recommend that you specify the **major** and **minor** version numbers in your script reference.
Replace `@latest` with e.g. `@1.2` or the library version you want to use.

*This will protect you from breaking changes in new versions we release.*

### STEP 2 - Integrate the Scripts

Assuming you want users to be able to click a button to re-display closed pop-ups, you could give that button an `id`.

```
    <button id="button1">Test button</button>
```

Then before the closing `</body>` element, setup MailerLite Util and add your triggering function.

```
    <script>
        // Instantiate MailerLiteUtil object
        var mailerLite = new MailerLiteUtil();

        // Button on-click handler
        $("#button1").click(function () {

            // Re-open all pop-ups
            mailerLite.reOpenAllPopups();

        });
    </script>
```


> IMPORTANT: You can only re-open pop-ups that have been seen and closed in this page visit. It the pop-up did not appear, it cannot be re-opened.

### STEP 3 - Configure & Customize

Use the `/demo/popups` example code as a reference for;

- How to hide/show your re-display pop-up button.
- How to use helpef functions.

# Options

MailerLiteUtil can be instantiated with options, as in;

```
// Instantiate MailerLiteUtil object
var mailerLite = new MailerLiteUtil({
    logging: true, // enable logging to console
});
```

## `logging = true | false`

*Defaults to false.*

Enables or disables logging activity output to the console.

# Limitations

Because of the way MailerLite is designed, 
you can only re-open pop-ups that have been seen and closed in *this* page visit. 
It the pop-up did not appear after the page was viewed, it cannot be re-opened.

This limitation exists because MailerLite only generates the 
`<iframe>` code for your pop-up if it is going to display it.

# Credits

Thanks to-

- [MailerLite](https://www.mailerlite.com/) for offering a great SaaS solution for pop-ups and mailing lists.

- [Sygnal Technology Group](https://www.sygnal.com/) for coding this helper library.

- [Bulma](https://bulma.io/) for a great CSS library for documentation.
 
- [StackOverflow](https://stackoverflow.com/) for answering all of my jQuery questions.
