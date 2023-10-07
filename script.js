const container = document.querySelector(".container");
const setGrid = document.querySelector(".set-grid");
const clear = document.querySelector(".clear");
const colourBlack = document.querySelector(".colour-black");
const colourRandom = document.querySelector(".colour-random");

let chosenGrid = 16;
let selectedColor = "black";
let currentColour = "rgb(255, 255, 255)";
colourBlack.addEventListener("click", () => (selectedColor = "black"));
colourRandom.addEventListener("click", () => (selectedColor = "random"));

setGrid.addEventListener("click", () => {
  container.innerHTML = "";
  resetSize();
});

clear.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(chosenGrid);
});

function resetSize() {
  chosenGrid = prompt("Enter grid size (Max amount: 50) ");
  if (chosenGrid > 50) {
    chosenGrid = 50;
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
    container.appendChild(box);
  }

  function colourProgress() {
    if (colourPercentage > 0) {
      return (colourPercentage = colourPercentage - 10);
    } else {
      return (colourPercentage = 100);
    }
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.filter = "brightness(100%)";
    box.addEventListener("mouseover", (e) => {
      switch (selectedColor) {
        case "black":
          box.style.background = currentColour;

          let percentage = box.style.filter.replace(/\D+/g, "");
          if (percentage <= 100) {
            box.style.filter = `brightness(${percentage - 10}%)`;
          }
          break;
        case "random":
          box.style.background = `rgb(${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )})`;
          break;
      }
    });
  });
}

createGrid(16);
