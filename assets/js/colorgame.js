var numSquares = 6;
var colors = generaterandomColors(numSquares);
var body = document.querySelector("body");
var ans = document.querySelector("#ans");
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#playAgain");
var easy = document.querySelector(".hard");
var hard = document.querySelector(".easy");

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    easy.classList.remove("hard");
    hard.classList.remove("selected");
    hard.classList.add("hard");
    numSquares = 3
    colors = generaterandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (var i = 0;i< square.length;i++) {
        if (i < 3) {
            square[i].style.backgroundColor = colors[i];
        }
        else {
            square[i].style.display = "none";
        }     
    }
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    ans.textContent = "";
});

hard.addEventListener("click", function() {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    easy.classList.add("hard");
    hard.classList.remove("hard");
    numSquares = 6
    colors = generaterandomColors(6);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (var i = 0;i< square.length;i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    ans.textContent = "";
});

reset.addEventListener("click", function() {
    colors = generaterandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (var i = 0;i< square.length;i++) {
        square[i].style.backgroundColor = colors[i];
    }
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    ans.textContent = "";
});



colorDisplay.innerHTML = pickedColor;

for (var i = 0;i < square.length;i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            ans.innerHTML = "Correct!";
            colorChange(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "#232323";
            ans.innerHTML = "Try Again";
        }
        
    });
}

function colorChange(color) {
    for (var i = 0;i < square.length;i++) {
        square[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomColors(num) {
    var arr = [];
    for (var i = 0;i < num;i++) {
      arr.push(randomColors())
    }
    return arr;

}

function randomColors() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}