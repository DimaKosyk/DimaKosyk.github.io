$(function(){

  $(".menu a, .logo, .footer__logo-icon").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.slider-blog__inner-items').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
  });

  var header = $(".header__top");
  var scrollChange = 1;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('header__top-bg');
    } else {
      header.removeClass('header__top-bg');
    }
  });

  var mixer = mixitup('.gallery__content');

});