$ (function() {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active'),
    $('.menu__btn').toggleClass('menu__btn--active');
  })

  $('.slider-homepage__inner').slick({
    dots: true,
    arrows: false,
  })

  $('.slider-partners__list').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  $(window).scroll(function() {
    var height = $(window).scrollTop();
     /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 70){
    $('.menu').addClass('menu__bg');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('.menu').removeClass('menu__bg');
    }
  });

  

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-design__items');

});