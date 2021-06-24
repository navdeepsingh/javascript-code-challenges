/*
  WRITE YOUR SOLUTION HERE
*/
/**
 * Reduce function
 * @param {*} coffeeArr
 * @returns
 */
function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce((acc, elem) => {
    return (acc = acc + elem);
  }, 0);
  return `The total bill is ${coffeeSum}`;
}

console.log(coffeeDate([1.7, 2, 4, 23]));
