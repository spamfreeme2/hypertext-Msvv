// Time
$( document ).ready(function() {
    $("center-Img").hide()
});
setInterval(function(){
    var hours=new Date().getHours()
    if (hours>=12){
        var ampm='PM'
    }
    else{
        var ampm= 'AM'
    }
    hours=hours%12
    if (hours==0){hours=12}
    var minutes= new Date().getMinutes()
    if (minutes<10)
        {minutes=''+'0'+minutes}
    var time= 'Time: '+hours+':'+ minutes+ ' ' + ampm
    document.getElementById('time').innerHTML=time},1000)
    
    
    $( ".image-hover" ).hover(
      function() {
        $(".center-Img").show() ;
      }, function() {
        $(".center-Img").hide();
      }
    );