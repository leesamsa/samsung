$(function(){
    //내비게이션 효과
    $(".header .wrap .nav ul li, .sub-bg").not("li.news").mouseover(function(){
        $(".sub-bg").stop().slideDown(300);
    }).mouseout(function(){
        $(".sub-bg").stop().slideUp(300);
    })
    $(".header .wrap .nav ul li").stop().mouseover(function(){
        indexNum=$(this).index();
        $(".header .sub-bg .sub").hide()
        $(".header .sub-bg .sub").eq(indexNum).show()
        $(".header .wrap .nav ul li a span").css({width:"0", marginLeft:"0"})
        $(">a>span", this).css({width:"100%", marginLeft:"-50%"})
    }).mouseout(function(){
        $(".header .wrap .nav ul li a span").css({width:"0", marginLeft:"0"})
    })
    
    //사이트맵 효과
    $(".sitemap-btn").click(function(){
        $(".sitemap").animate({top:0})
        $(".sitemap .wrap .article").css({animationName:"articleMove"})
    })
    $(".close-btn").click(function(){
        $(".sitemap").css({top:"100vh"})
        $(".sitemap .wrap .article").css({animationName:""})
    })
    //헤더 효과
    $(document).mousewheel(function(event, delta) {
		if (delta>0)
		{
			$(".header").css({top:0})
		} else if (delta<0)
		{
			$(".header").css({top:-80})	
		}
    });

    //모바일 햄버거 클릭시
    sw=0;
    span=$(".mo-header .close span");
    $(".mo-header .close").click(function(){
        if (sw==0){
            $(".box-wrapper").css({marginLeft:0})
            span.eq(0).css({animationName:"span1"})
            span.eq(1).css({animationName:"span2"})
            span.eq(2).css({animationName:"span3"})
            sw=1;
        } else if (sw==1){
            $(".box-wrapper").css({marginLeft:"100%"})
            span.eq(0).css({animationName:"span1r"})
            span.eq(1).css({animationName:"span2r"})
            span.eq(2).css({animationName:"span3r"})
            sw=0;
        }
    })
    var this_scroll = 0;
    $(document).scroll(function(e) {
        if ($(document).scrollTop() > this_scroll) {
            $(".mo-header").css({top:-60})	    
        } else if ($(document).scrollTop() < this_scroll){
            $(".mo-header").css({top:0})
        }    
        this_scroll = $(document).scrollTop()        
    });
})//fx