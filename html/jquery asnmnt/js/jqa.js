//console.log("hello");
var tag = document.getElementById('iframe-demo');
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var vimeoid = document.querySelector("#vplay1");
var vimeoid2 = document.querySelector("#vplay2");
var player1 = new Vimeo.Player(vimeoid);
var player2 = new Vimeo.Player(vimeoid2);
var htmlv = document.getElementsByClassName('htmlv');
var ytlength = document.getElementsByClassName('yt');
ytlength = ytlength.length;
var vimlength = document.getElementsByClassName('vim');
vimlength = vimlength.length;
var yt;
var yt2;
for(var i = 1; i < vimlength + 1;i++){
    var name = "player" + i ;
    eval(name).on('play',function(event){
        statechange("vim");
        console.log(this.element.id);
        btnremoval(this.element.id);
    });
    eval(name).on('pause',function(event){
        btnadd(this.element.id);
    });
}
function onYouTubeIframeAPIReady() {
    yt1 = new YT.Player("yplay1", {
        events: {
          'onStateChange': onPlayerStateChange
        }
    });
    yt2 = new YT.Player("yplay2", {
        events: {
          'onStateChange': onPlayerStateChange
        }
    });
  }
for(var i = 0; i < htmlv.length; i++){
htmlv[i].addEventListener("play",function(){
    statechange("html", this);
});
}
function onPlayerStateChange(event){
    if(event.data==1){
        statechange("yt",'',event.target);
        console.log(event.target.a.id);
        btnremoval(event.target.a.id);
    }
    if(event.data==2){
        btnadd(event.target.a.id);
    }
}
function btnremoval(removeit){
    var a  = document.getElementById(removeit);
    a.parentNode.childNodes[3].setAttribute("class","start");
}
function btnadd(removeit){
    var a  = document.getElementById(removeit);
    a.parentNode.childNodes[3].setAttribute("class","fa fa-youtube-play fa-5x play-button");
}
function statechange(type, current, clicked){
    if(type=="yt"){
        for(var i = 1; i < vimlength + 1;i++){
            var name = "player"+ i ;
            eval(name).pause();
        }
        for(var i = 0; i < htmlv.length; i++){
           htmlv[i].pause();
        }
        for(var i = 1; i < ytlength + 1;i++){
        var name = "yt"+ i ;
        if(eval(name) != clicked){
            eval(name).pauseVideo();
        }
        }
    }
    else if(type=="vim"){
        for(var i = 1; i < ytlength + 1;i++){
            var name = "yt"+ i ;
            eval(name).pauseVideo();
        }
        for(var i = 0; i < htmlv.length; i++){
            htmlv[i].pause();
        }
    }
    else if(type=="html"){
        for(var i = 1; i < vimlength + 1;i++){
            var name = "player"+ i ;
            eval(name).pause();
        }
        for(var i = 1; i < ytlength + 1;i++){
            var name = "yt"+ i ;
            eval(name).pauseVideo();
        }
        for(var i = 0; i < htmlv.length; i++){
            console.log("inloop current")
            console.log(current)
            if(htmlv[i] != current){
            htmlv[i].pause();
            console.log("inloop")
            console.log(i)
            }
        }
    }
}
$(document).ready(function(){
    var imgnum=1;
    var gal = $(".dispbig");
    var minscroll = $(gal[0]).offset().left;
    minscroll = Math.round(minscroll);
    var scroll = minscroll;
    var width = 0;
    var playbtn = $(".play-button");
    for(var y = 0; y < gal.length - 1;y++){
        width+=$(gal[y]).width();
    }
    width = Math.round(width);
    galwidth = $(".gallery").width();
    galwidth = (galwidth * 4) / 5;
    galwidth = Math.round(galwidth);
    $(".dispbig").on("click",function(){
        $("#bg").attr("class","bg");
        $("#slide").attr("class","slide");
        $(".left, .right").hide();
        if($(this).hasClass("image")){
            $(".slidephoto").css("display","inline-block");
            var a = $(this).attr("src");
            $(".slidephoto").attr("src", a);
        }
        else if($(this).hasClass("video")){

        }
        else if($(this).hasClass("htmlv")){
            $(".slidephoto").css("display","none");
            $(".slidehtmlv").css("display","inline-block");
            var slidechanger = $(this)[0].currentSrc;
            $(".slidehtmlv source").attr("src", slidechanger);
            $(".slidehtmlv")[0].load();
        }
    });
    $(".slideimage, .iright").on("click",function(){
        event.stopPropagation();
        var selectorr;
        var image = 0;
        var newsrc;
        if($(".slidephoto").css("display") == "inline-block"){
            selectorr = ".slidephoto";
        }
        else if($(".slidevid").css("display") == "inline-block"){
            selectorr = ".slidevid";
        }
        else if($(".slidehtmlv").css("display") == "inline-block"){
            selectorr = ".slidehtmlv source";
        }

        for(var i = 0; i < gal.length;i++){
            if($(gal[i]).attr("src") == $(selectorr).attr("src")){
                    image = i;
                    break;
            }
            else if($(gal[i]).hasClass("video")){
                if($(gal[i])[0].firstElementChild.src == $(selectorr).attr("src")){
                    image = i;
                    break;
                }
            }
            else if($(gal[i]).hasClass("htmlv")){
                if($(gal[i])[0].currentSrc == $(selectorr).attr("src")){
                    image = i;
                    break;
                }
            }
        }
        if(image < gal.length - 1){
            if($(gal[image+1]).hasClass("htmlv")){
                newsrc = $(gal[image+1])[0].currentSrc;
                console.log(newsrc);
            }
            else if($(gal[image+1]).hasClass("video")){
                newsrc = $(gal[image+1])[0].firstElementChild.src;
                console.log(newsrc);
            }
            else{
            newsrc = $(gal[image+1]).attr("src");
            }

        if($(gal[image+1]).hasClass("image")){
            $(".slidephoto").css("display","inline-block");
            $(".slidevid").css("display","none");
            $(".slidehtmlv").css("display","none");
            $(".slidephoto").attr("src", newsrc);
            $(".slidevid").attr("src", "#");
            $(".slidehtmlv source").attr("src","#");
        }
        else if($(gal[image+1]).hasClass("video")){
            $(".slidephoto").css("display","none");
            $(".slidevid").css("display","inline-block");
            $(".slidehtmlv").css("display","none");
            $(".slidevid").attr("src", newsrc);
            $(".slidehtmlv source").attr("src","#");
        }
        else if($(gal[image+1]).hasClass("htmlv")){
            $(".slidephoto").css("display","none");
            $(".slidevid").css("display","none");
            $(".slidehtmlv").css("display","inline-block");
            $(".slidehtmlv source").attr("src", newsrc);
            $(".slidevid").attr("src", "#");
            $(".slidehtmlv")[0].load();
        }
        }
    });

    $(".ileft").on("click",function(){
        event.stopPropagation();
        var newsrcl;
        var selectorl;
        var image = 0;
        if($(".slidephoto").css("display") == "inline-block"){
            selectorl = ".slidephoto";
        }
        else if($(".slidevid").css("display") == "inline-block"){
            selectorl = ".slidevid";
        }
        else if($(".slidehtmlv").css("display") == "inline-block"){
            selectorl = ".slidehtmlv source";
        }
        for(var i = 0; i < gal.length;i++){
            if($(gal[i]).attr("src") == $(selectorl).attr("src")){
                    image = i;
                    break;
            }
            else if($(gal[i]).hasClass("video")){
                if($(gal[i])[0].firstElementChild.src == $(selectorl).attr("src")){
                    image = i;
                    break;
                }
            }
            else if($(gal[i]).hasClass("htmlv")){
                if($(gal[i])[0].currentSrc == $(selectorl).attr("src")){
                    image = i;
                    break;
                }
            }
        }
        console.log(image,"image value after for loop");
        if(image > 0){
            if($(gal[image-1]).hasClass("htmlv")){
                newsrcl = $(gal[image-1])[0].currentSrc;
                console.log($(gal[image-1]));
                console.log($(gal[image-1]).hasClass("htmlv"));
                console.log(newsrcl);
            }
            else if($(gal[image-1]).hasClass("video")){
                newsrcl = $(gal[image-1])[0].firstElementChild.src;
                console.log(newsrcl);
            }
            else{
                newsrcl = $(gal[image-1]).attr("src");
                console.log(newsrcl);
            }

            if($(gal[image-1]).hasClass("image")){
                $(".slidephoto").css("display","inline-block");
                $(".slidevid").css("display","none");
                $(".slidehtmlv").css("display","none");
                $(".slidephoto").attr("src", newsrcl);
                $(".slidevid").attr("src", "#");
                $(".slidehtmlv source").attr("src","#");
            }
            else if($(gal[image-1]).hasClass("video")){
                console.log("inside video else if")
                $(".slidephoto").css("display","none");
                $(".slidevid").css("display","inline-block");
                $(".slidehtmlv").css("display","none");
                $(".slidevid").attr("src", newsrcl);
                $(".slidehtmlv source").attr("src","#");
            }
            else if($(gal[image-1]).hasClass("htmlv")){
                $(".slidephoto").css("display","none");
                $(".slidevid").css("display","none");
                $(".slidehtmlv").css("display","inline-block");
                $(".slidehtmlv source").attr("src", newsrcl);
                $(".slidehtmlv")[0].load();
                $(".slidevid").attr("src", "#");
            }
        }
    });

    $("#slide").on("click",function(){
        $("#slide").attr("class","start");
        $("#bg").attr("class","start");
        $(".left, .right").show();
        $(".slidephoto").css("display","none");
        $(".slidevid").css("display","none");
        $(".slidehtmlv").css("display","none");

    });
    $(".gallery").on("scroll",function(){
        scroll = $(".gallery").scrollLeft();
        scroll = Math.round(scroll);
    });

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
    playbtn.on("click",function(){
        console.log($(this).parent());
        $(".slidephoto").css("display","none");
        $(".slidevid").css("display","inline-block");
        var a = $(this).parent()[0].firstElementChild.src;
        $(".slidevid").attr("src", a);
    });

});