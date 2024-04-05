let slider = document.querySelector(".slider-servicios");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper-servicios .left-servicios > div").length - 1;

slider.querySelector(".controls-servicios .up-servicios").addEventListener("click", function () {
  if (currentSlide == 0) {
    return;
  }
  currentSlide--;
  slider.querySelector(".wrapper-servicios .left-servicios div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper-servicios .right-servicios div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});

slider.querySelector(".controls-servicios .down-servicios").addEventListener("click", function () {
  if (currentSlide == totalSlides) {
    return;
  }
  currentSlide++;
  slider.querySelector(".wrapper-servicios .left-servicios div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper-servicios .right-servicios div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});