const prompt = require("prompt-sync")();

let tempNumber;
let total;
let failedCounter = 0;
let count;
for(count = 0; count < 3; count++){

let minuend = Math.floor(Math.random() * 100)

let subtrahend =Math.floor(Math.random() * 100)

console.log("Old minuend " + minuend);
console.log("Old subtrahend " + subtrahend);

if(minuend > subtrahend){
	minuend = minuend;
}
else if(minuend < subtrahend){
	tempNumber = minuend;
	minuend = subtrahend;
	subtrahend = tempNumber

}

total = minuend - subtrahend;

console.log("New minuend " + minuend);
console.log("New subtrahend " + subtrahend);
console.log(total);


let userNumber = Number(prompt('What is the answer: '))

if(total == userNumber){
console.log("You are correct");
}
else if(total != userNumber){
console.log("You wrong")

total = minuend - subtrahend;

let userNumber = Number(prompt('What is the answer: '))

if(total == userNumber){
console.log("You are correct");
}
else if(total != userNumber){
console.log("You wrong")
failedCounter++;

}

}
}
console.log("Total number of failure is " + failedCounter + " and total count is " + count);

