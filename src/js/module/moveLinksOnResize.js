export function moveLinksOnResize({
  headerLinksSelector,
  footerContainerSelector,
  breakpoint = 900
}) {
  const headerLinks = document.querySelectorAll(headerLinksSelector);
  console.log(headerLinks)
  const footerContainer = document.querySelector(footerContainerSelector);
  console.log(footerContainer)
  const header = headerLinks[0]?.parentElement;
  console.log(header)

  if (!headerLinks.length || !footerContainer || !header) {
    console.error('Элементы для перемещения не найдены. Проверьте селекторы.');
    return;
  }

  function moveLinks() {
    if (window.innerWidth <= breakpoint) {
      headerLinks.forEach(link => {
        link.classList.remove('header__btn-link');
        footerContainer.appendChild(link);
      });
    } else {
      headerLinks.forEach(link => {
        if (!link.classList.contains('header__btn-link')) {
          link.classList.add('header__btn-link');
          header.appendChild(link);
        }
      });
    }
  }

  window.addEventListener('resize', moveLinks);
  moveLinks();
}
