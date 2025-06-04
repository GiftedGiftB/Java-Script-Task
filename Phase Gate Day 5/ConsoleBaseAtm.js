const prompt = require("prompt-sync")();

let currentBalance = 50000;	

	let RemainingBalance = 0;

	let witdrawalFee = 100;

	console.log("Welcome to Semicolon Bank ATM");

	console.log("Your current balance is: " + currentBalance);
	console.log();	
	
	
	let userWithdraw = Number("Enter withdrawal amount multiple of  N500 or N1000: ");

	
	if(userWithdraw < 100){
	console.log("Invalid Amount");
	}
	if(userWithdraw > 20000){
	console.log("20,000 per transaction only");
	}
	//else {
	//console.log("invalid");
	
	RemainingBalance = currentBalance - userWithdraw - witdrawalFee;
	console.log("Successful");
	//}
	console.log("Your balance is: " + RemainingBalance);

	




