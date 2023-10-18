$(function () {
  // navigation
  const naviList = $('.navi-list li');
  $('.navi-depth2 ').hide();
  naviList.hover(function () {
    $(this).addClass('active');
    $(this).find('.navi-depth2').fadeIn(100);
  }, function () {
    $(this).removeClass('active');
    $(this).find('.navi-depth2').fadeOut(100);
  })
  $('.navi-depth2').hover(function () {
    $(this).addClass('active');
  }, function () {
    $(this).removeClass('active');
  })



  var changeNum = document.querySelector('.change-num');
  console.log(changeNum);

  var slideNum = document.querySelectorAll('#section1 div.swiper-slide');
  var count = 1;
  $('.swiper-button-next').click(function () {
    if (count < 4) {
      count++;
    }
    else {
      count = 4;
    }
    changeNum.innerHTML = count;
  })
  $('.swiper-button-prev').click(function () {
    if (count > 1) {
      count--;
    }
    else {
      count = 1;
    }
    changeNum.innerHTML = count;
  })

  var reservationCount = $('.table-count');

  var countTable = 1;
  $('.fa-plus').click(function () {
    if (countTable < 9) {
      countTable++
    } else {
      countTable = 9;
    }
    $(this).siblings('.table-count').html(countTable);
  })
  $('.fa-minus').click(function () {
    if (countTable > 1) {
      countTable--;
    } else {
      countTable = 1;
    }
    $(this).siblings('.table-count').html(countTable);

  })
  $(".swiper-button-prev-promotion").click(function () {
    swiper2.slidePrev();
  })
  $(".swiper-button-next-promotion").click(function () {
    swiper2.slideNext();
  })
})
