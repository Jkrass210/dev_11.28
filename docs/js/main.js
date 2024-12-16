import { toggleElement } from './module/toggleElement.js';
import { footerTabs } from './module/footerTabs.js';
import { moveLinksOnResize } from './module/moveLinksOnResize.js';

if (document.querySelector('#searchBtn') && document.querySelector('#search')) {
  toggleElement({
    toggleBtnId: 'searchBtn',
    toggleElementId: 'search',
    otherElementsToClose: [
      { toggleElementId: 'burgerMenu', toggleBtnId: 'burgerBtn', addStopScroll: true }
    ]
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
