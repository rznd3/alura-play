export function initializeDropdownButtons() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(btn => {
      btn.addEventListener("click", function(event) {
          const dropdownContent = this.nextElementSibling;
          dropdownContent.classList.toggle("show");

          // Fecha o menu flutuante de todos os outros botões
          dropdownBtns.forEach(otherBtn => {
              if (otherBtn !== btn) {
                  otherBtn.nextElementSibling.classList.remove("show");
              }
          });
      });
  });

  document.addEventListener("click", function(event) {
      dropdownBtns.forEach(btn => {
          const dropdownContent = btn.nextElementSibling;
          if (!btn.contains(event.target)) {
              dropdownContent.classList.remove("show");
          }
      });
  });
}
