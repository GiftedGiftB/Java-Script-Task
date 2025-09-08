function elementNum(element1, element2){
    const merged = element1.concat(element2);

    merged.sort((a, b) => a - b);

    const length = merged.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[middle - 1] + merged[middle]) / 2;
    } else {
        return merged[middle];
    }
}

const array1 = [23, 45, 12, 67];
const array2 = [56, 78, 90, 11];
console.log(elementNum(array1, array2));



function numberOfEachLetter(word){
    const letter = {};
    for(let char of word){
        letter[char] = (letter[char] || 0) + 1;
    }
    return letter;
}
console.log(numberOfEachLetter("femi go to school"));
