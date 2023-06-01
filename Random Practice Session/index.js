let number

document.getElementById("button").onclick = function() {
    number = document.getElementById("numberInput").value;
    number = Number(number);
    if(number % 2 === 0) {
        document.getElementById("result").innerHTML = "This number is even, nice :)";
    } else if (number % 2 === 1) {
        document.getElementById("result").innerHTML = "This number isn't even, that sucks :(";
    } else {
        document.getElementById("result").innerHTML = "This input isn't a number, why you messing with me >:(";
    };
};
window.alert("Nice job Brem! Everything seems to be working nicely");
window.alert("What will you do next?");