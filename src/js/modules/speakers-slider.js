import Swiper from 'swiper/bundle';

export function initSpeakerssSlider() {
    const swiper = new Swiper('#speakersSlider', {
        slidesPerView: 3,
        grid: {
            rows: 2,
            fill: 'column',
        },
        spaceBetween: 10,

        pagination: {
            el: '.speaker-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            },
        },
        navigation: {
            nextEl: '.speaker-button-next',
            prevEl: '.speaker-button-prev',
        },

        breakpoints: {
            0: { // mobile
                slidesPerView: 1.01,
                grid: {
                    rows: 3,
                    fill: 'row',
                },
            },
            768: { // tablet / small desktop
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
            1440: { // lg breakpoint
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
        },

        on: {
            init: function () { toggleArrows(this); },
            slideChange: function () { toggleArrows(this); },
        },
    });

    function toggleArrows(swiper) {
        const prev = swiper.navigation.prevEl;
        const next = swiper.navigation.nextEl;
        prev.style.display = swiper.isBeginning ? 'none' : 'flex';
        next.style.display = swiper.isEnd ? 'none' : 'flex';
    }
}
