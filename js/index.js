$(window).load(function(){
    $(".banner .text-wrapper h2").delay(400).animate({top:0}, 600)
    $(".banner .text-wrapper h1").delay(1200).animate({bottom:0},600)
    $(".banner .icon-wrapper li:nth-child(1)").delay(1800).fadeIn(600)
    $(".banner .icon-wrapper li:nth-child(2)").delay(2200).fadeIn(600)
    $(".banner .icon-wrapper li:nth-child(3)").delay(2600).fadeIn(600)
})