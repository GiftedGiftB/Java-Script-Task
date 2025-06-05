const prompt = require("prompt-sync")();

console.log("      Semicolon Questionnaire Game");
	

	let chooseFromOne = 0;
	let question1 = 1;
	let question2 = 2;
	let question3 = 3;
	let question4 = 4;
	let question5 = 5;
	let question6 = 6;
	let question7 = 7;
	let question8 = 8;
	let question9 = 9;
	let question10 = 10;



	let number1 = chooseFromOne;
	let number2 = question1;
	let number3 = question2;
	let number4 = question4;
	let number5 = question5;
	let number6 = question6;
	let number7 = question7;
	let number8 = question8;
	let number9 = question9;
	let number10 = question10;
	
	let userNumber = Number(prompt('Enter number of questions you will like to answer: '))

while(true){	

	console.log("Choose a number from 1 - 10: ");
	int userChoice = input.nextInt();
	
	if(userChoice > 10 && userChoice < 1){
	console.log("invalid");
}
