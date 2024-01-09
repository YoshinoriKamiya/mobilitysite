// 
$(document).ready(function() {
    $('.hum-btn').click(function() {
      $(this).toggleClass('show');
      $('#nav').toggleClass('show');
      $('#backview').toggleClass('show');
    });
  });

// スライダー
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopedSlides: 1,
    // slidesPerView: "auto",
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


$(function(){
  $(window).scroll(function (){
      $('.js-fade').each(function(index){
          var pos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > pos - windowHeight + 100){
              $(this).delay(index * 80).queue(function(next){
                  $(this).addClass('scroll');
                  next();
              });
          }
      });
  });
});

  // ページトップへ戻る
  const pagetop_btn = document.querySelector(".top-page");
  // .top-pageをクリックしたら
  pagetop_btn.addEventListener("click", scroll_top);
  // ページ上部へスムーズに移動
  function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
  