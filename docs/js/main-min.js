import{toggleElement}from"./module/toggleElement.js";import{footerTabs}from"./module/footerTabs.js";import{moveLinksOnResize}from"./module/moveLinksOnResize.js";import{dropDown}from"./module/dropDown.js";document.querySelector("#searchBtn")&&document.querySelector("#search")&&toggleElement({toggleBtnId:"searchBtn",toggleElementId:"search",otherElementsToClose:[{toggleElementId:"burgerMenu",toggleBtnId:"burgerBtn",addStopScroll:!0}]}),document.querySelector("#burgerBtn")&&document.querySelector("#burgerMenu")&&toggleElement({toggleBtnId:"burgerBtn",toggleElementId:"burgerMenu",additionalActiveOnBtn:!0,closeOnClickInsideSelector:"a",otherElementsToClose:[{toggleElementId:"search",toggleBtnId:"searchBtn"}],addStopScroll:!0}),document.querySelector(".footer__btn-tabs")&&footerTabs(".footer__btn-tabs"),document.querySelector(".header__group-btn-link")&&document.querySelector(".footer__menu-container")&&(console.log(document.querySelectorAll(".header__btn-link")),moveLinksOnResize({headerLinksSelector:".header__btn-link",footerContainerSelector:".footer__menu-container"})),document.querySelectorAll(".drop-down-1__btn")&&dropDown();