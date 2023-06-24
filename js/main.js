//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    puzzlePieceDiv = document.querySelector(".puzzle-pieces"),
    dropZones = document.querySelectorAll(".drop-zone");
//store the dragged piece in a global variable
//we will need it in the handleDrop function    



function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');

    //bug fix 2 will go here
    //will use a forEach loop and if statement
    //I want to loop through dropzones and check if there is a puzzle
    //check with firstChild
    //if there is a child
    //puzzlePieceDiv.appendChild(something need to go here)

    //this is an alternate way of doing things using the dataset property and
    //data attribute in HTML
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

 //this is to reset the puzzle and the pieces goes back to the container
 //using the event listener
 function changeBGImage() {
    dropZones.forEach(zone => {
        if (zone.children.length > 0) {
            puzzlePieceDiv.appendChild(zone.firstElementChild);
        }
    });
}


function changeBGImage() {
    const backgroundImageIndex = this.dataset.bgref;
    const puzzlePieceContainer = document.querySelector('.puzzle-pieces');
  
    //this is to remove puzzle pieces from drop zones and move them back to the container
    dropZones.forEach(zone => {
      if (zone.children.length > 0) {
        const puzzlePiece = zone.children[0];
        puzzlePieceContainer.appendChild(puzzlePiece);
      }
    });
  
    //reset puzzle pieces to their initial state
    document.getElementById("topLeft").src = `images/topLeft${backgroundImageIndex}.jpg`;
    document.getElementById("topRight").src = `images/topRight${backgroundImageIndex}.jpg`;
    document.getElementById("bottomLeft").src = `images/bottomLeft${backgroundImageIndex}.jpg`;
    document.getElementById("bottomRight").src = `images/bottomRight${backgroundImageIndex}.jpg`;
  
    //set the background image
    puzzleBoard.style.backgroundImage = `url(images/backGround${backgroundImageIndex}.jpg)`;
  }
  
  

function handleStartDrag(e) {
    //console.log("Started dragging this piece:", this)
    //using set Data instead of a global variable
    e.dataTransfer.setData('draggedEl', this.id);
}


function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt as well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
    //this line moves the dragged piece from the left side of the board
    //into whatever dropzone we choose.

    //bugFix 1 will go here
    //could also check if there are no children then if so append
    if(this.children.length >=1) {
        return;
    }
    //this is another alternate approache using setData and getData methods
    //this allows us to pass information from a dragged item to the dropzone
    //since droppedId is not an object we have to use QuerySelector to point it to the element
    let droppedId = e.dataTransfer.getData('draggedEl');
    console.log(droppedId);
     //this.appendChild(document.querySelector(droppedId));
    this.appendChild(document.querySelector(`#${droppedId}`));
   
}

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));