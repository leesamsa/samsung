$(window).load(function(){
    $(".main .banner .bg").animate({backgroundSize:"90%", marginTop:50})
    
        function wheel(){
            window.onmousewheel = function(e){
                if (e.wheelDelta === -120){
                    $(".main .banner .circle").css({width:1200});
                    $(".main .banner .circle h2").css({opacity:1})
                    $(".main .banner .circle ul").css({opacity:1})
                }
            }
        }

        function wheel1280(){
            window.onmousewheel = function(e){
                if (e.wheelDelta === -120){
                    $(".main .banner .circle").css({width:"100%"});
                    $(".main .banner .circle h2").css({opacity:1})
                    $(".main .banner .circle ul").css({opacity:1})
                }
            }
        }
        function wheel600(){
            $(".main .banner .circle").css({width:"100%"});
            $(".main .banner .circle h2").css({opacity:1})
            $(".main .banner .circle ul").css({opacity:1})
        }
        ww=$(window).width();
        if (ww>=1280) {
            wheel();
        } else if (ww<1280 && ww>=600){
            wheel1280();
        } else if (ww<600) {
            wheel600();
        }
        

        
        
    
    
})