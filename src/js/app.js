import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const slides = document.querySelectorAll(".promotion-slider__slide"),
  dots = document.querySelectorAll(".slider-dot"),
  next = document.querySelector(".promotion-slider__btn-next"),
  prev = document.querySelector(".promotion-slider__btn-prev");

let index = 0;

const activeSlide = function (n) {
  for (const slide of slides) {
    slide.classList.remove("promotion-slider__slide--active");
  }
  slides[n].classList.add("promotion-slider__slide--active");
};

const activeDot = function (n) {
  for (const dot of dots) {
    dot.classList.remove("slider-dot--active");
  }
  dots[n].classList.add("slider-dot--active");
};

const prepareCurrentSlide = function (ind) {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = function () {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = function () {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++; //если слайдов больше 2, поставить --
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", function () {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

console.log(nextSlide);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
setInterval(nextSlide, 3500);
