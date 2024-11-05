let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    console.log("Next slide clicked");
    showSlides(slideIndex += 1);
}

function prevSlide() {
    console.log("Previous slide clicked");
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-item");
    const indicators = document.getElementsByClassName("indicator");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
}
