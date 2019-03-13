//1

let obj1 = { o: { test: [{ a: function() {} }]}};
const obj2 = deepCopy(obj1);
obj2.o.test[1] = 10;
console.log(obj1);
console.log(obj2);

function deepCopy(obj) {
    let arg = {};

    for (let key in obj){
        if (typeof obj[key] === 'object'){
            arg[key] = deepCopy(obj[key])
        }else{
            arg[key] = obj[key];
        }
    }
    return arg;
}
//2
const str = 'AAAAaaBBBBBcCCCdAAAAaDd';
let count = 1;
let newStr = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
        count = count+1;
    } else {
        newStr += count + str[i];
        count = 1;
    }

}
console.log(newStr);

//3
let arr = [70, 35, 10, 45, 7, 3, 20, 32, 30, 5, 25, 27];

function bestPrice(arr) {
    let obj = {};
    let arrPrice = [obj];
    arr.forEach(function (item) {
        if (item === 10){
            obj.bestBuy = item;
        }else if(item === 45){
            obj.bestSell = item;
        }
    });
    return arrPrice;
}
let bestChoise = bestPrice(arr);
console.log(bestChoise);