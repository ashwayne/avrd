var pone= document.getElementById("p1");
var ptwo= document.getElementById("p2");
var s1= document.getElementById("s1");
var s2= document.getElementById("s2");
var limit= document.getElementById("l");

var reset= document.getElementById("rs");
var h1=document.querySelector("h1");
var inp=document.querySelector("input");

var p1 = 0;
var p2 = 0;
var final = 5;
pone.addEventListener("click",function(){
    if(p2 < final){
        if (p1 === final-1){
            p1+=1;
            s1.innerHTML= p1;
            s1.style.color="green"
        }
        else if(p1 < final ){
            p1+=1;
            s1.innerHTML= p1;
        }
    }
});
ptwo.addEventListener("click",function(){
   if(p1 < final){
       if (p2 === final-1){
            p2+=1;
            s2.innerHTML= p2;
            s2.style.color="green"
       }
       else if(p2 < final ){
           p2+=1;
           s2.innerHTML= p2;
       }
   }
});
rs.addEventListener("click",function(){
    p1=0;
    p2=0;
    s1.style.color="black";
    s2.style.color="black";
    s1.innerHTML= p1;
    s2.innerHTML= p2;
    inp.value=5;
    final=5;
    limit.textContent =5;
    });

inp.addEventListener("click",function(){
    if(inp.value >= 3){
        if(p1===final || p2===final){

            p1=0; p2 = 0;
        }
        else{
            final = inp.value;
            limit.textContent = final;
        }
    }
});
