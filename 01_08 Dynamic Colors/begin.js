/*
  WRITE YOUR SOLUTION HERE
*/
/**
 * Closure are function which close over their lexical environment or the scope
 * this allows us to access an outer function scope from an inner function
 */
function changeColor(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document.getElementById("blue").addEventListener("click", changeColor("blue"));
document.getElementById("pink").addEventListener("click", changeColor("pink"));
document
  .getElementById("green")
  .addEventListener("click", changeColor("green"));
