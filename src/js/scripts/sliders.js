//  partners
var swiper = new Swiper('.partners-js', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    460: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});
//  partners end


// championship
var swiper = new Swiper('.championship-js', {
  slidesPerView: 8,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    460: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 8,
    },
  }
});

// championship end