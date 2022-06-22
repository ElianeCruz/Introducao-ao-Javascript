var currentNumber = 0;
var count = document.getElementById("currentNumber");

function increment() {
    currentNumber = currentNumber + 1;
    count.innerHTML = currentNumber
    if (currentNumber >= 0) {
        document.querySelector('p').style.color = "white";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    count.innerHTML = currentNumber
    if (currentNumber <= 0) {
        document.querySelector('p').style.color = "red";
    }
}
