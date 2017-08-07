

var letters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


//create variables to track wins, losses, and guesses

var wins = 0;
var losses = 0;
var guesses = 9;
var guessed=[];

//game reset function, computer chooses new random letter and number of guesses returns to default

var reset = function(){
	guesses=9;
	guessed=[];
	computerChoice = letters [Math.floor (Math.random() * letters.length)];
	console.log (computerChoice);

}

//computer chooses random letter from array and logs it into console

var computerChoice = letters [Math.floor (Math.random() * letters.length)];


console.log (computerChoice)


//key press logged as user guess. Push guess to guesses so far array.

document.onkeyup = function (event) {
	var userGuess= String.fromCharCode(event.keyCode).toLowerCase();

	guessed.push(userGuess);

//if user guess is correct, log as win and reset game

	if (userGuess === computerChoice) { wins++; reset();}

//if user guess is incorrect, subtract from number of guesses

	else {guesses--;}

//if number of guesses reaches zero, log as loss and reset game

	if (guesses===0) {losses++; reset();}

//keep count of wins, losses, guesses left, and guesses so far

document.getElementById("wins").innerHTML = "Wins: " + wins;

document.getElementById("losses").innerHTML = "Losses: " + losses;

document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;

document.getElementById("soFar").innerHTML = "Your guesses so far: " + guessed;

}

