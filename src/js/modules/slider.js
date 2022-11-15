export function init(options) {
    const slider = document.querySelectorAll(options.parent);
    const next = document.querySelector(options.arrowRight);
    const prev = document.querySelector(options.arrowLeft);
    let dots = [];
    let index = 0;

    // если в опциях указан параметр dots, добавив элементы в dots
    if (options.dot) {
        dots = document.querySelectorAll(options.dot);
    }

    const activeSlide = function (n) {
        for (const slide of slider) {
            slide.classList.remove(options.sliderActive);
        }
        slider[n].classList.add(options.sliderActive);
    };

    const activeDot = function (n) {
        // тут проверяем есть ли элементы в переменной dots
        if (dots.length == 0) {
            return;
        }

        for (const dot of dots) {
            dot.classList.remove(options.dotActive);
        }
        dots[n].classList.add(options.dotActive);
    };

    const prepareCurrentSlide = function (ind) {
        activeSlide(ind);
        activeDot(ind);
    };

    const nextSlide = function () {
        if (index == slider.length - 1) {
            index = 0;
            prepareCurrentSlide(index);
        } else {
            index++;
            prepareCurrentSlide(index);
        }
    };

    const prevSlide = function () {
        index--;

        // если index == 2 тогда установить индекс на последний слайд
        if (index < 0) {
            index = slider.length - 1; // 2
        }

        prepareCurrentSlide(index);
    };

    dots.forEach((item, indexDot) => {
        item.addEventListener("click", function () {
            index = indexDot;
            prepareCurrentSlide(index);
        });
    });

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
}