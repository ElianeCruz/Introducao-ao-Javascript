// números pares
function numPares(arr) {
    return arr.filter(function (item) {
        return item % 2 === 0
    });
}

const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numPares(nums));

// números ímpares

// function numImpares(arr) {
//     return arr.filter(function (item) {
//         return item % 2 !== 0
//     });
// }

// const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numImpares(nums));