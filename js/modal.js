const foodItems = document.querySelectorAll(".food-item");
const modal = document.getElementById("modal1");

foodItems.forEach((foodItem) => {
  foodItem.addEventListener("click", (event) => {
    // Проверяем, что событие произошло не на элементе .food-item__controls
    if (!event.target.closest(".food-item__controls")) {
      modal.style.display = "flex";
      modal.classList.add("fade-in");
    }
  });
});

const closeBtn = modal.querySelector(".close");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("fade-in");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("fade-in");
  }
});




