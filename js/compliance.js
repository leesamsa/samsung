$(function(){
    $(".main .intro .btn").mouseover(function(){
        $(".main .intro").css({left:"-100%"})
        $(".main .tip").css({left:0})
        $(".main").css({height:1720})
        $("document, html").animate({scrollTop:280})
        $(".header").stop().animate({top:-80})	
        $(".main .tip .btn h2").show()
    })
    $(".main .tip .btn").mouseover(function(){
        $(".main .tip").css({left:"100%"})
        $(".main .intro").css({left:0})
        $(".main").css({height:2550})
        $("document, html").animate({scrollTop:280})
        $(".header").stop().animate({top:-80})	
        $(".main .tip .btn h2").hide()
    })
})//fx