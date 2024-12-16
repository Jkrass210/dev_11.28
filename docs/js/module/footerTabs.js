export function footerTabs(classBtn) {
  document.querySelectorAll(classBtn).forEach(button => {
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');
      document.querySelectorAll(classBtn).forEach(btn => btn.classList.remove('active'));
      if (!isActive) {
        button.classList.add('active');
      }
    });
  });
}

