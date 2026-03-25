export function initDalpModalsSimple() {
  const body = document.body;
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  document.querySelectorAll(".open-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal;
      const modal = document.querySelector(`.modal[data-modal-id="${modalId}"]`);
      if (!modal) return;

      modal.classList.remove("hidden");
      const content = modal.querySelector(".modal-content");

      content.classList.remove("fade-down");
      content.classList.add("fade-up");

      // Блокируем скролл и компенсируем ширину скролл-бара
      const scrollWidth = getScrollbarWidth();
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
    });
  });

  document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      if (!modal) return;

      const content = modal.querySelector(".modal-content");
      content.classList.remove("fade-up");
      content.classList.add("fade-down");

      // Ждём, пока анимация закончится
      setTimeout(() => {
        modal.classList.add("hidden");
        content.classList.remove("fade-down");

        // Возвращаем скролл и убираем компенсацию
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }, 350); // чуть больше времени анимации
    });
  });


  document.querySelectorAll('.modal input[type="checkbox"]').forEach(checkbox => {
    const svg = checkbox.nextElementSibling;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        svg.classList.remove('hidden');
      } else {
        svg.classList.add('hidden');
      }
    });
  });


}
