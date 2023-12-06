// HEADER SLIDER
const headerSlider = new Swiper(".header-media__slider", {
  direction: "vertical",
  loop: true,

  scrollbar: {
    el: ".header-media__scrollbar",
    dragClass: "header-media__scrollbar-drag",
  },

  pagination: {
    el: ".header-media__pagination",
    currentClass: "header-media__pagination--current",
    totalClass: "header-media__pagination--total",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
});

// REVIEWS SLIDER
const reviewSider = new Swiper(".reviews-slider", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

// PORTFOLIO SPOILER
portfolioSlides = window.document.querySelectorAll(".portfolio-spoiler__item");
paddingBottom = 20;

portfolioSlides.forEach((portfolioSlide) => {
  slideHeaderHeight = portfolioSlide.children[0].offsetHeight + paddingBottom;
  portfolioSlide.style.height = `${slideHeaderHeight}px`;

  portfolioSlide.addEventListener("click", (event) => {
    portfolioSlides.forEach((portfolioSlide) => {
      oldSlideHeaderHeight =
        portfolioSlide.children[0].offsetHeight + paddingBottom;
      portfolioSlide.classList.remove("active");
      portfolioSlide.style.height = `${oldSlideHeaderHeight}px`;
    });

    currentHeight = event.currentTarget.clientHeight;
    additionalHeight = event.currentTarget.children[1].offsetHeight;

    event.currentTarget.style.height = `${currentHeight + additionalHeight}px`;
    event.currentTarget.classList.toggle("active");
  });
});

// QNA SPOILER
qnaSlides = window.document.querySelectorAll(".qna-spoiler__item");

qnaSlides.forEach((qnaSlide) => {
  slideHeaderHeight = qnaSlide.children[0].offsetHeight;
  qnaSlide.style.height = `${slideHeaderHeight}px`;

  qnaSlide.addEventListener("click", (event) => {
    qnaSlides.forEach((qnaSlide) => {
      oldSlideHeaderHeight = qnaSlide.children[0].offsetHeight;
      qnaSlide.classList.remove("active");
      qnaSlide.style.height = `${oldSlideHeaderHeight}px`;
    });

    currentHeight = event.currentTarget.clientHeight;
    additionalHeight = event.currentTarget.children[1].offsetHeight;

    event.currentTarget.style.height = `${currentHeight + additionalHeight}px`;
    event.currentTarget.classList.toggle("active");
  });
});

// BURGER MENU
burgerBtn = document.querySelector(".header-menu__burger");
navigationBtn = document.querySelector('.header-menu__navigation')
headerText = document.querySelector('.header-text')
headerMedia = document.querySelector('.header-media')
body = document.querySelector("body");

burgerBtn.addEventListener("click", (event) => {
  isActive = event.currentTarget.classList.contains("active");
  body.style.overflow = "auto";
  event.currentTarget.classList.toggle("active");
  navigationBtn.classList.toggle("active");
  headerText.style.filter = 'none'
  headerMedia.style.filter = 'none'
  if (!isActive) {
    body.style.overflow = "hidden";
    headerText.style.filter = 'blur(10px)'
    headerMedia.style.filter = 'blur(10px)'
  }
});
