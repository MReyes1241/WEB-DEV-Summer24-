let colorSelected = "#ffffff"; // Default color
let mode = 'color'; // Default mode
let selectedCells = []; // To keep track of selected cells

// Adds a row
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = handleCellClick;
        row.appendChild(col);
        grid.appendChild(row);
    } else {
        let numCols = rows[0].childElementCount;
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; i++){
            let col = document.createElement("td");
            col.onclick = handleCellClick;
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

// Adds a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = handleCellClick;
        row.appendChild(col);
        grid.appendChild(row);
    } else {
        for (let i = 0; i < rows.length; i++){
            let col = document.createElement("td");
            col.onclick = handleCellClick;
            rows[i].appendChild(col);
        }
    } 
}

// Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
}

// Removes a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");

    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    if(rows[0].childElementCount === 1) {
        grid.innerHTML = "";
        return;
    } 

    for (let i = 0; i < rows.length; i++){
        let col = rows[i].lastElementChild; 
        rows[i].removeChild(col);
    }
}

// Sets global variable for selected color
function selectedColor(){
    colorSelected = document.getElementById("colorPicker").value;
}

function fill(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "";
    }
}

function fillU(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor === "") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Switches to color mode
function selectTileMode() {
    mode = 'color';
    console.log("Mode set to color");
}

// Handles cell click based on the current mode
function handleCellClick() {
    if (mode === 'color') {
        this.style.backgroundColor = colorSelected;
    } else {
        this.classList.toggle('selected');
        updateSelectedCells(this);
    }
    console.log(`Cell clicked in ${mode} mode. Color: ${this.style.backgroundColor}`);
}

