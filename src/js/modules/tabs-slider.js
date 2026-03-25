import Swiper from 'swiper/bundle';


export function initTabsWithSlider() {
  const tabButtons = document.querySelectorAll('.tab-btn');

  // создаём swiper
  const swiper = new Swiper('#tabsSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    autoHeight: true,

    pagination: {
      el: '.tabs-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      }
    },

    breakpoints: {
      768: {
        allowTouchMove: false, // на десктопе свайп выкл
      }
    }
  });

  // активная таб-кнопка
  function setActiveTab(index) {
    tabButtons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('bg-siniy', 'text-belyy');
        btn.classList.remove('text-chernyy-900');
      } else {
        btn.classList.remove('bg-siniy', 'text-belyy');
        btn.classList.add('text-chernyy-900');
      }
    });
  }

  // клики по табам (desktop)
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      swiper.slideTo(index); // переключаем слайд
      setActiveTab(index);    // активная кнопка
    });
  });

  // при свайпе на mobile меняем активную кнопку (если надо)
  swiper.on('slideChange', () => {
    const index = swiper.activeIndex;
    setActiveTab(index);
  });

  // первый активный
  setActiveTab(0);
}
