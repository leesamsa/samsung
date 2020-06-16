$(function(){
		var myFullpage = new fullpage('#fullpage', {
		css3: true,
		navigation: true,
		});

    //헤더 초기화
    $(document).mousewheel(function(event, delta) {
		if (delta>0)
		{
			$(".header").stop().animate({top:0})
		} else if (delta<0)
		{
			$(".header").stop().animate({top:0})	
		}
	});
	ww=$(window).width();
	if (ww<1920){
		$(".main .section .wrap article .text-wrapper p br").remove()
	}
	
})//fx