export function copy() {
    const buttons = document.querySelectorAll('.product-card-section-1__info-group .btn-reset');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const spanElement = button.querySelector('span');
            if (!spanElement) return;

            const spanText = spanElement.textContent.trim();

            if (navigator.clipboard) {
                navigator.clipboard.writeText(spanText)
                    .then(() => {
                        console.log(`Скопировано: ${spanText}`);
                        const copiedBlock = button.closest('.product-card-section-1__info-group').querySelector('.copied');
                        if (copiedBlock) {
                            copiedBlock.classList.add('active');
                            setTimeout(() => copiedBlock.classList.remove('active'), 2000);
                        }
                    })
                    .catch(err => console.error('Ошибка копирования:', err));
            } else {
                console.error('Clipboard API не поддерживается');
            }
        });
    });
}
