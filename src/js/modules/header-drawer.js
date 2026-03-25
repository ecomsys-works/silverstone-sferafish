// header-drawer.js
export function initHeaderDrawer() {
    const header = document.getElementById('header');
    const logoSvg = document.getElementById('logo-svg');
    const burger = document.getElementById('burger');
    const burgerSvg = burger ? burger.querySelector('svg') : null;
    const drawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const desktopMenu = document.querySelector('#header nav ul'); // десктопное меню
    const breakpoint = 768; // md breakpoint

    if (!header || !logoSvg || !burger || !burgerSvg || !drawer || !drawerClose || !desktopMenu) return;

    // Функция для обновления логотипа, бургера и хедера
    function updateHeader() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 1px 10px 0 rgba(103, 103, 103, 0.55)';
            header.classList.add('bg-white');
            logoSvg.querySelector('use').setAttribute('href', './icons/symbol/sprite.svg#logo-congress-color');
            burgerSvg.classList.remove('text-belyy');
            burgerSvg.classList.add('text-chernyy');
            desktopMenu.classList.remove('text-belyy');
            desktopMenu.classList.add('text-chernyy');
        } else {
            header.style.boxShadow = 'none';
            header.classList.remove('bg-white');
            logoSvg.querySelector('use').setAttribute('href', './icons/symbol/sprite.svg#logo-congress-dark');
            burgerSvg.classList.remove('text-chernyy');
            burgerSvg.classList.add('text-belyy');
            desktopMenu.classList.remove('text-chernyy');
            desktopMenu.classList.add('text-belyy');
        }
    }

    function closeDrawerOnDesktop() {
        if (window.innerWidth >= breakpoint && !drawer.classList.contains('translate-x-full')) {
            drawer.classList.remove('translate-x-0');
            drawer.classList.add('translate-x-full');
        }
    }

    // Функция закрытия мобильного меню
    function closeDrawer() {
        drawer.classList.remove('translate-x-0');
        drawer.classList.add('translate-x-full');
    }

    // Обработчики событий
    window.addEventListener('scroll', () => {
        updateHeader();
        closeDrawerOnDesktop();
    });

    window.addEventListener('resize', () => {
        updateHeader();
        closeDrawerOnDesktop();
    });

    burger.addEventListener('click', () => {
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('translate-x-0');
    });

    drawerClose.addEventListener('click', closeDrawer);

    // === Добавляем закрытие мобильного меню при клике на якорь ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // отменяем стандартный скролл

            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                const topPos = targetElement.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: topPos - 85,
                    behavior: 'smooth'
                });
            }

            // Закрываем только на мобильных
            if (window.innerWidth < breakpoint) {
                closeDrawer();
            }
        });
    });

    // Инициализация при загрузке
    updateHeader();
    closeDrawerOnDesktop();
}