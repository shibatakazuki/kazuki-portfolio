$( function() {
    $( '.slider' ).slick( {
        dots: true,
        infinite: true,
        centerMode: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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