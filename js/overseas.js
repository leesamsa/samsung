$(function(){
    //content 마우스오버 효과
    $(".main .content").mouseover(function(){
        $(this).css({background:"#EBEBEB"})
    }).mouseout(function(){
        $(this).css({background:"#fff"})
    })
    //헤더 효과
    $(".banner .icon-wrapper .icon").click(function(){
        $(".header").stop().animate({top:-80})	
    })
    //아이콘 클릭시
    $(".banner .icon-wrapper .l1").click(function(){
        $(".main .content").css({background:"#fff"})
        $(".top").css({background:"#ebebeb"})
    })
    $(".banner .icon-wrapper .l2").click(function(){
        $(".main .content").css({background:"#fff"})
        $(".bottom").css({background:"#ebebeb"})
    })
    $(".banner .icon-wrapper .l3").click(function(){
        $(".main .content").css({background:"#fff"})
        $(".asia").css({background:"#ebebeb"})
    })
    $(".banner .icon-wrapper .l4").click(function(){
        $(".main .content").css({background:"#fff"})
        $(".us").css({background:"#ebebeb"})
    })
    $(".banner .icon-wrapper .l5").click(function(){
        $(".main .content").css({background:"#fff"})
        $(".eu").css({background:"#ebebeb"})
    })
})