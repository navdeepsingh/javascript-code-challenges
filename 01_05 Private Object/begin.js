/*
  WRITE YOUR SOLUTION HERE
*/
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "navdeepsingh",
  [password]: "12323434",
  age: 35,
};

console.log(user.username);
