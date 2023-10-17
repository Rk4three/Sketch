function generateGrid(divNum, className) {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';
    for (let i = 0; i < divNum; i++) {
      const gridDiv = document.createElement('div');
      gridContainer.classList.remove('grid-10x10', 'grid-20x20', 'grid-30x30');
      gridContainer.classList.add(className);
      gridContainer.appendChild(gridDiv);
    }
}

gridItems = document.querySelectorAll('#grid');
function listen() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mousedown', (event) => {
            event.target.style.backgroundColor = defaultColor
        if (event.buttons == 1) {
            gridItems[i].addEventListener('mouseover', (e) => {
                if (e.buttons == 1){
                    e.target.style.backgroundColor = defaultColor
                }})
        }
      });
    }
}

function changeSize() {
    checkGridClass = document.getElementById("grid")
    clear = document.querySelector("#clear-btn")
    const small = document.querySelector("#small")
    const medium = document.querySelector("#medium")
    const large = document.querySelector("#large")

    clear.addEventListener("click", () => {
        if (checkGridClass.classList.contains("grid-10x10")) {
            generateGrid(10 * 10, "grid-10x10")
        } else if (checkGridClass.classList.contains("grid-20x20")) {
            generateGrid(20 * 20, "grid-20x20")
        } else {
            generateGrid(30 * 30, "grid-30x30")
        }})

    small.addEventListener("click", () => {
        generateGrid(10 * 10, "grid-10x10")
    })
    medium.addEventListener("click", () => {
        generateGrid(20 * 20, "grid-20x20")
    })
    large.addEventListener("click", () => {
        generateGrid(30 * 30, "grid-30x30")
    })
}

function clearGrid() { 
    for (let i = 0; i < gridItems.length; i++) {
        clr = gridItems[i]
        clr.target.style.backgroundColor = "#000000"
    }
}

let defaultColor = "#000000"

const color = document.querySelector("#color-picker")
function selectColor() {
    color.addEventListener("input", (e) => {
        defaultColor = e.target.value
    })
}

const erase = document.querySelector("#eraser-btn")
function eraseGrid() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mousedown', event => {
            event.target.style.backgroundColor = "#FFF";
            if (event.buttons == 1) {
                gridItems[i].addEventListener('mouseover', (e) => {
                    if (e.buttons == 1){
                        e.target.style.backgroundColor = "#FFF"
                    }})
            }
        });
      }
}

const body = document.body;
function main() {
    generateGrid(20 * 20, "grid-20x20")
    changeSize()
    selectColor()
    listen()

    color.addEventListener("click", () => {
        erase.value = "OFF"
        body.style.cursor = "url('./images/pencil.png'), auto"
        selectColor()
        listen()
    })
    erase.addEventListener("click", () => {
        if (erase.value == "OFF") {
            erase.value = "ON"
            body.style.cursor = "url('./images/eraser.png'), auto"
            eraseGrid()
            
        } else {
            erase.value = "OFF"
            body.style.cursor = "url('./images/pencil.png'), auto"
            listen()
        }
    })
}
    
main()
