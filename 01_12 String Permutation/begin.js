/*
  WRITE YOUR SOLUTION HERE
  Recursion is when a function calls itself with an argument that gets progrsssively
  smaller and smaller until a base case is reached. Once that case is reached, the previous stack of executions returns
  and your solution is calculated.
*/
function numPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("hello"));
