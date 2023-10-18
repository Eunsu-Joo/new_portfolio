$(function () {
    const header = $('header');
    let scrollFix = 0;
    // 스크롤 탑 반환
    scrollFix = $(document).scrollTop();
    //스크롤 시 해더 고정되는 함수 호출
    fixHeader();

    //윈도우창 조절시 이벤트
    $(window).on('scroll resize', function () {
        scrollFix = $(document).scrollTop();
        fixHeader();
    });

    //고정함수
    function fixHeader() {
        //스크롤 150보다 클 경우
        if (scrollFix > 150) {
            header.addClass('on');
        } else {
            header.removeClass('on');
        }
    };
    // 스크롤 클릭했을 때 scrollTop위치 이동
    $('.scroll').click(function () {
        let scrollTop = $('#scroll').offset().top;
        $('html,body').animate({
            scrollTop: scrollTop
        }, 300);
    });
    // 비디오 클릭 시 재생 컨트롤

    $('.mask').click(function () {
        $('.videoBox').addClass('active');
        $('.videoBox iframe').attr('src','https://www.youtube.com/embed/_iOVHaDxXgM?autoplay=1');
    });
});
// 스플리팅 글자 애니메이션
$(function () {
    Splitting();
});

//visual slide 슬렉
$(function () {
    $('.visual .slide').slick({
        arrows: true,
        dots: true,
        autoplay: true, //자동재생
        fade: true, //페이드인
        autoplaySpeed: 7000, //오토플레이속도
        pauseOnHover: false, //마우스오버시 멈춤
        pauseOnFocus: false
    });
    // 슬릭 arrow텍스트 바꾸기
    $('.visual .slick-prev').text('prev');
    //contents slide
    $('.slide2').slick({
        arrows: false,
        dots: true,
        autoplay: true, //자동재생
        infinite: true,
        fade: false, //페이드인
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 5000, //오토플레이속도
        pauseOnHover: true, //마우스오버시 멈춤
        pauseOnFocus: true
    });
    $('.slide2 #slick-slide-control10').html('<strong class="en">01</strong> 박재범 <span class="en"> Jay Park </span>');
    $('.slide2 #slick-slide-control11').html('<strong class="en">02</strong> 로꼬 <span class="en"> Loco </span>');
    $('.slide2 #slick-slide-control12').html('<strong class="en">03</strong> 우원재 <span class="en"> Woo Won Jae </span>');
    $('.slide2 #slick-slide-control13').html('<strong class="en">04</strong> 후디 <span class="en"> Hoody </span>');
});
// scrolla 
$(function () {
    $('.animate').scrolla({
        mobile: true, // 모바일 활성화
        once: false, //한번만 할건지 , loop로 할건지
        animateCssVersion: 4 // used animate.css version (3 or 4)
    });
});
