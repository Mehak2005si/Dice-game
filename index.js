var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImg1 = "images/" + "dice" + randomNumber1 + ".png";

var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImg1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomImg2 = "images/" + "dice" + randomNumber2 + ".png";

var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the winner";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 is the winner!";
}
else {
    document.querySelector("h1").innerHTML = "Its a tie!";
}