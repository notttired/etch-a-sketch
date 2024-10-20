let canvasContainer = document.querySelector(".canvasContainer");
const resetButton = document.querySelector(".resetButton");
const eraseButton = document.querySelector(".eraseButton");
const penButton = document.querySelector(".penButton");
const inputLength = document.querySelector(".inputLength");
const inputButton = document.querySelector(".inputButton");

let length = 16;
genCanvas(length);

resetButton.addEventListener("click", reset);
eraseButton.addEventListener("click", eraser);
penButton.addEventListener("click", pen);
inputButton.addEventListener("click", changeLength);

function genCanvas(len) {
    for (let i = 0; i < len; i++) { // check syntax
        canvasContainer.appendChild(genRow(len));
    }
}

function genRow(len) {
    const newRow = document.createElement("div");
    newRow.style.display = "flex";
    newRow.style.flex = "1 1 0";
    for (let j = 0; j < len; j++) {
        const newBox = document.createElement("div"); // doesn't need diff var names for each iteration
        newBox.style.flex = "1 1 0";
        newBox.style.border = "1px solid black"; // syntax
        newBox.classList.toggle("singleBox");
        newBox.addEventListener("mouseover", () => {newBox.classList.add("colored");});
        newRow.appendChild(newBox);
    }
    return newRow;
}

function reset() {
    const body = document.querySelector("body");
    body.removeChild(canvasContainer);
    canvasContainer = document.createElement("div");
    canvasContainer.classList.toggle("canvasContainer");
    body.appendChild(canvasContainer);
    genCanvas(length);
}

function eraser() {
    const allBoxes = document.querySelectorAll(".singleBox");
    allBoxes.forEach(modifyBox => {
        modifyBox.removeEventListener("mouseover", () => {modifyBox.classList.add("colored");}); // syntax
        modifyBox.addEventListener("mouseover", () => {modifyBox.classList.remove("colored");});
    });
}

function pen() {
    const allBoxes = document.querySelectorAll(".singleBox");
    allBoxes.forEach(modifyBox => {
        modifyBox.removeEventListener("mouseover", () => {modifyBox.classList.remove("colored");}); 
        modifyBox.addEventListener("mouseover", () => {modifyBox.classList.add("colored");});
    });
}

function changeLength() {
    if (inputLength.checkValidity()) {
        length = inputLength.value;
        inputLength.value = "";
        reset();
    } else {alert("Invalid Input")}
}