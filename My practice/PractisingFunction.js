//

function sayHello(){
	console.log("Hello,JavaScript!");
}
sayHello()

//

const multiply = function(a, b){
	console.log(a * b);

}
multiply(2, 3);

//

const makeNoise = function(){
	console.log("pling!");
};
makeNoise();

//

const power = function(base, exponent){
	let result = 1;
	for(let count = 0; count < exponent; count++){
		result *= base;
	}
	return result;
};

console.log(power(2,10));

//

console.log("The future sats:", future());
function future(){
	return "You'll never have flying cars";
}

//
const horn = () => {
	console.log("Toot")


};







