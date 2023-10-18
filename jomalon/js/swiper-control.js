// 메인 슬라이드
var swiper = new Swiper('#section1 .swiper-container', {
  slidesPerView: 1,
  loop:true,
  speed:300,
  effect: 'fade',
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3000,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
navigation: {
  prevEl: '.slide-prev',
  nextEl: '.slide-next',
},
pagination: {
  el:'.slide-indicator',
  clickable:true,
}
});
// 상품 슬라이드
var swiper = new Swiper('#section2 .swiper-container', {
    slidesPerView: 3,
    loop:true,
    autoplay:true,
    autoplay:{
      delay:1500,
      disableOnInteraction : false, 
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 3,
    }
  }
});

