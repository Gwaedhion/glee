$(function () {



  $('.product-overview__amount').styler({
    
  });
  
  $('.product-overview__thumb').slick({
    asNavFor: '.product-overview__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-overview__big').slick({
    asNavFor: '.product-overview__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.shop-pagination__page-num').on('click', function () {
    $('.shop-pagination__page-num').removeClass('shop-pagination__page-num--active');
    $(this).addClass('shop-pagination__page-num--active');
  });
  
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  
  $('.button-list').on('click', function () {
    $('.shop-content__products').addClass('shop-content__products--list');
  });
  
  $('.button-grid').on('click', function () {
    $('.shop-content__products').removeClass('shop-content__products--list');
  });
  
  
  $('.slider-content').slick({
    dots: true,
    arrows: false,
    autopay: true,
    fade: true,
    speed: 500,
  });
  
  $('.design-video__item').fancybox({
    
  });
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: "10",
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    }
  });
  
  $('.rating').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    halfStar: true,
    readOnly: true,
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault ();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });
});

