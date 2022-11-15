import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//*******************Первый слайдер*******************

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

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
setInterval(nextSlide, 3500);

//*******************Второй слайдер*******************
const slides2 = document.querySelectorAll(".image-slider__item"),
  dots2 = document.querySelectorAll(".dot"),
  next2 = document.querySelector(".image-slider__control-right"),
  prev2 = document.querySelector(".image-slider__control-left");
let index2 = 0;

const activeSlide2 = function (n) {
  for (const slide of slides2) {
    slide.classList.remove("image-slider__item--active");
  }
  slides2[n].classList.add("image-slider__item--active");
};

const activeDot2 = function (n) {
  for (const dot of dots2) {
    dot.classList.remove("dot--active");
  }
  dots2[n].classList.add("dot--active");
};

const prepareCurrentSlide2 = function (ind) {
  activeSlide2(ind);
  activeDot2(ind);
};

const nextSlide2 = function () {
  if (index2 == slides2.length - 1) {
    index2 = 0;
    prepareCurrentSlide2(index2);
  } else {
    index2++;
    prepareCurrentSlide2(index2);
  }
};

const prevSlide2 = function () {
  if (index2 == slides2.length - 1) {
    index2 = 0;
    prepareCurrentSlide2(index2);
  } else {
    index2--; //если слайдов больше 2, поставить --
    prepareCurrentSlide2(index2);
  }
};

dots2.forEach((item, indexDot) => {
  item.addEventListener("click", function () {
    index2 = indexDot;
    prepareCurrentSlide2(index2);
  });
});

next2.addEventListener("click", nextSlide2);
prev2.addEventListener("click", prevSlide2);
//setInterval(nextSlide2, 3500);
