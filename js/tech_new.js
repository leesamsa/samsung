$(function(){
    $(".btn-wrapper li").click(function(){
        liIndex=$(this).index()
        console.log(liIndex)
        $(".btn-wrapper li").removeClass("active")
        $(this).addClass("active")
        $(".main .bottom .content-wrapper").removeClass("show")
        $(".main .bottom .content-wrapper").eq(liIndex).addClass("show")
        $(".main .bottom .content-wrapper .content").css({opacity:0, marginTop:80})
        $(".main .bottom .content-wrapper").eq(liIndex).find(".content:nth-child(1)").animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper").eq(liIndex).find(".content:nth-child(2)").delay(250).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper").eq(liIndex).find(".content:nth-child(3)").delay(500).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper").eq(liIndex).find(".content:nth-child(4)").delay(750).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper").eq(liIndex).find(".content:nth-child(5)").delay(1000).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper").eq(liIndex).find(".content:nth-child(6)").delay(1250).animate({opacity:1, marginTop:40})
    })
})
$(window).load(function(){
        $(".main .bottom .content-wrapper:first-child .content:nth-child(1)").animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper:first-child .content:nth-child(2)").delay(250).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper:first-child .content:nth-child(3)").delay(500).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper:first-child .content:nth-child(4)").delay(750).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper:first-child .content:nth-child(5)").delay(1000).animate({opacity:1, marginTop:40})
        $(".main .bottom .content-wrapper:first-child .content:nth-child(6)").delay(1250).animate({opacity:1, marginTop:40})
        
})