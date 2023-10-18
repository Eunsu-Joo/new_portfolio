$(document).ready(function () {
    // 모바일에서는 오버효과를 주지 않기 위해 함수 생성
    function btnHandler() {
        $('.section2-cont').each(function () {
            let btn = $('.section2-cont').find('.btn-more');
            btn.removeClass('btn-more');
            btn.addClass('btn');
        });
    }

    //해더 애니메이션
    const headerItem = $('.dep1 li');
    let idx = headerItem.index();
    $('.dep2').hide();
    headerItem.mouseenter(function () {
        $(this).siblings().find('.dep2').hide();
        $(this).find('.dep2').slideDown();
    });
    $('.lnb').mouseleave(function () {
        $(this).find('.dep2').slideUp();
    })

    // 스토어 슬라이드
    function noticeTextFunc() {
        const storeMove = $('.store-move strong');
        const arrTitle = ['더현대 조말론', '롯데백화점 본점', '롯데 애비뉴엘 조말론', '하남 스타필드 조말론'];
        //바꿔질 텍스트 배열
        let storeN = 0;
        setInterval(function () {
            if (storeN == 4) {
                storeN = 0;
            }
            storeMove.text(arrTitle[storeN]);
            storeN++;
            $('.store-move').css({
                'opacity': 0
            }).animate({
                'opacity': 1
            }, 500)
        }, 2000);
    }

    // 모바일 해더 토글

    $('.m-header-menu').click(function () {
        $('.m-gnb').animate({
            'left': 0
        });
    });
    $('.m-close').click(function () {
        $('.m-gnb').animate({
            'left': '-100%'
        });
    });

    //미디어쿼리

    // 변수
    let windowW = $(window).width();
    let windowH = $(windowW).innerHeight;
    const section = $('section');
    let sectionW = section.width();
    let headerW = $('header').width();

    function resizeHandler() {
        sectionW = windowW;
        headerW = windowW;
        // 섹션, 해더 브라우져 크기에 맞춤
        let fontSize;
        // 폰트사이즈 조절을 위한 변수

        // 리사이즈 미디어 쿼리

        // 데스크탑, 랩탑
        if (windowW >= 1025) {
            fontSize = windowW / 100 * 1.15;
            if (fontSize >= 16) {
                fontSize = 16;
            }
            $('html').css({
                'fontSize': fontSize
            });


            //테블릿
        } else if (windowW >= 768 && windowW < 1024) {
            fontSize = windowW / 80 * 1.3;
            if (fontSize >= 14) {
                fontSize = 14;
            }
            $('html').css({
                'fontSize': fontSize
            });

            // 모바일
        } else if (windowW < 480 && windowW >= 320) {
            fontSize = windowW / 60 * 2;
            $('html').css({
                'fontSize': fontSize
            });
            btnHandler();

        }

        document.body.style.visibility = 'visible';
    }

    noticeTextFunc();
    // 공지 슬라이드

    $(window).on('load', function () {
        resizeHandler();
    });
    $(window).resize(function () {
        resizeHandler();
    });

})
