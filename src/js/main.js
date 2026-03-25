import { BaseHelpers } from "./helpers/base-helpers";
import { initHeaderDrawer } from "./modules/header-drawer";
import { initTabsWithSlider } from './modules/tabs-slider.js';
import { initSpeakerssSlider } from "./modules/speakers-slider.js";
import { initGallerySwiper } from "./modules/gallery-slider.js";
import { initBenefitsSlider } from "./modules/benefits-slider.js";
import { initTicketsSlider } from "./modules/tickets-slider.js";
import { initLastYearSwiper } from "./modules/lastyear-slider.js";
import { initFaq } from "./modules/faq-accordions.js";
import { initPartnersSwiper } from "./modules/partners-slider.js";
import { initDalpModalsSimple } from "./modules/modals.js";

const phoneInput1 = document.getElementById('phone-mask-1');
const phoneInput2 = document.getElementById('phone-mask-2');
const im1 = new Inputmask("+7 (999) 999-99-99");
const im2 = new Inputmask("+7 (999) 999-99-99");
im1.mask(phoneInput1);
im2.mask(phoneInput2);

BaseHelpers.addLoadedClass();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();

// Инициализация хедера и мобильного канваса
initHeaderDrawer();
initTabsWithSlider();
initSpeakerssSlider();
initGallerySwiper();
initBenefitsSlider();
initTicketsSlider();

initLastYearSwiper();
window.addEventListener("resize", initLastYearSwiper);

initFaq(0);

initPartnersSwiper();
window.addEventListener("resize", initPartnersSwiper);

initDalpModalsSimple();
