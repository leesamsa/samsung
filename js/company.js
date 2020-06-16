$(function(){
    $(".article").mouseover(function(){
        $(">.article-bg", this).css({background:"rgba(0,0,0,0.1)"})
    }).mouseout(function(){
        $(">.article-bg", this).css({background:"rgba(0,0,0,0.4)"})
    })

    $(document).mousewheel(function(event, delta) {
		if (delta>0)
		{
			$(".header").stop().animate({top:0})
		} else if (delta<0)
		{
			$(".header").stop().animate({top:0})	
		}
	});//mouse wheel
})//fx

$(window).load(function(){
    $(".article1").fadeIn()
    $(".article2").delay(300).fadeIn()
    $(".article3").delay(600).fadeIn()
    $(".article4").delay(900).fadeIn()
    $(".square .bg1").delay(1200).fadeIn()
    $(".square .bg2").delay(1500).fadeIn()
    $(".square .text-wrapper").delay(1800).fadeIn()
})