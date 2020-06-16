$(window).load(function(){
    $(".intro .wrap h2:first-child div").delay(300).animate({top:0})
    $(".intro .wrap h2:last-child div").delay(600).animate({top:0})
    $(".intro .wrap .content-wrapper .content").delay(1000).animate({marginLeft:0, opacity:1},600)
    $(".intro .wrap .content-wrapper .img").delay(1600).animate({marginRight:0, opacity:1},600)
})

$(function(){
    init = false;
    $(".history .article1").appear({ force_process: true });
    $(".history .article1").on('appear', function() {
    if (!init) {
        $(".history .article1 h3").fadeIn(600)
        $(".history .article1 .ship").css({animationName:"ship-right"})

        $(".history .article1 .year li:nth-child(3) .circle").delay(1250).animate({opacity:1})
        $(".history .article1 .year li:nth-child(3) .cline").delay(1300).animate({opacity:1})
        $(".history .article1 .year li:nth-child(3) h4").delay(1600).animate({opacity:1})
        $(".history .article1 .year li:nth-child(3) h5").delay(1900).animate({opacity:1})

        $(".history .article1 .year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
        $(".history .article1 .year li:nth-child(2) .cline").delay(3000).animate({opacity:1})
        $(".history .article1 .year li:nth-child(2) h4").delay(3300).animate({opacity:1})
        $(".history .article1 .year li:nth-child(2) h5").delay(3600).animate({opacity:1})

        $(".history .article1 .year li:nth-child(1) .circle").delay(5050).animate({opacity:1})
        $(".history .article1 .year li:nth-child(1) .cline").delay(5100).animate({opacity:1})
        $(".history .article1 .year li:nth-child(1) h4").delay(5400).animate({opacity:1})
        $(".history .article1 .year li:nth-child(1) h5").delay(5700).animate({opacity:1})
        
      init = true;
    }
  });//appear

  init2 = false;
  $(".history .article2").appear({ force_process: true });
  $(".history .article2").on('appear', function() {
  if (!init2) {
    $(".history .article2 h3").fadeIn(600)
    $(".history .article2 .ship").css({animationName:"ship-left"})

    $(".history .article2 .year li:nth-child(1) .circle").delay(1250).animate({opacity:1})
    $(".history .article2 .year li:nth-child(1) .cline").delay(1300).animate({opacity:1})
    $(".history .article2 .year li:nth-child(1) h4").delay(1600).animate({opacity:1})
    $(".history .article2 .year li:nth-child(1) h5").delay(1900).animate({opacity:1})

    $(".history .article2 .year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
    $(".history .article2 .year li:nth-child(2) .cline").delay(3000).animate({opacity:1})
    $(".history .article2 .year li:nth-child(2) h4").delay(3300).animate({opacity:1})
    $(".history .article2 .year li:nth-child(2) h5").delay(3600).animate({opacity:1})

    $(".history .article2 .year li:nth-child(3) .circle").delay(5050).animate({opacity:1})
    $(".history .article2 .year li:nth-child(3) .cline").delay(5100).animate({opacity:1})
    $(".history .article2 .year li:nth-child(3) h4").delay(5400).animate({opacity:1})
    $(".history .article2 .year li:nth-child(3) h5").delay(5700).animate({opacity:1})
      
    init2 = true;
  }
});//appear

init3 = false;
$(".history .article3").appear({ force_process: true });
$(".history .article3").on('appear', function() {
if (!init3) {
  $(".history .article3 h3").fadeIn(600)
  $(".history .article3 .ship").css({animationName:"ship-right"})

  $(".history .article3 .year li:nth-child(3) .circle").delay(1250).animate({opacity:1})
  $(".history .article3 .year li:nth-child(3) .cline").delay(1300).animate({opacity:1})
  $(".history .article3 .year li:nth-child(3) h4").delay(1600).animate({opacity:1})
  $(".history .article3 .year li:nth-child(3) h5").delay(1900).animate({opacity:1})

  $(".history .article3 .year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
  $(".history .article3 .year li:nth-child(2) .cline").delay(3000).animate({opacity:1})
  $(".history .article3 .year li:nth-child(2) h4").delay(3300).animate({opacity:1})
  $(".history .article3 .year li:nth-child(2) h5").delay(3600).animate({opacity:1})

  $(".history .article3 .year li:nth-child(1) .circle").delay(5050).animate({opacity:1})
  $(".history .article3 .year li:nth-child(1) .cline").delay(5100).animate({opacity:1})
  $(".history .article3 .year li:nth-child(1) h4").delay(5400).animate({opacity:1})
  $(".history .article3 .year li:nth-child(1) h5").delay(5700).animate({opacity:1})
    
  init3 = true;
}
});//appear

init4 = false;
$(".history .article4").appear({ force_process: true });
$(".history .article4").on('appear', function() {
if (!init4) {
  $(".history .article4 h3").fadeIn(600)
  $(".history .article4 .ship").css({animationName:"ship-left"})

  $(".history .article4 .year li:nth-child(1) .circle").delay(1250).animate({opacity:1})
  $(".history .article4 .year li:nth-child(1) .cline").delay(1300).animate({opacity:1})
  $(".history .article4 .year li:nth-child(1) h4").delay(1600).animate({opacity:1})
  $(".history .article4 .year li:nth-child(1) h5").delay(1900).animate({opacity:1})

  $(".history .article4 .year li:nth-child(2) .circle").delay(2950).animate({opacity:1})
  $(".history .article4 .year li:nth-child(2) .cline").delay(3000).animate({opacity:1})
  $(".history .article4 .year li:nth-child(2) h4").delay(3300).animate({opacity:1})
  $(".history .article4 .year li:nth-child(2) h5").delay(3600).animate({opacity:1})

  $(".history .article4 .year li:nth-child(3) .circle").delay(5050).animate({opacity:1})
  $(".history .article4 .year li:nth-child(3) .cline").delay(5100).animate({opacity:1})
  $(".history .article4 .year li:nth-child(3) h4").delay(5400).animate({opacity:1})
  $(".history .article4 .year li:nth-child(3) h5").delay(5700).animate({opacity:1})
  init4 = true;
}
});//appear
})//fx
