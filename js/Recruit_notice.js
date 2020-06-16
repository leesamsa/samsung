$(function(){
    $(".notice dt").click(function(){
      $(this).toggleClass("show");
      if($(this).hasClass("show"))
        $(".notice dt").not(this).removeClass("show");
    })
    $(".faq dt").click(function(){
        $(this).toggleClass("show");
        if($(this).hasClass("show"))
          $(".faq dt").not(this).removeClass("show");
      })
      $(".main .notice dl dt .btn").click(function(){
          alert("지원기간이 아닙니다.")
      })
  })