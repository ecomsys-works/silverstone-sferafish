import Swiper from "swiper/bundle";

let gallerySwiper = null;

export function initGallerySwiper() {

  function enableSwiper() {
    gallerySwiper = new Swiper(".gallery-swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,

      pagination: {
        el: ".gallery-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`;
        },
      }
    });
  }

  function destroySwiper() {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }
  }

  function check() {
    if (window.innerWidth < 768) {
      if (!gallerySwiper) enableSwiper();
    } else {
      destroySwiper();
    }
  }

  check();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(check, 200);
  });
}
