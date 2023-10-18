//메인 슬라이드
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
          type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

 //메인 룸 슬라이드
    var swiper = new Swiper('.swiper-container1', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
    });
// 프로모션 슬라이드
    var swiper2 = new Swiper('.swiper-container-promotion', {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: false,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    $(".swiper-button-prev-promotion").click(function(){
        swiper2.slidePrev();
    });
    $(".swiper-button-next-promotion").click(function(){
        swiper2.slideNext();
    });

    var swiper = new Swiper('.swiper-container-rooms', {
      slidesPerView: 3,
      spaceBetween: 5,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 2.5 },
        768: { slidesPerView: 3, spaceBetween: 5 },
      }
    });


    var swiper = new Swiper('.swiper-container-sub-rooms', {
      pagination: {
        el: '.swiper-pagination-rooms',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-rooms-next',
        prevEl: '.swiper-button-rooms-prev',
      },
    });

    $(".swiper-button-rooms-prev").click(function(){
      swiper2.slidePrev();
  })
  $(".swiper-button-rooms-next").click(function(){
      swiper2.slideNext();
  })

  var swiper = new Swiper('.swiper-container-gallery', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
  });





