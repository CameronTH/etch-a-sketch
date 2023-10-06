const container = document.querySelector(".container");
const button = document.querySelector("button");
const setGrid = document.querySelector(".set-grid");
const clear = document.querySelector(".clear");

let chosenGrid = 16;

setGrid.addEventListener("click", () => {
  container.innerHTML = "";
  resetSize();
});

clear.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(chosenGrid);
});

function resetSize() {
  chosenGrid = prompt("Enter grid size ");
  if (chosenGrid > 100) {
    chosenGrid = 100;
  }
  container.style.gridTemplateRows = `repeat(${chosenGrid}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${chosenGrid}, 1fr)`;
  createGrid(chosenGrid);
}

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.border = "1px solid black";
    box.style.background = "white";
    container.appendChild(box);
  }
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      box.style.background = "black";
    });
  });
}

createGrid(16);
