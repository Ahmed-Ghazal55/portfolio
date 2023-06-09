$(document).ready(function(){

    $('.responsive').slick({
        prevArrow: $('.control-arrows .slick-left'),
        nextArrow: $('.control-arrows .slick-right'),
        arrows: true,
        dots: false,
        infinite: true,
        Infinity: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 350,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});