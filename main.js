let color = 'black';

document.addEventListener('DOMContentLoaded', () => {
    let popup = document.querySelector('#popup');
    popup.addEventListener("click", () => {
        let size = getSize();
        if (size) {
            populateBoard(size);
        }
    });

    // Added event listeners to color buttons
    let colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            setColor(button.dataset.color);
        });
    });
});

// This function populates the board with squares according to the size provided
let populateBoard = (size) => {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberOfElements = size * size;

    for (let i = 0; i < numberOfElements; i++) {
        let div = document.createElement("div");
        div.classList.add('grid-item'); // Added a class to style grid items
        div.addEventListener('mouseover', colorElement); // Added event listener to color squares on hover
        board.appendChild(div); // Append the square to the board
    }
}

// Function to get the size of the board from user input
let getSize = () => {
    let userInput = prompt("Enter the size (1-100):", "");
    let message = document.querySelector('#message');
    if (userInput === "") {
        message.innerHTML = "Please provide a number.";
        return null;
    } else if (isNaN(userInput)) {
        message.innerHTML = "Size must be a number.";
        return null;
    } else {
        let size = parseInt(userInput);
        if (size < 1 || size > 100) {
            message.innerHTML = "Size must be between 1 and 100.";
            return null;
        } else {
            message.innerHTML = "Ready to play!";
            return size;
        }
    }
}

// Function to color each square on hover
let colorElement = function() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

// Function to set the current color
let setColor = (colorChoice) => {
    color = colorChoice;
}
