import { toggleElement } from './module/toggleElement.js';
import { toggleTable } from './module/toggleTable.js';
import { footerTabs } from './module/footerTabs.js';
import { moveLinksOnResize } from './module/moveLinksOnResize.js';
import { dropDown } from './module/dropDown.js';
import { copy } from './module/copy.js';
import { handleResize } from './module/handleResize.js';

if (document.querySelector('#searchBtn') && document.querySelector('#search')) {
  toggleElement({
    toggleBtnId: 'searchBtn',
    toggleElementId: 'search',
    otherElementsToClose: [
      { toggleElementId: 'burgerMenu', toggleBtnId: 'burgerBtn', addStopScroll: true }
    ]
  });
}

if (document.querySelector('#filterBtn') && document.querySelector('#filterMenu')) {
  toggleElement({
    toggleBtnId: 'filterBtn',
    toggleElementId: 'filterMenu',
    /*otherElementsToClose: [
      { toggleElementId: 'burgerMenu', toggleBtnId: 'burgerBtn', addStopScroll: true }
    ]*/
  });
}

if (document.querySelector('#burgerBtn') && document.querySelector('#burgerMenu')) {
  toggleElement({
    toggleBtnId: 'burgerBtn',
    toggleElementId: 'burgerMenu',
    additionalActiveOnBtn: true,
    closeOnClickInsideSelector: 'a',
    otherElementsToClose: [
      { toggleElementId: 'search', toggleBtnId: 'searchBtn' }
    ],
    addStopScroll: true
  });
}

if (document.querySelector('.footer__btn-tabs')) {
  footerTabs('.footer__btn-tabs')
}

if (document.querySelector('.header__group-btn-link') && document.querySelector('.footer__menu-container')) {
  console.log(document.querySelectorAll('.header__btn-link'))
  moveLinksOnResize({
    headerLinksSelector:".header__btn-link",
    footerContainerSelector:'.footer__menu-container'
  });
}

if (document.querySelectorAll('.drop-down-1__btn')) {
  dropDown();
}

if (document.querySelector("#swiper-1") && document.querySelector("#swiper-2")) {
  let swiper = new Swiper("#swiper-2", {
    spaceBetween: 13,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  let swiper2 = new Swiper("#swiper-1", {
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });
}

if (document.querySelector('.table-box')){
  toggleTable(
    'product-card-section-1__btn', 
    'product-card-section-1__table-box', 
    'table-box', 
    'close', 
    'stop-scroll'
  );
}

if (document.querySelector('.product-card-section-1__info-group')){
  copy();
}

if (document.querySelector(".product-card-section-1__top-line-wrapp") && document.querySelector(".product-card-section-1__top-line") && document.querySelector(".product-card-section-1__mobil-hidden")) {
  const btn = document.querySelector(".product-card-section-1__top-line-wrapp");
  const topSection = document.querySelector(".product-card-section-1__top-line");
  const mobileHidden = document.querySelector(".product-card-section-1__mobil-hidden");
  handleResize(mobileHidden, btn, topSection, 750)
  window.addEventListener("resize", () => handleResize(mobileHidden, btn, topSection, 750));
}



