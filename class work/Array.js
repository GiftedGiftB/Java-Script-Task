// this code shows how to add elements to an array in JavaScript
let result = [];
result.push(1);
console.log(result);// Output: [1]
result.push({name: "John"});
console.log(result); // Output: [1, { name: "John" }]

result.push([1, 2, 3]);
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3]]
result.push("Hello");
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello"]
result.push(true);
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello", true]
result.push(null);
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello", true, null]
result.push(undefined);
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello", true, null, undefined]

//This code shows how to delecte elements from an array in JavaScript
result.pop();
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello", true, null]
result.pop();
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello", true]
result.pop();
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3], "Hello"]
result.pop();
console.log(result); // Output: [1, { name: "John" }, [1, 2, 3]]
result.pop();
console.log(result); // Output: [1, { name: "John" }]
result.pop();
console.log(result); // Output: [1]
result.pop();
console.log(result); // Output: []

// this code show how to shift elements from an array in JavaScript
result = [1, { name: "John" }, [1, 2, 3], "Hello", true, null, undefined];
result.shift();
console.log(result); // Output: [{ name: "John" }, [1, 2, 3], "Hello", true, null, undefined]
result.shift();
console.log(result); // Output: [[1, 2, 3], "Hello", true, null, undefined]
result.shift();
console.log(result); // Output: ["Hello", true, null, undefined]
result.shift();
console.log(result); // Output: [true, null, undefined]
result.shift();
console.log(result); // Output: [null, undefined]
result.shift();
console.log(result); // Output: [undefined]
result.shift();
console.log(result); // Output: []

// this code shows how to unshift elements to an array in JavaScript
result = [];
result.unshift(1);
console.log(result); // Output: [1]
result.unshift({ name: "John" });
console.log(result); // Output: [{ name: "John" }, 1]
result.unshift([1, 2, 3]);
console.log(result); // Output: [[1, 2, 3], { name: "John" }, 1]
result.unshift("Hello");
console.log(result); // Output: ["Hello", [1, 2, 3], { name: "John" }, 1]
result.unshift(true);
console.log(result); // Output: [true, "Hello", [1, 2, 3], { name: "John" }, 1]
result.unshift(null);
console.log(result); // Output: [null, true, "Hello", [1, 2, 3], { name: "John" }, 1]
result.unshift(undefined);
console.log(result); // Output: [undefined, null, true, "Hello", [1, 2, 3], { name: "John" }, 1]
result.unshift("New Element");
console.log(result); // Output: ["New Element", undefined, null, true, "Hello", [1, 2, 3], { name: "John" }, 1]

