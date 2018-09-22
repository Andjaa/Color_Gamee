var nummberOfSquares = 6;
var colors = generateRandomColor(nummberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var heading = document.getElementById("heading");
var resetColor = document.getElementById("reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");
var modeButtons = document.getElementsByClassName("mode");

for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? nummberOfSquares = 3 : nummberOfSquares = 6;
        reset();
    });
}
resetColor.addEventListener("click", function(){
    reset();
});
colorDisplay.textContent = pickedColor.toUpperCase();
for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            for(var i=0; i<squares.length; i++){
                changeColor(pickedColor);
            }
            messageDisplay.textContent = "Correct!";
            heading.style.backgroundColor = clickedColor;
            resetColor.textContent="Play Again";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
            resetColor.textContent="New Colors";
        }
    });
}
function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}
function reset(){
    colors = generateRandomColor(nummberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetColor.textContent = "New Colors";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    heading.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}