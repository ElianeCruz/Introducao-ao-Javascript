
function somaNumeros(arr) {
    return arr.reduce(function (previous, current) {
        console.log({ previous });
        console.log({ current });
        return previous + current;
    }, 3);
}

const num = [4, 5, 8]

console.log(somaNumeros(num));