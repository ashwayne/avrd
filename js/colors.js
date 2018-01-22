var box = document.querySelectorAll(".color");
var galbox = document.querySelectorAll(".gallery");
var outp = document.querySelector(".middle p");
var newcol = document.querySelectorAll("li")[0];
findcolor = 9;
var header = document.querySelector("h1");
var easy = document.querySelectorAll("li")[1];
var hard = document.querySelectorAll("li")[2];
var wholetop= document.querySelector("header");
var b = document.getElementById("a1");
var eorh = 0;
var fcol="";
function reset(){
        outp.innerHTML="";
        wholetop.style.backgroundColor = "rgb(0,53,107)";
}

function gencolors(type){
    if(type==1){
        for(var i = 0; i < galbox[1].children.length; i++){
            galbox[1].children[i].classList.add("color")
            galbox[1].children[i].classList.remove("disp")
        }

        for(var i = 0;i < box.length; i++){
            var a = Math.round((Math.random()*254) + 1);
            var b = Math.round((Math.random()*254) + 1);
            var c = Math.round((Math.random()*254) + 1);
            var e = "rgb(" + a + ", " + b +", "+c+")";
            box[i].style.backgroundColor = e;
        }
        findcolor = Math.round((Math.random()*5) );
        easy.classList.remove("active");
        hard.classList.add("active");
        eorh=1;

    }
    else if (type==2){
        for(var i = 0; i < galbox[1].children.length; i++){
            galbox[1].children[i].classList.remove("color")
            galbox[1].children[i].classList.add("disp")
        }

        for(var i = 0;i < box.length; i++){
            var a = Math.round((Math.random()*254) + 1);
            var b = Math.round((Math.random()*254) + 1);
            var c = Math.round((Math.random()*254) + 1);
            var e = "rgb(" + a + ", " + b +", "+c+")";
            box[i].style.backgroundColor = e;
        }
        findcolor = Math.round((Math.random()*2) );

        easy.classList.add("active");
        hard.classList.remove("active");
        for(var e = 3; e < 6;e++ ){
        box[e].style.backgroundColor="black";
        }
        eorh=2;
    }

    fcol = box[findcolor].style.backgroundColor;
    header.textContent =  fcol ;
    reset();
    clicklistener(fcol);
}
gencolors(1);
hard.classList.toggle("active");
eorh=1;

newcol.addEventListener("click",function(){
        findcolor = 9;
        if(eorh==1){

            gencolors(1);
        }
        else{
            gencolors(2);
        }

});

easy.addEventListener("click",function(){

        gencolors(2);
});

hard.addEventListener("click",function(){

        gencolors(1);
});

function clicklistener(e){
        finalcolorrgb = ''
        finalcolorrgb = e
        for(var i = 0;i < box.length; i++){
            box[i].addEventListener("click",function(){
                if(this.style.backgroundColor === finalcolorrgb){
                for(var i = 0;i < box.length; i++){
                box[i].style.backgroundColor= finalcolorrgb;
                }
                outp.innerHTML = "Correct";
                wholetop.style.backgroundColor= finalcolorrgb   ;
                }
                else{
                this.style.backgroundColor="black";

                }

            })
        }

}
