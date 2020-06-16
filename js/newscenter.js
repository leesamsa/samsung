$(function(){
    //날짜표시
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1
    var day = date.getDate();
    if(month < 10){
        month = "0"+month;
    }
    if(day < 10){
        day = "0"+day;
    }
    var today = year+"."+month+"."+day;  
    $(".date").text(today)

    //닫으면 이전 페이지로
    function back(){
        window.history.back();
    }
    $(".close").click(function(){
        back()
    })
})//fx


$(window).load(function(){
    $('#grid').masonry({
        // options
        itemSelector: '.grid-item'
      });
})