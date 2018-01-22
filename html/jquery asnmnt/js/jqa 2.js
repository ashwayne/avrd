//console.log("hello");

$(document).ready(function(){
    var imgnum=1;
    var T;
    var gal = $(".image");
    var minscroll = $(gal[0]).offset().left;
    minscroll = Math.round(minscroll);
    var scroll = minscroll;
    var width = 0;
    for(var y = 0; y < gal.length - 1;y++){
        width+=$(gal[y]).width();
    }
    width = Math.round(width);
    galwidth = $(".gallery").width();
    galwidth = (galwidth * 4) / 5;
    galwidth = Math.round(galwidth);
    console.log(galwidth);
    console.log("scroll " + scroll)
    $(".image").on("click",function(){
        $("#bg").attr("class","bg");
        $("#slide").attr("class","slide");
        $(".left, .right").hide();
        var a = $(this).attr("src");
        $(".slideimage img").attr("src", a);
    });

    $(".slideimage, .iright").on("click",function(){
        event.stopPropagation();
        var image = 0;
        for(var i = 0; i < gal.length;i++){
            if($(gal[i]).attr("src") == $(".slideimage img").attr("src")){
                image = i;
            }
        }
        if(image < gal.length){
            T = $(gal[image+1]).attr("src");
        }
        $(".slideimage img").attr("src", T);
    });

    $(".ileft").on("click",function(){
        event.stopPropagation();
        var image = 0;
        for(var i = 0; i < gal.length;i++){
            if($(gal[i]).attr("src") == $(".slideimage img").attr("src")){
                image = i;
            }
        }
        if(image > 0){
            T = $(gal[image-1]).attr("src");
        }
        $(".slideimage img").attr("src", T);
    });

    $("#slide").on("click",function(){
        $("#slide").attr("class","start");
        $("#bg").attr("class","start");
        $(".left, .right").show();

    });
    $(".gallery").on("scroll",function(){
        scroll = $(".gallery").scrollLeft();
        scroll = Math.round(scroll);
//        console.log(scroll);
//        console.log("up scroll");
//        console.log($(gal[1]).offset().left);
    });

//    var awe = 5
//    var aqwe = $(gal[awe]).offset()
//    console.log(aqwe.left);
    $(".left, .ileft").on("click",function(){
        var clicked = $(this);
        var required = $(".ileft");
        if(scroll > minscroll){
        var check = 0;
        for(var y = 0; y < gal.length - 1;y++){
            var first = $(gal[y]).offset().left;
            var sec = $(gal[y+1]).offset().left;
            if(first < 0 && sec > 0){
                check = first;
                if( clicked.is(required)){
                    console.log("hi")
                }
                console.log(check);
                break;
            }
        }
        check = Math.round(check);
        scroll = scroll + check - 48;
        $(".gallery").animate({ scrollLeft:scroll});
        }
    });

    $(".right, .slideimage, .iright").on("click",function(){
        if(scroll < width - galwidth){
        var check = 0;
        for(var y = 0; y < gal.length - 1;y++){
            var first = $(gal[y]).offset().left;
            var sec = $(gal[y+1]).offset().left;
            sec = Math.round(sec);
            if(first < 0 && sec > 0){
                if(sec == 48){
                    continue;
                }
                check = sec;
                break;
            }
            else if(first > 47 ){
                check = sec;
                break;
            }
        }
        check = Math.round(check);
        scroll = scroll + check - 48;
        $(".gallery").animate({ scrollLeft:scroll});
        }
    });

});