// How to write a function

function functionName(parameters) {
    //code block to execute
};

function helloWorld() {
    console.log("Hello World!");
};


// How to invoke a function 
helloWorld();


// More practice on creating functions
function addingNumbers(num1, num2) {
    let result;
    result = num1 + num2;
    console.log(result);
    return result;
};

addingNumbers(25, 57);

function evenLengthStrings(array) {
    let evenLengthStrings = [];
    for(let i = 0; i < array.length; i++) {
        let arrayElement = array[i];
        if(typeof arrayElement === "string" && arrayElement.length % 2 === 0) {
            evenLengthStrings.push(arrayElement);
            console.log(evenLengthStrings);
        }
        if(array.length === 0) {
            evenLengthStrings = [];
            console.log(evenLengthStrings);
        }
    }
}

evenLengthStrings(["cool", "hi"]);