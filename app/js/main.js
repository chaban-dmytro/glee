$ (function() {

  $('.slider-homepage__inner').slick({
    dots: true,
    arrows: false,
  })

  $('.slider-partners__items').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
  })

  

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-design__items');

});