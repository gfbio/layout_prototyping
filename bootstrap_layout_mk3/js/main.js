/* ========================================================================= */
/*	Preloader
 /* ========================================================================= */

jQuery(window).load(function () {

    $("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
 /* ========================================================================= */

$(function () {

    var Page = (function () {

        var $navArrows = $('#nav-arrows'),
            $nav = $('#nav-dots > span'),
            slitslider = $('#slider').slitslider({
                onBeforeChange: function (slide, pos) {

                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');

                }
            }),

            init = function () {

                initEvents();

            },
            initEvents = function () {

                // add navigation events
                $navArrows.children(':last').on('click', function () {

                    slitslider.next();
                    return false;

                });

                $navArrows.children(':first').on('click', function () {

                    slitslider.previous();
                    return false;

                });

                $nav.each(function (i) {

                    $(this).on('click', function (event) {

                        var $dot = $(this);

                        if (!slitslider.isActive()) {

                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');

                        }

                        slitslider.jump(i + 1);
                        return false;

                    });

                });

            };

        return {init: init};

    })();

    Page.init();

});


$(document).ready(function () {

    /* ========================================================================= */
    /*	Menu item highlighting
     /* ========================================================================= */

    jQuery('#nav-left').singlePageNav({
        offset: jQuery('#nav-left').outerHeight(),
        filter: ':not(.external)',
        speed: 2000,
        currentClass: 'current',
        easing: 'easeInOutExpo',
        updateHash: true,
        beforeStart: function () {
            console.log('begin scrolling');
        },
        onComplete: function () {
            console.log('done scrolling');
        }
    });

    // TODO: no need for singlepage nav at all ?
    // jQuery('#nav-right').singlePageNav({
    //     offset: jQuery('#nav-right').outerHeight(),
    //     filter: ':not(.external)',
    //     speed: 2000,
    //     currentClass: 'current',
    //     easing: 'easeInOutExpo',
    //     updateHash: true,
    //     beforeStart: function() {
    //         console.log('begin scrolling');
    //     },
    //     onComplete: function() {
    //         console.log('done scrolling');
    //     }
    // });

    // yamm megamenu
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation()
    });


    // Dropdown Menu Fade
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop().fadeIn("slow");
        },
        function () {
            $('.dropdown-menu', this).stop().fadeOut("slow");
        });


    //$(".navbar-fixed-top").hide();


    $(window).scroll(function () {

        // TODO: FIXME: remove this diry hack ... it prevents shadow-class for submissio page ....
        var useTransparent = true;
        if (typeof transparentNaviOnLoad !== 'undefined') {
            useTransparent = transparentNaviOnLoad;
        }



        if ($(window).scrollTop() > 100) {
            //$("#navigation").css("background-color", "#fff");
            if (useTransparent) {
                //$(".navbar-fixed-top").addClass("navigation-shadow");
            }


            //$(".navbar-fixed-top").fadeIn(1000);

        } else {
            //$("#navigation").css("background-color", "transparent");
            //$("#navigation").css("background-color", "rgba(255, 255, 255, 0.3)");

            //$(".navbar-fixed-top").fadeOut(1000);
            if (useTransparent) {
                //$(".navbar-fixed-top").removeClass("navigation-shadow");
            }
        }




        // if ($(window).scrollTop() > 400) {
        //     $(".navbar-brand a").css("color","#fff");
        //     $("#navigation").removeClass("animated-header");
        // } else {
        //     $(".navbar-brand a").css("color","inherit");
        //     $("#navigation").addClass("animated-header");
        // }
    });

    /* ========================================================================= */
    /*	Fix Slider Height
     /* ========================================================================= */


    // Slider Height
    // FIXME: why is there 15px gap on bottom of section ?
    var slideHeight = $(window).height() + 15;
    //console.log('slideHeight ' + slideHeight);

    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper, #generic-main').css('height', slideHeight);

    $(window).resize(function () {
        'use strict',
            $('#home-slider, #slider, .sl-slider, .sl-content-wrapper, #generic-main').css('height', slideHeight);
    });


    /* TODO: put this back in if slider */
    $("#works, #testimonial").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 700,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>"]
    });


    /* ========================================================================= */
    /*	Featured Project Lightbox
     /* ========================================================================= */

    $(".fancybox").fancybox({
        padding: 0,

        openEffect: 'elastic',
        openSpeed: 650,

        closeEffect: 'elastic',
        closeSpeed: 550,

        closeClick: true,

        beforeShow: function () {
            this.title = $(this.element).attr('title');
            this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
        },

        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.8)'
                }
            }
        }
    });

});


/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var myLatLng = new google.maps.LatLng(53.1066684, 8.8518396);

    var mapOptions = {
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"stylers": [{"hue": "#345AA2"}, {"saturation": 250}]}, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{"lightness": 50}, {"visibility": "simplified"}]
        }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "off"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.402789, 91.822156),
        map: map,
        icon: 'img/icons/map-marker.png',
    });
}

// ========== END GOOGLE MAP ========== //

var wow = new WOW({
    offset: 75,          // distance to the element when triggering the animation (default is 0)
    mobile: false,       // trigger animations on mobile devices (default is true)
});
wow.init();

