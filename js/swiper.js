function initSwiper() {
    const swiper = new Swiper(".comment-swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        992: {
          slidesPerView: 3
        },
        576: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1
        }
      },
      spaceBetween: 16,
    });
  }
  
  initSwiper();
  