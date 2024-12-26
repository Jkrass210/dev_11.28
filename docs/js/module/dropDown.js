export function dropDown() {
  const dropDowns = document.querySelectorAll(".drop-down-1");

  function closeAllDropDowns() {
    dropDowns.forEach((dropDown) => {
      const button = dropDown.querySelector(".drop-down-1__btn");
      button.classList.remove("active");
    });
  }

  function toggleDropDown(dropDown) {
    const button = dropDown.querySelector(".drop-down-1__btn");
    const isActive = button.classList.contains("active");

    closeAllDropDowns(); // Закрываем все выпадающие списки

    if (!isActive) {
      button.classList.add("active"); // Открываем текущий список
    }
  }

  // Обработка клика на кнопке
  dropDowns.forEach((dropDown) => {
    const button = dropDown.querySelector(".drop-down-1__btn");
    const list = dropDown.querySelector(".drop-down-1__list");

    button.addEventListener("click", (event) => {
      event.preventDefault(); // Отменяем отправку формы
      event.stopPropagation(); // Предотвращаем закрытие при клике на кнопку
      toggleDropDown(dropDown);
    });

    // Закрытие при клике на ссылку внутри списка
    list.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeAllDropDowns();
      });
    });
  });

  // Закрытие при клике вне диапазона
  document.addEventListener("click", () => {
    closeAllDropDowns();
  });

  // Закрытие при нажатии клавиши Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropDowns();
    }
  });
}
