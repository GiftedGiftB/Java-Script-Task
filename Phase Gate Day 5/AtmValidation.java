import java.util.Scanner;
public class AtmValidation{
	public static void main(String[] args){
	Scanner input = new Scanner(System.in);

	System.out.print("Enter card number: ");
	int userNumber = input.nextInt();

		if(userNumber == 9999999999999999){
			System.out.print("it is a visa card");
	}
		if(userNumber == 10000000000000000){
			System.out.print("it is an america express card");

	}



 }
}