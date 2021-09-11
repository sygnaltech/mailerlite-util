# MailerLite Utilities

*Requires jQuery.*

## Introduction

This library provides a set of helper functions to add some functionality to a 
[MailerLite](https://https://www.mailerlite.com/) integration in your website.

It's designed specifically to overcome certain limitations of pop-ups in MailerLite's current version.

Current core features;

1. Allow users to re-display MailerLite pop-ups that have been viewed, and closed, in the current page visit.

*This library will be expanded as needed, and broken into modules for convenient selection of the parts you need.*

## Using MailerLite Utilities

### STEP 1 - Add the Library

You can embed our library directly from the [JSDelivr](https://en.wikipedia.org/wiki/JSDelivr) CDN.

Add to your HTML page `<head>` section.

```
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/mailerlite-util@1.0/dist/mailerlite-utils.min.js"></script>
```

Note JSDelivr's [versioning](https://www.jsdelivr.com/features) support- if we introduce a breaking change, we'll update the minor [version number](https://gitversion.readthedocs.io/en/latest/more-info/version-increments/) so that it does not affect production sites. Therefore for simplicity, specify the major and minor version you want as in the example above.

### STEP 2 - Connect Your Trigger

Assuming you want users to be able to click a button to re-display closed pop-ups, you could give that button an `id`.

```
<button id="alerts">Test button</button>
```

Then before the closing `</body>` element, add the triggering function.

```
    <script>
        $(function () {

            $("#alerts").click(function () {
                reOpenAllMailerLitePopups();
            });

        });
    </script>
```


> IMPORTANT: You can only re-open pop-ups that have been seen and closed in this page visit. It the pop-up did not appear, it cannot be re-opened.

# Credits

Thanks to-

- [MailerLite](https://www.mailerlite.com/) for offering a great SaaS solution for pop-ups and mailing lists.

- [Sygnal Technology Group](https://www.sygnal.com/) for coding this helper library.

- [Bulma](https://bulma.io/) for a great CSS library for documentation.
