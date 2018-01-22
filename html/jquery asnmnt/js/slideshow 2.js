var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
//function plusfullSlides(n) {
//  showSlides(slideIndex += n);
//}
function showSlides(n) {
    var slides = document.getElementsByClassName("image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (var i = 0; i < 3; i++) {
        slides[slideIndex + i].style.display = "inline-block";

    }

}
