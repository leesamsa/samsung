$(function(){
    $(document).mousewheel(function(event, delta) {
        if (delta>0)
        {
            $(".header").stop().animate({top:0})
        } else if (delta<0)
        {
            $(".header").stop().animate({top:0})	
        }
    });

    //뷰 영역 opacity 효과
    i=0;
    icnt=$(".main .show .view .img-wrapper").length;
    function opacity(){
        i++;
        if (i==2){
            i=0;
        }
        $(".main .show .view .img-wrapper").fadeOut();
        $(".main .show .view .img-wrapper").eq(i).fadeIn();
    }
    opacityInter=setInterval(function(){opacity()},3300)

    //탭 클릭 시 섹션 변경
    $(".main .tab-bar .menu").click(function(){
        menuIndex=$(this).index();
        console.log(menuIndex)
        $(".main .tab-bar .menu").removeClass("active")
        $(".main .tab-bar .menu").eq(menuIndex).addClass("active")
        $(".main .section").removeClass("show")
        $(".main .section").eq(menuIndex).addClass("show")
    })
})//fx
