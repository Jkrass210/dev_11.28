export function toggleElement({
  toggleBtnId,
  toggleElementId,
  additionalActiveOnBtn = false,
  closeOnClickInsideSelector = null,
  otherElementsToClose = [],
  addStopScroll = false
}) {
  const toggleBtn = document.getElementById(toggleBtnId);
  const toggleElement = document.getElementById(toggleElementId);

  if (!toggleBtn || !toggleElement) {
    console.error('Элементы с указанными ID не найдены. Проверьте toggleBtnId и toggleElementId.');
    return;
  }
  function toggleState(state) {
    if (state) {
      toggleElement.classList.add('active');
      if (additionalActiveOnBtn) toggleBtn.classList.add('active');
      if (addStopScroll) document.body.classList.add('stop-scroll');
      closeOtherElements();
    } else {
      toggleElement.classList.remove('active');
      if (additionalActiveOnBtn) toggleBtn.classList.remove('active');
      if (addStopScroll) document.body.classList.remove('stop-scroll');
    }
  }
  function closeOtherElements() {
    otherElementsToClose.forEach(({ toggleElementId, toggleBtnId, addStopScroll }) => {
      const otherElement = document.getElementById(toggleElementId);
      const otherBtn = toggleBtnId ? document.getElementById(toggleBtnId) : null;
      if (otherElement && otherElement.classList.contains('active')) {
        otherElement.classList.remove('active');
        if (otherBtn) otherBtn.classList.remove('active');
        if (addStopScroll) document.body.classList.remove('stop-scroll');
      }
    });
  }
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = toggleElement.classList.contains('active');
    toggleState(!isActive);
  });
  if (closeOnClickInsideSelector) {
    toggleElement.addEventListener('click', (e) => {
      if (e.target.closest(closeOnClickInsideSelector)) {
        toggleState(false);
      }
    });
  }
    document.addEventListener('click', (e) => {
      if (toggleElement.classList.contains('active')){
        if (!toggleElement.contains(e.target) && !toggleBtn.contains(e.target)) {
          toggleState(false);
        }
      }
    });
    document.addEventListener('keydown', (e) => {
      if (toggleElement.classList.contains('active')){
        if (e.key === 'Escape' && toggleElement.classList.contains('active')) {
          toggleState(false);
        }
      }
    });
}

