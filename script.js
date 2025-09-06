let size = 16;
isDown = false;


const sizeButton = document.getElementById("size");
sizeButton.addEventListener("click", (e) => {
    temp = size;
    size = parseInt(prompt("Enter n size for the n X n grid (Max 100):"));
    if (size <= 100) {
        if(confirm("Are you sure? Current drawing will be lost")) {
            while (container.firstElementChild) {
                container.removeChild(container.lastElementChild);
            }
            addSquares();
        } 
    }
    else {
        alert("Size exceeds 100");
    }
})


const container = document.getElementById("container");
container.addEventListener("dragstart", (e) => {
    e.preventDefault()
});


container.addEventListener("mouseup", (e) => {
    isDown = false;
})

function addSquares() {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.className = "grid";
            square.style.width = `calc(800px/${size})`;
            square.style.flexBasis = `calc(100%/${size})`;
            container.appendChild(square);
            square.addEventListener("mousedown", (e) => {
                isDown = true;
                square.style.backgroundColor = 'black';
            })
            square.addEventListener("mouseenter", (e) => {
                if (isDown == true) {
                    square.style.backgroundColor = 'black';
                }
            })
        }
    }
}

addSquares();