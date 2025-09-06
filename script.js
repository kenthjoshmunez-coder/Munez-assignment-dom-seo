const text = document.getElementById("my-text");
const changeTextBtn = document.getElementById("change-text");
const addItemBtn = document.getElementById("add-item");
const removeItemBtn = document.getElementById("remove-item");
const bikeList = document.getElementById("bike-list");
const yearSpan = document.getElementById("year");

changeTextBtn.addEventListener("click", () => {
  text.textContent = "Cycling is fun and my favorite outdoor activity!";
});

addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Bike " + (bikeList.children.length + 1);
  bikeList.appendChild(li);
});

removeItemBtn.addEventListener("click", () => {
  if (bikeList.lastElementChild) {
    bikeList.removeChild(bikeList.lastElementChild);
  }
});

yearSpan.textContent = new Date().getFullYear();
