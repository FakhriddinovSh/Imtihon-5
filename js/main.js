$('.slick__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1351,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});