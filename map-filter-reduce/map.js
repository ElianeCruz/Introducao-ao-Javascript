function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2
    });
}

const nums = [2, 3, 4, 5, 6, 7];

console.log(mapSemThis(nums));