/* ==========================================================
   PART 1 – DOM ELEMENT SELECTION
========================================================== */

/*
This section selects all the HTML elements
that JavaScript will interact with.
*/

const themeButton = document.querySelector('#themeBtn');

const menuButton = document.querySelector('#menuBtn');

const navMenu = document.querySelector('#navMenu');

const contactForm = document.querySelector('#contactForm');

const formStatus = document.querySelector('#formStatus');

/* ==========================================================
   END OF PART 1
========================================================== */

/* ==========================================================
   PART 2 – THEME FUNCTION
========================================================== */

/*
This function changes the website theme.

It accepts one parameter called "theme".

Possible values:

"light"

or

"dark"
*/

function setTheme(theme) {

    /*
    Check whether the selected theme
    is dark mode.

    This creates a Boolean value.

    true  → dark

    false → light
    */

    const isDark = theme === 'dark';



    /*
    Add or remove the CSS class
    "dark-mode" from the <body>.

    If isDark is true:

        body class="dark-mode"

    If isDark is false:

        remove the class
    */

    document.body.classList.toggle(
        'dark-mode',
        isDark
    );



    /*
    Change the button icon.

    Light Mode  → ☾

    Dark Mode   → ☀
    */

    themeButton.textContent =

        isDark

        ? '☀'

        : '☾';



    /*
    Update the accessibility label.

    Screen readers will announce

    "Switch to light mode"

    or

    "Switch to dark mode"
    */

    themeButton.setAttribute(

        'aria-label',

        `Switch to ${isDark ? 'light' : 'dark'} mode`

    );



    /*
    Save the selected theme
    inside Local Storage.

    This allows the browser
    to remember the theme
    after refreshing the page.
    */

    localStorage.setItem(

        'theme',

        theme

    );

}

/* ==========================================================
   END OF PART 2
========================================================== */

/* ==========================================================
   PART 3 – LOAD SAVED THEME
========================================================== */

/*
Get the saved theme from Local Storage.

If no theme has been saved yet,

use "light" as the default theme.
*/

setTheme(

    localStorage.getItem('theme')

    ||

    'light'

);



/* ==========================================================
   THEME BUTTON CLICK EVENT
========================================================== */

/*
When the user clicks
the theme button,

switch between

Light Mode

and

Dark Mode.
*/

themeButton.addEventListener(

    'click',

    () => {

        /*
        Check whether
        the website is currently
        in Dark Mode.
        */

        const nextTheme =

            document.body.classList.contains('dark-mode')

            ?

            'light'

            :

            'dark';



        /*
        Apply the new theme.
        */

        setTheme(nextTheme);

    }

);

/* ==========================================================
   END OF PART 3
========================================================== */

/* ==========================================================
   PART 4 – MOBILE NAVIGATION
========================================================== */

/*
When the user clicks
the hamburger menu button,

open or close
the navigation menu.
*/

menuButton.addEventListener(

    'click',

    () => {

        /*
        Toggle the "open" class.

        If the menu is closed,
        it will open.

        If the menu is open,
        it will close.
        */

        const isOpen =

            navMenu.classList.toggle('open');



        /*
        Update the accessibility
        attribute.

        true  → Menu is open

        false → Menu is closed
        */

        menuButton.setAttribute(

            'aria-expanded',

            isOpen

        );



        /*
        Change the menu icon.

        Closed → ☰

        Open   → ×
        */

        menuButton
            .querySelector('[aria-hidden]')
            .textContent =

                isOpen

                ?

                '×'

                :

                '☰';

    }

);



/* ==========================================================
   CLOSE MENU WHEN A LINK IS CLICKED
========================================================== */

/*
Find every navigation link.

Example:

Home

About

Projects

Contact
*/

document.querySelectorAll('.nav-link')

.forEach((link) => {

    /*
    Wait until
    a navigation link
    is clicked.
    */

    link.addEventListener(

        'click',

        () => {

            /*
            Close the menu.
            */

            navMenu.classList.remove(

                'open'

            );



            /*
            Tell screen readers
            that the menu
            is now closed.
            */

            menuButton.setAttribute(

                'aria-expanded',

                'false'

            );



            /*
            Change icon
            back to
            hamburger.
            */

            menuButton

                .querySelector('[aria-hidden]')

                .textContent = '☰';

        }

    );

});

/* ==========================================================
   END OF PART 4
========================================================== */

/* ==========================================================
   PART 5 – CONTACT FORM
========================================================== */

/*
Listen for the form submission.

When the user clicks
the "Send Message" button,

this function runs.
*/

contactForm.addEventListener(

    'submit',

    (event) => {

        /*
        Stop the browser's
        default form submission.
        */

        event.preventDefault();



        /*
        Get the user's name.

        Remove extra spaces
        from the beginning
        and end.
        */

        const name =

            contactForm
                .elements
                .name
                .value
                .trim();



        /*
        Show a success message
        on the webpage.
        */

        formStatus.textContent =

            `Thanks, ${name}! Your email app will open so you can send the message.`;



        /*
        Create the email subject.

        encodeURIComponent()

        makes the text safe
        for use inside a URL.
        */

        const subject =

            encodeURIComponent(

                `Portfolio message from ${name}`

            );



        /*
        Create the email body.

        Include:

        • User message

        • Email address
        */

        const body =

            encodeURIComponent(

                `${contactForm.elements.message.value}

Reply to: ${contactForm.elements.email.value}`

            );



        /*
        Open the user's
        email application.

        Example:

        Gmail

        Outlook

        Apple Mail
        */

        window.location.href =

            `mailto:rmialmbs@gmail.com?subject=${subject}&body=${body}`;



        /*
        Clear the form.
        */

        contactForm.reset();

    }

);

/* ==========================================================
   END OF PART 5
========================================================== */

/* ==========================================================
   PART 6 – AUTOMATIC COPYRIGHT YEAR
========================================================== */

/*
Find the HTML element
with the id "year"

and display
the current year.
*/

document

    .querySelector('#year')

    .textContent =

    new Date().getFullYear();

/* ==========================================================
   END OF PART 6
========================================================== */