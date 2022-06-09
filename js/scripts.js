$(document).ready(function(){

    $('.slide1').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            320:{
                items:1
            },

            428:{
                items:3
            },

            768:{
                items:4
            },

            1000:{
                items:6
            }
        }
    });
    $('.slide2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

