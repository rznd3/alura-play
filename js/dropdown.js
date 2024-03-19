document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn"); // Selecting the button
    const dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownBtn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents the event from bubbling up and closing the dropdown
      dropdownContent.classList.toggle("show");
    });
  
    // Closes the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!event.target.matches(".dropdown-btn")) {
        dropdownContent.classList.remove("show");
      }
    });
  });