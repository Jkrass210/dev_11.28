export function copy(){
  const buttons = document.querySelectorAll('.product-card-section-1__info-group .btn-reset');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const spanElement = button.querySelector('span');
          if (!spanElement) return; // Если span не найден, выходим

          const spanText = spanElement.textContent.trim();

          if (navigator.clipboard) {
              navigator.clipboard.writeText(spanText)
                  .then(() => console.log(`Скопировано: ${spanText}`))
                  .catch(err => console.error('Ошибка копирования:', err));
          } else {
              console.error('Clipboard API не поддерживается');
          }
      });
  });
}