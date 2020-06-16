$(window).load(function(){
    function line1920(){
        $(".main .top .wrap .title .line").css({height:122});
    }
    function line960(){
        $(".main .top .wrap .title .line").css({height:100});
    }
    function line800(){
        $(".main .top .wrap .title .line").css({width:"90%"});
    }
    ww=$(window).width();
    if(ww>960){
        line1920();
    } else if (ww<=960 && ww>800){
        line960();
    } else if (ww<=800){
        line800();
    }
    
    $(".main .top .wrap .title .h1-wrapper h1").delay(400).animate({marginLeft:0},500)
    $(".main .top .wrap .title .p-wrapper p").delay(900).animate({marginLeft:0},500)
    $(".main .top .wrap .content-wrapper .img-wrapper").delay(1400).animate({opacity:1},500)
    $(".main .top .wrap .content-wrapper .text").delay(1900).animate({opacity:1},500)
})
$(function(){
    $(".main .bottom .wrap .content-wrapper").mouseover(function(){
        $(">.text-wrapper", this).css({top:0})
    }).mouseout(function(){
        $(">.text-wrapper", this).css({top:"100%"})
    })

})//fx