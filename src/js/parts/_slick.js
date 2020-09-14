$(document).ready(function() {

    $('#top_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoPlay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('#items_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#btn_prev_c'),
        nextArrow: $('#btn_next_c'),
        dots: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#items_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });

    $('#tech_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#btn_prev_t'),
        nextArrow: $('#btn_next_t'),
        dots: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#items_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.t-slide-number').text(indexSlide);
        });

});

