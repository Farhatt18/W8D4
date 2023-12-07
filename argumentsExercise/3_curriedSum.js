// you'll write `Function#curry`!
// function curry(num1){
//   return function(num2){
//     return function(num3) {
//       return num1 + num2 + num3
//     }

//   }                    

// }
function curriedSum(numArgs) {
  const numbers = [];

  return function curriedSum(num) {
    numbers.push(num);

    // console.log(args.reduce((acc, el) => acc + el));
    if (numbers.length === numArgs){
      return numbers.reduce((acc, el) => acc + el);
    } 
    else {
      return curriedSum;
    }
    
  }
}

// console.log(curriedSum(3)(4)(20)(6))

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30
Function.prototype.curry = function(numArgs) {
  let nums = [];
  let that = this;
  return function _myCurry(el) {
    nums.push(el)
    if (nums.length < numArgs) {
      return  _myCurry
    } else {
      // return that.call(...nums);
      return that.apply(null,nums);
    }
  }

}
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// // or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30