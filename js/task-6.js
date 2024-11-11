const input = document.querySelector("input");
const controls = document.querySelector("#controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount= parseInt(input.value.trim(), 10);
  if(amount >=1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; 
    
  }
});
destroyBtn.addEventListener("click", destroyBoxes )
function createBoxes(amount) {
  destroyBoxes;
  const fragment = document.createDocumentFragment();
  let size = 30;

  for(let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;

  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
