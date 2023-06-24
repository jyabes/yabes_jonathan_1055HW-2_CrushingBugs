# SOLUTION:

- Used the JS function instead to be able to change the puzzle pieces that connect to the required buttonHolder/background. 

- I used the “changeBGImage()” function to change the puzzle game board and at the same time it will reset the puzzle pieces and move it back to “puzzlePieceContainer” using the “forEach.”  

function changeBGImage() {
    dropZones.forEach(zone => {
        if (zone.children.length > 0) {
            puzzlePieceDiv.appendChild(zone.firstElementChild);
        }
    });

    //update background image
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
}
