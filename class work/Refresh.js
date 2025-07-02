function findTheLargestWordInTheSentence(sentence){
   char = sentence.split(" ");
   let largestWord = "";
   for (let i = 0; i < char.length; i++) {
       if (char[i].length > largestWord.length) {
           largestWord = char[i];
       }
   }
   return largestWord;
}



/* function smallestNumberWhoseDigitsMultiplyToGivenProduct(product){
  
} */

function findTheFirstArmstrongNumbersAndReturnBoolean(number){
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** 3; // Assuming we are checking for 3-digit Armstrong numbers
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}



console.log(findTheLargestWordInTheSentence("Ade is going to semicolon")); 
//console.log(smallestNumberWhoseDigitsMultiplyToGivenProduct(100));
console.log(findTheFirstArmstrongNumbersAndReturnBoolean(153)); // true