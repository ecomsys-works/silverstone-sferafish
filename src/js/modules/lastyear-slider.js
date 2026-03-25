import Swiper from "swiper";

let swiper = null;

export function initLastYearSwiper() {

  if (window.innerWidth < 768) {

    // если ещё не создан
    if (!swiper) {
      swiper = new Swiper(".lastYearSwiper", {
        slidesPerView: 1,
        spaceBetween: 12,

        pagination: {
          el: ".lastyear-pagination",
          clickable: true,
           renderBullet: (index, className) => {
          return `<span class="${className}"></span>`;
        },
        },

        on: {
          init: function () {
            this.slideTo(0, 0);
          }
        }
      });
    } 
    // если уже существует (например после resize назад)
    else {
      swiper.slideTo(0, 0);
    }

  } else {

    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }

  }
}
