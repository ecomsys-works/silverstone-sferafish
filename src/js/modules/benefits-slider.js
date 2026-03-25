import Swiper from 'swiper/bundle';

export function initBenefitsSlider() {

  let swiper = null;

  function enableSwiper() {
    swiper = new Swiper('.benefitsSlider', {
      slidesPerView: 1,
      spaceBetween: 12,
      pagination: {
        el: '.benefits-pagination',
        clickable: true,
      },
    });
  }

  function check() {
    if (window.innerWidth < 768) {
      if (!swiper) enableSwiper();
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  check();
  window.addEventListener('resize', check);
}
