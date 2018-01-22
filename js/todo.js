
$(".butn").on('click',function(){
    $("input").fadeToggle(1000);
});
$("ul").on("click","li",function(){
    if($(this).css("color")=== "rgb(128, 128, 128)"){
    $(this).css({color:"#666",textDecoration:"none"});
    }
    else{
        $(this).css({color:"gray",textDecoration:"line-through"});
    }
});
$("ul").on("click","span",function(e){
    $(this).parent().fadeOut();
    e.stopPropagation();
    $(this).parent().remove();
});
$("input").keypress(function(e){
    if(e.keyCode===13){
    var n = "<li><span>  <i class='fa fa-trash-o' aria-hidden='true'></i>  </span> " + $("input").val() + "</li>";
    $("input").val("");
    $("ul").append(n);
    }
});
