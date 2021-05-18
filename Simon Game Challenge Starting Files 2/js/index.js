var redButton = document.querySelectorAll(".red");
var yellowButton = document.querySelectorAll(".yellow");
var greenButton = document.querySelectorAll(".green");
var blueButton = document.querySelectorAll(".blue");
var arrayBtn = [redButton, yellowButton, greenButton, blueButton];
var soundToPlay = [];

var redAudio = new Audio("sounds/red.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var blueAudio = new Audio("sounds/blue.mp3");

// détécter si une touche du clavier a été utilisé
function isAkeyPressed (){
    document.addEventListener("keydown", function (e){
        console.log("une touche a été entrée");
        console.log(e);
        if (e.key == "a"){
            console.log("c'est la touche a");
            playGame();
        }
    })
}

// randomiser ma liste
function randomButton(){
    var randomBtn = Math.floor(Math.random() * arrayBtn.length);
    console.log(randomBtn, arrayBtn[randomBtn]);
    return arrayBtn[randomBtn];
}



function playGame(){
    console.log("je suis bien dans mon playGame");

    var titleGame = document.querySelector("#level-title");
    titleGame.innerHTML = ("Let\'s go ");

}

isAkeyPressed ();