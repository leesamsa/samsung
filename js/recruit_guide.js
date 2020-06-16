$(function(){
    init = false;
    $(".main .top .wrap h2").appear({ force_process: true });
    $(".main .top .wrap h2").on('appear', function() {
    if (!init) {
        $(".main .top .wrap .top-line").animate({width:"40%"})
        $(".main .top .wrap h2").delay(500).animate({paddingTop:0, opacity:1})
        $(".main .top .wrap .text-wrapper").delay(1000).animate({paddingTop:0, opacity:1})
    init = true;
    }
    });//appear
    
    function appear(){
        init2 = false;
        $(".main .bottom .line").appear({ force_process: true });
        $(".main .bottom .line").on('appear', function() {
        if (!init2) {
            $(".main .bottom .line").animate({width:800})
            $(".main .bottom h2").delay(500).animate({opacity:1})
            $(".main .bottom ul li:nth-child(1)").delay(800).animate({opacity:1})
            $(".main .bottom ul li:nth-child(2)").delay(1100).animate({opacity:1})
            $(".main .bottom ul li:nth-child(3)").delay(1400).animate({opacity:1})
            $(".main .bottom ul li:nth-child(4)").delay(1700).animate({opacity:1})
            $(".main .bottom ul li:nth-child(5)").delay(2000).animate({opacity:1})
            $(".main .bottom ul li:nth-child(6)").delay(2300).animate({opacity:1})
        init2 = true;
        }
        });//appear
    }

    function appear800(){
        init2 = false;
        $(".main .bottom .line").appear({ force_process: true });
        $(".main .bottom .line").on('appear', function() {
        if (!init2) {
            $(".main .bottom .line").animate({width:"100%"})
            $(".main .bottom h2").delay(500).animate({opacity:1})
            $(".main .bottom ul li:nth-child(1)").delay(800).animate({opacity:1})
            $(".main .bottom ul li:nth-child(2)").delay(1100).animate({opacity:1})
            $(".main .bottom ul li:nth-child(3)").delay(1400).animate({opacity:1})
            $(".main .bottom ul li:nth-child(4)").delay(1700).animate({opacity:1})
            $(".main .bottom ul li:nth-child(5)").delay(2000).animate({opacity:1})
            $(".main .bottom ul li:nth-child(6)").delay(2300).animate({opacity:1})
        init2 = true;
        }
        });//appear
    }

    ww=$(window).width();
    if (ww>=800){
        appear()
    } else if (ww<800){
        appear800()
    }

    var moBox=$(".main .bottom .mo-box li");
    var ulli=$(".main .bottom ul li")
    moBox.click(function(){
        var indexNum=$(this).index();
        moBox.removeClass("active");
        $(this).addClass("active");
        ulli.hide();
        ulli.eq(indexNum).fadeIn();
    });
})

