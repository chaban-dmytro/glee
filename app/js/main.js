$ (function() {

  $('.content-filter__btn').on('click', function () {
    $('.content-filter__btn').removeClass('content-filter__btn--active');
    $(this).addClass('content-filter__btn--active');
  });

  $('.button-list').on('click', function() {
    $('.products__items').addClass('products__items--list');
  });

  $('.button-grid').on('click', function() {
    $('.products__items').removeClass('products__items--list');
  });
  
  $('.shop__filters-btn').on('click', function() {
    $('.shop__filters').toggleClass('shop__filters--active');
  });


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: "0.01",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $(".star").rateYo({
    // rating: 3.6,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "6px"
    // starSvg: <svg height="511pt" viewBox="0 -10 511.98685 511" width="511pt" xmlns="http://www.w3.org/2000/svg">
    //   <path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"></path>
    //   </svg>
  });

  $(".star--xl").rateYo({
    // rating: 3.6,
    starWidth: "22px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "6px"
  });


  $('.menu__btn-nav').on('click', function(){
    $('.user-nav').toggleClass('user-nav--active'),
    $('.menu__btn-nav').toggleClass('menu__btn-nav--active');
  })

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


  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card)=>{
    card.querySelector('button').addEventListener('click', () => {
      console.log(card);
      // Если нужна не сама карточка, а что-то вложенное в нее, то пишем
      // card.querySelector('.нужный класс').classList и тд
      card.querySelector('.product-card__link-box').classList.toggle('product-card__link-box--active');
    });
  });

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-design__items');


 

});




