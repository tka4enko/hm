//1
// const str = 'AAAAaaBBBBBcCCCdAAAAaDd';
const str = 'AAAAddaaa';
let count = 0;
let newStr = '';
let strSec = '';
let strArr = str.split("");
newStr = strArr.reduce((accumulator, currentValue) => {
  console.log(accumulator === currentValue);
  // console.log(accumulator + ':????accamu' );
  // console.log(currentValue + ':????current' );
  if (accumulator === currentValue) {
      count = count+1;
  }
  console.log(count);
  console.log(currentValue);
  return count + accumulator;


  },str[0]);

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i+1]) {
//         count = count+1;
//     } else {
//         newStr += count + str[i];
//         count = 1;
//     }
//
// }
console.log(newStr);