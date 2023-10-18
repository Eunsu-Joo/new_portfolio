
    $(function(){
        const $header = $('header'),
        $naviItems = $('.innerHeader .gnb>ul>li');
        
        console.log($naviItems);
        $('.gnb').mouseover(function(){
            $header.addClass('active');
            $('.innerHeader .logo img').attr('src','./img/logo.png');
    
        });
        $('.gnb').mouseleave(function(){
            $header.removeClass('active');
            $('.innerHeader .logo img').attr('src','./img/logo-2.png');
        })
    
    $naviItems.mouseenter(function(){
        $(this).addClass('active');
        $(this).find('.dep2').css({
            'opacity':1
        }).show();
        
    })
    $naviItems.mouseleave(function(){
        $(this).removeClass('active');
        $(this).find('.dep2').css({
            'opacity':0
        }).hide();
    
    })
        $(window).scroll(function(){
            let currentScroll = $(window).scrollTop();
            if(currentScroll>100){
                $header.addClass('active');
            $('.innerHeader .logo img').attr('src','./img/logo.png');
            } else{
                $header.removeClass('active');
            $('.innerHeader .logo img').attr('src','./img/logo-2.png');
            }
        })
    
       
    })
  