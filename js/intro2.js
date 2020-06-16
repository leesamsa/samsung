$(function(){
    //스크롤 시 배경효과
    $(window).scroll(function(){
        ws=$(window).scrollTop();
        bottoms=$(".top ul li:nth-child(4)").offset().top;
        console.log(ws, bottoms);
        if (ws>bottoms){
            $(".main").css({background:"#000"})
            $(".main .bottom").css({opacity:1})
            $(".main .top").css({opacity:0})
        } else {
            $(".main").css({background:"#fff"})
            $(".main .bottom").css({opacity:0})
            $(".main .top").css({opacity:1})
        }
    })

    //스크롤 시 appear 효과
    init1 = false;
    $(".top ul").appear({ force_process: true });
    $(".top ul").on('appear', function() {
        if (init1==false) {
            $(".top ul li:nth-child(1)").delay(200).animate({opacity:1})
            $(".top ul li:nth-child(2)").delay(500).animate({opacity:1})
            $(".top ul li:nth-child(3)").delay(800).animate({opacity:1})
            $(".top ul li:nth-child(4)").delay(1100).animate({opacity:1})
            $(".top ul li:nth-child(5)").delay(1400).animate({opacity:1})
            init1 = true;
        } 
    });//appear

    init2 = false;
    $(".bottom ul li:nth-child(1)").appear({ force_process: true });
    $(".bottom ul li:nth-child(1)").on('appear', function() {
        if (!init2) {
            $(".bottom ul li:nth-child(1)").animate({opacity:1})
            $(".bottom ul li:nth-child(2)").delay(500).animate({opacity:1})
        init2 = true;
        }
    });//appear

    init3 = false;
    $(".bottom ul li:nth-child(3)").appear({ force_process: true });
    $(".bottom ul li:nth-child(3)").on('appear', function() {
        if (!init3) {
            $(".bottom ul li:nth-child(3)").animate({opacity:1})
            $(".bottom ul li:nth-child(4)").delay(500).animate({opacity:1})
        init3 = true;
        }
    });//appear

    init4 = false;
    $(".bottom ul li:nth-child(5)").appear({ force_process: true });
    $(".bottom ul li:nth-child(5").on('appear', function() {
        if (!init4) {
            $(".bottom ul li:nth-child(5)").animate({opacity:1})
            $(".bottom ul li:nth-child(6)").delay(500).animate({opacity:1})
        init4 = true;
        }
    });//appear
})


