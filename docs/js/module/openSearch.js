export function openSearch() {
  const searchWrapper = document.getElementById('search');
  const searchForm = searchWrapper.querySelector('.search__form');
  const searchInput = searchWrapper.querySelector('input[name="search"]');

  function expandSearch() {
    if (window.innerWidth <= 400) return;
    searchWrapper.style.width = '100%';
    searchForm.style.width = '100%';
    searchInput.style.width = '100%';
  }

  function collapseSearch() {
    searchWrapper.style.width = '';
    searchForm.style.width = '';
    searchInput.style.width = '';
  }

  searchInput.addEventListener('focus', expandSearch);

  document.addEventListener('click', (event) => {
    if (!searchWrapper.contains(event.target)) {
      collapseSearch();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      collapseSearch();
      searchInput.blur();
    }
  });
}