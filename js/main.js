$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
    });
});

$(document).on('click', '.menu__item__link', function (event) {
    event.preventDefault();

    let scrollTo = $(this).attr('href');

    if (scrollTo !== '#') {
        $("html, body").animate(
            {
                scrollTop: $(scrollTo).offset().top,
            },
            1000
        );
    }
});