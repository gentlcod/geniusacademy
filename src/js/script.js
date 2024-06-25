// when scrolling down the page the nav bg turn to black color


$(document).ready(function() {
    // Initial background color
    var navbar = $(".navbar");
    
    // Scroll event listener
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // Adjust the threshold as needed
        var threshold = 50;

        if (scroll >= threshold) {
            navbar.addClass("navbar-scroll");

        } else {
            navbar.removeClass("navbar-scroll");
        }
    });
});



// when thre user tap on certain nav link the deepskyblue color active 

$(document).ready(function() {
    // Get the current path of the URL
    var path = window.location.pathname;

    // Highlight the active link based on the current URL
    $('.navbar-nav a').each(function() {
        var href = $(this).attr('href');
        if (path.substring(1) === href.substring(1) && href !== "") {
            $(this).addClass('active-link');
        }
    });

    // Change the color of the navigation button on click
    $('.navbar-nav a').click(function() {
        $('.navbar-nav a').removeClass('active-link');
        $(this).addClass('active-link');
    });
});



// when user scroll to specific section, depending on current section the nav link of that current section become active


$(document).ready( () => {
    // Initial background color
    var navbar = $(".navbar")



    // Scroll event listener
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // Adjust the threshold as needed
        var threshold = 50;

        if (scroll >= threshold) {
            navbar.addClass("navbar-scroll");
        } else {
            navbar.removeClass("navbar-scroll");
        }

        // Highlight nav link based on scroll position
        $('section').each(function() {
            var sectionTop = $(this).offset().top - navbar.outerHeight();
            var sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scroll >= sectionTop && scroll < sectionBottom) {
                var currentId = $(this).attr('id');
                $('.navbar-nav a').removeClass('active-link');
                $('.navbar-nav a[href="#' + currentId + '"]').addClass('active-link');
            }
        });
    });

    // Get the current path of the URL
    var path = window.location.pathname;

    // Highlight the active link based on the current URL
    $('.navbar-nav a').each(function() {
        var href = $(this).attr('href');
        if (path.substring(1) === href.substring(1) && href !== "") {
            $(this).addClass('active-link');
        }
    });

    // Change the color of the navigation button on click
    $('.navbar-nav a').click(function() {
        $('.navbar-nav a').removeClass('active-link');
        $(this).addClass('active-link');
    });
})






//////////////
/////JQUERY snippets//////
/////////////




jQuery(document).ready(function($) {
    "use strict";

    // Ripples effect
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    });

    // Magnific Popup for image gallery
    $('.works').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Typed.js for animated text
    var typed = new Typed('.text', {
        strings: [
            "<strong>Welcome to</strong> <strong class='primary'>Genius Business</strong> <strong class='blue'>Academy</strong>",
            "<strong>Your Future</strong> <strong class='primary'>With</strong> <strong class='blue'> Us!</strong>"
        ],
        typeSpeed: 50,
        loop: true
    });

    // Owl Carousel for team members
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

    // Counter Up for statistics
    $('.counter').counterUp({
        delay: 10,
        time: 2300
    });

    // Smooth scroll for anchor links
    $('.smooth-scroll').click(function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });
});


