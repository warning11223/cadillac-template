$(function(){
    $('.photo__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    })

    $('.menu__btn').on('click', () => {
        $('.menu__list').slideToggle()
    })
});