$( function() {
    $( '.slider' ).slick( {
        dots: true,
        infinite: true,
        centerMode: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    } );
} );