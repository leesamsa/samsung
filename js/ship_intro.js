$(window).load(function(){
    $(".main .banner .banner-bg .line").css({width:"55%"})
    $(".main .banner .banner-bg .square-wrapper .square1").delay(500).animate({opacity:1})
    $(".main .banner .banner-bg .square-wrapper .square2").delay(750).animate({opacity:1})
    $(".main .banner .banner-bg .square-wrapper h1").delay(1000).animate({opacity:1})
    $(".main .banner .banner-bg p").delay(1250).animate({opacity:1})
})//로딩 애니메이션

$(function(){
    //스크롤 시 overview 영역 fix
    ww=$(window).width();
    if (ww>=1024){
        $(window).scroll(function(){
            ws=$(window).scrollTop();
            wh=$(window).height();
            if (ws>wh){
                $(".main .overview").css({position:"fixed", marginTop:0})
            } else if (ws<wh) {
                $(".main .overview").css({position:"static", marginTop:"100vh"})
            }
        })
    } else if (ww<1024){


       
    }
    

    //center-banner 애니메이션
    init= false;
    $(".main  .center-banner").appear({ force_process: true });
    $(".main  .center-banner").on('appear', function() {
        if (!init) {
            $(".main  .center-banner .line").css({width:"55%"})
            $(".main  .center-banner p").delay(500).animate({opacity:1},500)
        init = true;
        }
    });
})//fx

