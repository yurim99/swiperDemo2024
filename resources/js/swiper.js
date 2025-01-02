window.addEventListener('DOMContentLoaded', function () {
  let swiper01 = new Swiper(".swiper01", {});
  let swiper02 = new Swiper(".swiper02", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swiper03 = new Swiper(".swiper03", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  let swiper04 = new Swiper(".swiper04", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  let swiper05 = new Swiper(".swiper05", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  let swiper06 = new Swiper(".swiper06", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
  let swiper07 = new Swiper(".swiper07", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true, // 호버시 스크롤바 나타남
    },
  });
  let swiper08 = new Swiper(".swiper08", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // =========== 02 =========== //
  let swiper10 = new Swiper(".swiper10", {
    spaceBetween: 30, //px 단위
  });

  let swiper11 = new Swiper(".swiper11", {
    slidesPerView: 3,
    spaceBetween: 30,
  });

  let swiper12 = new Swiper(".swiper12", {
    slidesPerView: "auto", // 슬라이드의 넓이에 따라 자동으로
    spaceBetween: 30,
  });

  let swiper13 = new Swiper(".swiper13", {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
  });

  let swiper14 = new Swiper(".swiper14", {
    cssMode: true,
    mousewheel: true, // 마우스 휠 스크롤 지원
    keyboard: true,   // 키보드 네비게이션 지원
  });

  let swiper15 = new Swiper(".swiper15", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper16 = new Swiper(".swiper16", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper17 = new Swiper(".swiper17", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper18 = new Swiper(".swiper18", {
    direction: "vertical",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper19 = new Swiper(".swiper19", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // =========== 03 =========== //
  let swiper20 = new Swiper(".swiper20", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })

  let swiper21 = new Swiper(".swiper21", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper22 = new Swiper(".swiper22", {
    effect: 'fade',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper23 = new Swiper(".swiper23", {
    effect: 'cube',
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper24 = new Swiper(".swiper24", {
    effect: 'coverflow',
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper25 = new Swiper(".swiper25", {
    effect: 'flip',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper26 = new Swiper(".swiper26", {
    effect: 'cards',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper27 = new Swiper(".swiper27", {
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

  let swiper28 = new Swiper(".swiper28", {
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper29 = new Swiper(".swiper29", {
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // =========== 04 =========== //
  let swiper30 = new Swiper(".swiper30", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false// 사용자 인터렉트가 있을 경우 멈춤
    },
  });

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  let swiper31 = new Swiper(".swiper31", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

  let swiper32 = new Swiper(".swiper32", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  })
  if (swiper32.length > 0) {
    var appendNumber = 3;
    var prependNumber = 1;
    document
      .querySelector(".prepend-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper32.prependSlide([
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
      });
    document
      .querySelector(".prepend-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper32.prependSlide(
          '<div class="swiper-slide"><p>슬라이드 ' + --prependNumber + "</p></div>"
        );
      });
    document
      .querySelector(".append-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper32.appendSlide(
          '<div class="swiper-slide"><p>슬라이드 ' + ++appendNumber + "</p></div>"
        );
      });
    document
      .querySelector(".append-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper32.appendSlide([
          '<div class="swiper-slide"><p>슬라이드' + ++appendNumber + "</p></div>",
          '<div class="swiper-slide"><p>슬라이드 ' + ++appendNumber + "</p></div>",
        ]);
      });

  }

  let swiper33small = new Swiper(".swiper33.small", {
    slidesPerView: 4,
    spaceBetween: 10,
    watchSlidesProgress: true,
  });
  let swiper33Big = new Swiper(".swiper33.big", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    thumbs: {
      swiper: swiper33small
    }
  })

  let swiper34 = new Swiper(".swiper34", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    }
  })

  let swiper35 = new Swiper(".swiper35", {
    spaceBetween: 30,
    history: {
      key: "test",
    },
  });

  let swiper36 = new Swiper(".swiper36", {
    speed: 600,
    parallax: true,
  });

  let swiper37 = new Swiper(".swiper37", {
    lazy: true,
  });

  let swiper38 = new Swiper(".swiper38", {
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });

  let swiper39 = new Swiper(".swiper39", {
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@01.50": {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  let swiper40 = new Swiper(".swiper40", {
    autoHeight: true,
    navigation: {
      nextEl: ".swiper40 .swiper-button-next",
      PrevEl: ".swiper40 .swiper-button-prev"
    },
  });

  let swiper41 = new Swiper(".swiper41", {
    zoom: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper40 .swiper-button-next",
      PrevEl: ".swiper40 .swiper-button-prev"
    },
  });


  let swiper42Stage = document.querySelector('.swiper42');
  if (swiper42Stage) {
    const swiper42 = new Swiper('.swiper42', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper42 .swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper42 .swiper-button-next',
        prevEl: '.swiper42 .swiper-button-prev',
      },
      virtual: {
        slides: (function () {
          const slides = [];
          for (var i = 0; i < 600; i += 1) {
            slides.push('Slide ' + (i + 1));
          }
          return slides;
        })(),
      },
    });
    let appendNumber = 600;
    let prependNumber = 1;
    document
      .querySelector('.slide-1')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper42.slideTo(0, 0);
      });

    document
      .querySelector('.slide-250')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper42.slideTo(249, 0);
      });

    document
      .querySelector('.slide-500')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper42.slideTo(499, 0);
      });

    document
      .querySelector('.prepend-2-slides')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper42.virtual.prependSlide([
          'Slide ' + --prependNumber,
          'Slide ' + --prependNumber,
        ]);
      });

    document
      .querySelector('.append-slide')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper42.virtual.appendSlide('Slide ' + ++appendNumber);
      });
  }

  let swiper43Stage = document.querySelector('.swiper43');
  if (swiper43Stage) {
    function myPlugin({ swiper, extendParams, on }) {
      extendParams({
        debugger: false, // 디버깅 활성화 옵션 추가
      });

      on('init', () => {
        if (!swiper.params.debugger) return;
        console.log('init');
      });
      on('click', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('click');
      });
      on('tap', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('tap');
      });
      on('doubleTap', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('doubleTap');
      });
      on('sliderMove', (swiper, e) => {
        if (!swiper.params.debugger) return;
        console.log('sliderMove');
      });
      on('slideChange', () => {
        if (!swiper.params.debugger) return;
        console.log(
          'slideChange',
          swiper.previousIndex,
          '->',
          swiper.activeIndex
        );
      });
      on('slideChangeTransitionStart', () => {
        if (!swiper.params.debugger) return;
        console.log('slideChangeTransitionStart');
      });
      on('slideChangeTransitionEnd', () => {
        if (!swiper.params.debugger) return;
        console.log('slideChangeTransitionEnd');
      });
      on('transitionStart', () => {
        if (!swiper.params.debugger) return;
        console.log('transitionStart');
      });
      on('transitionEnd', () => {
        if (!swiper.params.debugger) return;
        console.log('transitionEnd');
      });
      on('fromEdge', () => {
        if (!swiper.params.debugger) return;
        console.log('fromEdge');
      });
      on('reachBeginning', () => {
        if (!swiper.params.debugger) return;
        console.log('reachBeginning');
      });
      on('reachEnd', () => {
        if (!swiper.params.debugger) return;
        console.log('reachEnd');
      });
    }

    let swiper43 = new Swiper('.swiper43', {
      modules: [myPlugin], // 플러그인 등록
      pagination: {
        el: '.swiper43 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper43 .swiper-button-next',
        prevEl: '.swiper43 .swiper-button-prev',
      },
      debugger: true, // 디버거 활성화
    });
  }


  let menuButton = document.querySelector('.menu-button');
  let openMenu = function () {
    swiper44.slidePrev();
  };

  let swiper44 = new Swiper(".swiper44", {
    slidesPerView: 'auto',
    initialSlide: 1,
    resistanceRatio: 0, //터치시 저항설정
    slideToClickedSlide: true,
    on: {
      slideChangeTransitionStart: function () {
        var slider = this;
        if (slider.activeIndex === 0) {
          menuButton.classList.add('cross');
          // required because of slideToClickedSlide
          menuButton.removeEventListener('click', openMenu, true);
        } else {
          menuButton.classList.remove('cross');
        }
      },
      slideChangeTransitionEnd: function () {
        var slider = this;
        if (slider.activeIndex === 1) {
          menuButton.addEventListener('click', openMenu, true);
        }
      },
    },
  });

  let swiper45 = new Swiper(".swiper45", {
    on: {
      resize: function () {
        swiper45.changeDirection(getDirection());
      },
    },
  })
  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 1023 ? 'vertical' : 'horizontal';

    return direction;
  }

  let swiper47 = new Swiper(".swiper47", {
    rewind: true,
    speed: 600, // 슬라이드 이동 속도
  });
})








