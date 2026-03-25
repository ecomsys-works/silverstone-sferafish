import Swiper from 'swiper/bundle';

export function initTicketsSlider() {
  const sliderEl = document.querySelector('.ticketsSwiper');
  let swiper = new Swiper(sliderEl, {
    slidesPerView: 1.3,
    spaceBetween: 20,
    pagination: {
      el: '.tickets-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.08,
        spaceBetween: 12,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  // при ресайзе возвращаем на первый слайд
  window.addEventListener('resize', () => {
    if (swiper && swiper.enabled) {
      swiper.slideTo(0);
    }
  });
}
