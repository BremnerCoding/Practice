let array = ["hello", "hi", 4, "cool", 5, true];
let evenLengthStrings= [];

//function searchArray(array) {
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        if(typeof array[i] === "string" && element.length % 2 === 0) {
            evenLengthStrings.push(array[i]);
        }
        //return evenLengthStrings;
    }
//}

console.log(evenLengthStrings);
console.log(array);