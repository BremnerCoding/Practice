
let a;
let b;
let c;
let semiPerimeter;
let perimeter;
let area;
let height;

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("textA").value;
    a = Number(a);

    b = document.getElementById("textB").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("labelC").innerHTML = "Side C: " + c;

    perimeter = a + b + c;
    document.getElementById("labelPerimeter").innerHTML = "Perimeter: " + perimeter;

    semiPerimeter = (a + b + c) / 2;
    document.getElementById("labelS").innerHTML = "Semi-Perimeter: " + semiPerimeter;

    area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    document.getElementById("labelArea").innerHTML = "Area: " + area;


};