var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusfullSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("image");
    console.log(slides)
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (var i = 0; i < 3; i++) {
        if (slideIndex + i > slides.length) {
            console.log("yes");
            break;
        }
        else{
            slides[slideIndex + i].style.display = "inline-block";
        }
    }

}
