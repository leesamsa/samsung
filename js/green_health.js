$(window).load(function(){
    ww=$(window).width();
    if (ww>600) {
        $(".banner").delay(100).animate({
            marginTop: 100,
            backgroundSize: "90%"
        },500)
        $(".banner h1").delay(700).animate({opacity:1},500)
        $(".banner .line").delay(1200).animate({height:120},500)
        $(".banner h2").delay(1700).animate({opacity:1},500)
        $(".banner p").delay(2200).animate({opacity:1},500)
    } else if (ww<=600) {
        $(".banner h1").animate({opacity:1},500)
        $(".banner .line").delay(500).animate({height:60},500)
        $(".banner h2").delay(1000).animate({opacity:1},500)
        $(".banner p").delay(1500).animate({opacity:1},500)
    }
    
})

$(function(){
    ww=$(window).width();
    if (ww>1280){

        $(window).scroll(function(){
            ws=$(window).scrollTop()
            console.log(ws)
            if (ws<1500) {
                $(".rule .wrap").css({position:"relative"})   
            }
            if (ws>=1500){
                $(".rule .wrap").css({position:"fixed"})
                $(".rule .wrap .blue").css({left:-1200})
                $(".rule .wrap .red").css({left:0})
            } else if (ws<1500){
                $(".rule .wrap .blue").css({left:0})
                $(".rule .wrap .red").css({left:1200})
            }
            if (ws>=1800){
                $(".rule .wrap").css({position:"relative"})
                $(".circle").css({marginTop:100})
            } else if (ws<1800) {
                $(".circle").css({marginTop:400})
            }
        })

    } else {

    }
    
	if (ww<=375){
		$(".banner p br").remove()
	}
})
