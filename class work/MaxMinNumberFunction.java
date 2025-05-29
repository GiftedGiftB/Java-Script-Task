public class MaxMinNumberFunction{

	// maximum number

	public static int[] arrayNumbers(int[] number){

	int[] arrayNumbers = {9,6,8,11,12};

	int maximum = arrayNumbers[0];
	int secondMaximum = 0;

	for(int count = 0; count < arrayNumbers.length; count++){

		if(arrayNumbers[count] > maximum){
		maximum = arrayNumbers[count];
		} 	
		else if(arrayNumbers[count] > secondMaximum && arrayNumbers[count] != maximum){
		secondMaximum = arrayNumbers[count];
		}
		return secondMaximum;
	}
	}

	//minimum number

	/* int[] numbers = {20,15,6,14,1};

	int minimum = 0;
	int secondMinimum = 0;

	for(int count = 0; count < numbers.length; count++){
		
		if(numbers[count] < minimum){
		minimum = numbers[count];
		}
		else if(numbers[count] < secondMinimum && numbers[count] != minimum ){
		secondMinimum  = numbers[count];
		}
		return secondMinimum;
		} */


}