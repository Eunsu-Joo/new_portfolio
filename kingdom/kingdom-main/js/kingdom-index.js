

// 제이쿼리
$(function () {

    // 1) 해더 부분 함수, 이벤트
    /**
 * 네비게이션 li 불들어오는 함수
 * 해당 li클릭했을 때, 형제들에게 클래스를 제거하고 해당 li에게 클래스 부여
 * @param {*네비게이션 li link} liObj 
 */

    function activeLi(liObj) {
        $(liObj).siblings().removeClass('active');
        $(liObj).addClass('active');
    }

    //마우스 스크롤 되었을 때 해당 섹션에 스크롤이 위치할 때, li에 클래스 넣기
    $(window).on('scroll', function (e) {
        // mousewheel DOMMouseScroll: 사실, 이 두 이벤트는 브라우저 호환성이 떨어짐.
        //그래서 바인딩하기에 썩 좋은 이벤트는 아님

        const liList = $('ul.navi li');
        if (window.scrollY < 722) {
            activeLi(liList[0]);
        }
        else if (window.scrollY < 1444) {
            activeLi(liList[1]);
        }
        // 여기 다시해야함.
        else if (window.scrollY < 2387 && window.screenY<1444){
            activeLi(liList[2]);
            //타이틀 애니메이션
            $('#section3 h2').addClass('active');
        }
        else if(window.scrollY < 2972) {
            activeLi(liList[3]);

        } else {
            activeLi(liList[4]);
        }
    });

    //네비게이션 li클릭 시 해당 섹션으로 이동하는 함수
    const $naviLink = $('.navi li'),
        $contents = $('section');
    $($naviLink).click(function (e) {
        e.preventDefault();
        let idx = $(this).index();
        let section = $contents.eq(idx);
        let sectionDistance = section.offset().top;
        $('html,body').stop().animate({
            'scrollTop': sectionDistance
        }, 1000);
    });

    // 2. 비디오 제어
    $("#section2 .video-section").hide();
    const video = $(".modal-video").get(0);
    const muteVideo = $(".modal-video");
    const btn = $(".play-control i");

    //비디오 클릭 시 동영상 보여지기 - 
    $(".play").on("click", function () {
        $("#section2 .video-hidden").hide();
        $("#section2 .video-section").show();
        video.play();
        //끝났을 때 배경사진 다시 보여지기
        $(".modal-video").bind("ended", function () {
            $("#section2 .video-section").hide();
            $("#section2 .video-hidden").show();
        })
    })
    // btn.get(0)을 가져오는 이유는? 
    //첫번째 버튼 플레이 - 일시정지 버튼
    $(btn.get(0)).on("click", function () {
        if (video.paused) {
            video.play();
            $(this).removeClass('fa-pause-circle');
            $(this).addClass('fa-play-circle');

        } else {
            video.pause();
            $(this).removeClass('fa-play-circle');
            $(this).addClass('fa-pause-circle');
        }
    })
    //두번쨰 버튼 - 음소거 버튼
    $(btn.get(1)).click(function () {
        console.log(video);
        if ($(video).prop('muted')) {
            $(video).prop('muted', false);
            $(this).removeClass('fa-volume-mute');
            $(this).addClass('fa-volume-off');
        } else {
            $(video).prop('muted', true);
            $(this).removeClass('fa-volume-off');
            $(this).addClass('fa-volume-mute');
        }
    });
    //세번째 버튼  - 리플레이 버튼
    $(btn.get(2)).on("click", function () {
        video.currentTime = 0;
        video.play();
    })
    // },19000);

    //3.섹션5 갤러리 제어

    const galleryBox = $('.gallery-box-move');
    const galleryHide = $('.section5-container');
    const galleryB = $('.gallery-box');
    const section5 = $('#section5');
    let n = galleryB.index();
    //갤러리의 인덱스가 2 일때 함수 실행 그렇지 않으면 리턴
    galleryB.click(function () {
        let i = $(this).index();
        console.log(i);
    })
    //두번째 갤러리 클릭했을 때, 모달 이미지 창 띄우기
    galleryB.eq(2).click(function () {
        let n = 1;
        galleryHide.hide();
        galleryBox.show();
        galleryBox.find('img').attr('src', './images/gallery/cast1.jpg');
        $('.gallery-box-move i.fa-chevron-right').click(function () {
            if (n == 9) {
                n = 1;
            } else {
                n++;
            }
            console.log(n);
            $('.gallery-box-move img').attr('src', './images/gallery/cast' + n + '.jpg');
        });
        $('.gallery-box-move i.fa-chevron-left').click(function () {
            if (n == 1) {
                n = 9;
            } else {
                n--;
            }
            $('.gallery-box-move img').attr('src', './images/gallery/cast' + n + '.jpg');
        });
        $('.gallery-box-move i.fa-times').click(function () {
            galleryBox.hide();
            galleryHide.show();
        });
    });

    // 4. 풀페이지 마우스 휠 함수 
    function fullpage() {
        const elm = $('section');
        $(elm).each(function (index) {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                // 마우스휠, 파이어폭스 돔스크롤
                e.preventDefault();
                // 이벤트 막기
                let delta = 0;
                if (!event) event = window.event;
                // 이벤트 없으면 윈도우 이벤트
                if (event.wheelDelta) {
                    // 마우스휠 값이 있으면, 스크롤하면
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                }
                else if (event.detail)
                    delta = -event.detail / 3;
                //=---------------- 각 브러우저 마다 마우스 휠 조정--------------------------
                let moveTop = $(window).scrollTop();
                //윈도우 스크롤 탑 값
                let elmSelecter = $(elm).eq(index);
                //섹션의 인덱스
                console.log(delta);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        //마지막이 아니라면 윈도우의 scrollTop은 다음인덱스의 offset탑
                        try {
                            moveTop = $(elmSelecter).next().offset().top;
                        } catch (e) { }
                    }
                    // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        //처음이 아니라면 윈도우의 스크롤탑은 이전인덱스의 오프셋탑
                        try {
                            moveTop = $(elmSelecter).prev().offset().top;
                        } catch (e) { }
                    }
                }
                // 화면 이동 0.8초(800) , 하던일 멈추고 html의 스크롤탑을 섹션 탑으로 만들기.
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800
                });
            });
        });
    }
    fullpage();
});
