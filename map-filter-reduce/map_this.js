const manga = {
    value: 4,
};

const abacaxi = {
    value: 5,
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [2, 4];

console.log('this -> manga', mapComThis(nums, manga));

console.log('this -> abacaxi', mapComThis(nums, abacaxi));