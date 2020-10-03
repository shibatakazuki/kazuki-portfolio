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

         
         $(function(){   
                $(window).scroll(function(){
              //.l-aboutから.l-skillsの間はこれ
             if ($(window).scrollTop() > $('.l-about').offset().top &&　$(window).scrollTop() < $('.l-skills').offset().top){
                  $(".l-header__nav .l-header__nav__list .l-header__nav__list__mobile a").css("color", "#5C5C5C");
             }//.l-directionより進んだらこれ
                  else if($(window).scrollTop() > $('.l-direction').offset().top){
                  $(".l-header__nav .l-header__nav__list .l-header__nav__list__mobile a").css("color", "#5C5C5C");
             }else//それ以外（l-frontpage l-service l-contactである場合）はこれ
                  $(".l-header__nav .l-header__nav__list .l-header__nav__list__mobile a").css("color", "#FEFEFE");
                   });
             }); 