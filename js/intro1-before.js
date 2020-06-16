$(window).load(function(){
    $(".intro .wrap h2:first-child div").delay(300).animate({top:0})
    $(".intro .wrap h2:last-child div").delay(600).animate({top:0})
    $(".intro .wrap .content-wrapper .content").delay(1000).animate({marginLeft:0, opacity:1},600)
    $(".intro .wrap .content-wrapper .img").delay(1600).animate({marginRight:0, opacity:1},600)
})

$(function(){
    init = false;
    $(".history .top").appear({ force_process: true });
    $(".history .top").on('appear', function() {
    if (!init) {
        $(".history .top h3").fadeIn(600)
        $(".history .top ul.year li:nth-child(4)").css({animationName:"ship-right"})

        $(".history .top ul.year li:nth-child(3) .circle").delay(1250).animate({opacity:1})
        $(".history .top ul.year li:nth-child(3) .circle .cline").delay(1300).animate({height:100})
        $(".history .top ul.year li:nth-child(3) h4").delay(1600).animate({opacity:1})
        $(".history .top ul.year li:nth-child(3) h5").delay(1900).animate({opacity:1})

        $(".history .top ul.year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
        $(".history .top ul.year li:nth-child(2) .circle .cline").delay(3000).animate({height:100})
        $(".history .top ul.year li:nth-child(2) h4").delay(3300).animate({opacity:1})
        $(".history .top ul.year li:nth-child(2) h5").delay(3600).animate({opacity:1})

        $(".history .top ul.year li:nth-child(1) .circle").delay(5050).animate({opacity:1})
        $(".history .top ul.year li:nth-child(1) .circle .cline").delay(5100).animate({height:100})
        $(".history .top ul.year li:nth-child(1) h4").delay(5400).animate({opacity:1})
        $(".history .top ul.year li:nth-child(1) h5").delay(5700).animate({opacity:1})
        
      init = true;
    }
  });//appear

  init2 = false;
  $(".history .mid").appear({ force_process: true });
  $(".history .mid").on('appear', function() {
  if (!init2) {
      $(".history .mid h3").fadeIn(600)
      $(".history .mid ul.year li:nth-child(4)").css({animationName:"ship-left"})

      $(".history .mid ul.year li:nth-child(1) .circle").delay(1250).animate({opacity:1})
      $(".history .mid ul.year li:nth-child(1) .circle .cline").delay(1300).animate({height:100})
      $(".history .mid ul.year li:nth-child(1) h4").delay(1600).animate({opacity:1})
      $(".history .mid ul.year li:nth-child(1) h5").delay(1900).animate({opacity:1})

      $(".history .mid ul.year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
      $(".history .mid ul.year li:nth-child(2) .circle .cline").delay(3000).animate({height:100})
      $(".history .mid ul.year li:nth-child(2) h4").delay(3300).animate({opacity:1})
      $(".history .mid ul.year li:nth-child(2) h5").delay(3600).animate({opacity:1})

      $(".history .mid ul.year li:nth-child(3) .circle").delay(5050).animate({opacity:1})
      $(".history .mid ul.year li:nth-child(3) .circle .cline").delay(5100).animate({height:100})
      $(".history .mid ul.year li:nth-child(3) h4").delay(5400).animate({opacity:1})
      $(".history .mid ul.year li:nth-child(3) h5").delay(5700).animate({opacity:1})
      
    init2 = true;
  }
});//appear

init3 = false;
$(".history .bottom").appear({ force_process: true });
$(".history .bottom").on('appear', function() {
if (!init3) {
    $(".history .bottom h3").fadeIn(600)
    $(".history .bottom ul.year li:nth-child(4)").css({animationName:"ship-right"})

    $(".history .bottom ul.year li:nth-child(3) .circle").delay(1250).animate({opacity:1})
    $(".history .bottom ul.year li:nth-child(3) .circle .cline").delay(1300).animate({height:100})
    $(".history .bottom ul.year li:nth-child(3) h4").delay(1600).animate({opacity:1})
    $(".history .bottom ul.year li:nth-child(3) h5").delay(1900).animate({opacity:1})

    $(".history .bottom ul.year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
    $(".history .bottom ul.year li:nth-child(2) .circle .cline").delay(3000).animate({height:100})
    $(".history .bottom ul.year li:nth-child(2) h4").delay(3300).animate({opacity:1})
    $(".history .bottom ul.year li:nth-child(2) h5").delay(3600).animate({opacity:1})

    $(".history .bottom ul.year li:nth-child(1) .circle").delay(5050).animate({opacity:1})
    $(".history .bottom ul.year li:nth-child(1) .circle .cline").delay(5100).animate({height:100})
    $(".history .bottom ul.year li:nth-child(1) h4").delay(5400).animate({opacity:1})
    $(".history .bottom ul.year li:nth-child(1) h5").delay(5700).animate({opacity:1})
    
  init3 = true;
}
});//appear

init4 = false;
$(".history .final").appear({ force_process: true });
$(".history .final").on('appear', function() {
if (!init4) {
    $(".history .final h3").fadeIn(600)
    $(".history .final ul.year li:nth-child(4)").css({animationName:"ship-left"})

    $(".history .final ul.year li:nth-child(1) .circle").delay(1250).animate({opacity:1})
    $(".history .final ul.year li:nth-child(1) .circle .cline").delay(1300).animate({height:100})
    $(".history .final ul.year li:nth-child(1) h4").delay(1600).animate({opacity:1})
    $(".history .final ul.year li:nth-child(1) h5").delay(1900).animate({opacity:1})

    $(".history .final ul.year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
    $(".history .final ul.year li:nth-child(2) .circle .cline").delay(3000).animate({height:100})
    $(".history .final ul.year li:nth-child(2) h4").delay(3300).animate({opacity:1})
    $(".history .final ul.year li:nth-child(2) h5").delay(3600).animate({opacity:1})

    $(".history .final ul.year li:nth-child(3) .circle").delay(5050).animate({opacity:1})
    $(".history .final ul.year li:nth-child(3) .circle .cline").delay(5100).animate({height:100})
    $(".history .final ul.year li:nth-child(3) h4").delay(5400).animate({opacity:1})
    $(".history .final ul.year li:nth-child(3) h5").delay(5700).animate({opacity:1})
    
  init4 = true;
}
});//appear
})//fx
