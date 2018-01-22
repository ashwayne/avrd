  tag = document.getElementById('iframe-demo');
  var gal = $(".dispbig");
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady() {
    yt1 = new YT.Player('yplay1', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function onPlayerStateChange(event) {
      if(event.data==1){
           stopother(event.target);
      }
  }
  function onPlayerReady(){
  }
  if($(gal[0].childNodes[0]).attr("src") == $("#bac").attr("src")){
  console.log("true")
  console.log($(gal[0].childNodes[0]).attr("src"));
  console.log($("#bac").attr("src"));
    }
    else{
    console.log("false")
    }
//    function yet(){
//    var a  = document.getElementById("hplay1");
//    a.load();



    $(document).ready(function(){
        var a  = $(".video");
        console.log(a[0].firstElementChild.src)
    });
