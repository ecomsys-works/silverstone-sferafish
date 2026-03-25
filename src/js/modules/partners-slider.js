import Swiper from "swiper";

export function initPartnersSwiper() {

    let partnersSwiper;
    if (!partnersSwiper) {
        partnersSwiper = new Swiper(".partnersSwiper", {
            slidesPerView: 6,
            spaceBetween: 15,
            grid: {
                rows: 2,
                fill: "row",
            },
            pagination: {
                el: ".partners-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}"></span>`;
                },
            },

            navigation: {
                nextEl: '.partners-button-next',
                prevEl: '.partners-button-prev',
            },
            watchSlidesProgress: true,
            watchSlidesVisibility: true,

            breakpoints: {
                0: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    grid: {
                        rows: 2,
                    },
                },
                640: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    grid: {
                        rows: 2,
                    },
                },
                1024: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                    grid: {
                        rows: 2,
                    },
                }
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
}
