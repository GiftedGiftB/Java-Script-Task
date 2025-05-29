let person = {
	name : "gift",
	age : 16,
	gender : "male",
	password : "25252"
};

person.color = "black";
person.password = "newpasword1234";

console.log(person);
console.log(person.name);
console.log(person["name"]);

console.log(Object.keys(person));
console.log(Object.values(person)); #to print values alone e.g gift,16 e.t.c
console.log(Object.entries(person)); # to print both the object and attribute