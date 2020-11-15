var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document = document.querySelector(".mode");
function setupSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor===pickedColor){
                messageDisplay.textContent = "correct";
                resetButton.textContent="Play Again";           
             }
             else{
                this.style.backgroundColor="#232323";
                messageDisplay.Display.textContent="tryagain";
             }
        });
    }
}
setupSquares();
function makeColor(){
    var r = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+","+b+")";
}
