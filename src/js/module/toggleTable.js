export function toggleTable(buttonClass, tableBoxClass, innerBoxClass, closeBtnClass, stopScrollClass) {
  const button = document.querySelector(`.${buttonClass}`);
  const tableBox = document.querySelector(`.${tableBoxClass}`);
  const innerBox = document.querySelector(`.${innerBoxClass}`);
  
  if (!button || !tableBox || !innerBox) return;

  function openTable() {
      button.classList.add('active');
      document.body.classList.add(stopScrollClass);
  }

  function closeTable() {
      button.classList.remove('active');
      document.body.classList.remove(stopScrollClass);
  }

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (button.classList.contains('active')) {
        closeTable();
    } else {
        openTable();
    }
  });

  document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
          closeTable();
      }
  });

  tableBox.addEventListener('click', (event) => {
      if (!innerBox.contains(event.target)) {
          closeTable();
      } 
  });

  tableBox.addEventListener('click', (event) => {
      const closeBtn = event.target.closest(`.${closeBtnClass}`);
      if (closeBtn) {
          closeTable();
      }
  });
}
