$('.slick-slider').slick({
    infinite: true,
       dots: false,
       slidesToShow: 6,
       slidesToScroll: 1,
       variableWidth: true,
       arrows: false
});


$('#cart-slider-1').slick({
    infinite: true,
       dots: true,
       slidesToShow: 2,
       slidesToScroll: 1,
       arrows: true,
       prevArrow: '<button type="button" class="prev"><i class="fa fa-chevron-left"></i</button>',
       nextArrow: '<button type="button" class="next"><i class="fa fa-chevron-right"></i</button>',
       autoPlay: true,
       appendDots: $('#dots-1'),
       appendArrows: $('#arrows-1'),
       dotsClass: 'dots',
       centerMode: false,
       variableWidth: true,
       centerPadding: '50px'
      });
$('#cart-slider-2').slick({
    infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="prev"><i class="fa fa-chevron-left"></i</button>',
        nextArrow: '<button type="button" class="next"><i class="fa fa-chevron-right"></i</button>',
        autoPlay: true,
        appendDots: $('#dots-2'),
        appendArrows: $('#arrows-2'),
        dotsClass: 'dots',
        centerMode: false,
        variableWidth: true,
        centerPadding: '50px'
    });

    $('#respond').slick({
            infinite: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: true,
            prevArrow: '<button type="button" class="prev"><i class="fa fa-chevron-left"></i</button>',
            nextArrow: '<button type="button" class="next"><i class="fa fa-chevron-right"></i</button>',
            autoPlay: true,
            appendDots: $('#dots-3'),
            appendArrows: $('#arrows-3'),
            dotsClass: 'dots',
            centerMode: false,
            variableWidth: true,
            centerPadding: '50px'
        });