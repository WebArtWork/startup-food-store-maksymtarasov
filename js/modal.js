const foodItems = document.querySelectorAll(".food-item");

foodItems.forEach((foodItem) => {
  foodItem.addEventListener("click", (event) => {
    if (!event.target.closest(".food-item__controls")) {
      const modalId = foodItem.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      
      modal.style.display = "flex";
      modal.classList.add("fade-in");
    }
  });
});

const closeBtns = document.querySelectorAll(".close");

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeModals();
  });
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    closeModals();
  }
});

function closeModals() {
  const modals = document.querySelectorAll(".modal");

  modals.forEach((modal) => {
    modal.style.display = "none";
    modal.classList.remove("fade-in");
  });
}






