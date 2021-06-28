/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * - One lowercase letter
  - One uppercase letter
  - One special character (!@#\$%^&\*)
  - One number
  - At least 8 characters long
 */
const validatePassword = (password) => {
  const oneLowerCaseLetter = /(?=.+[a-z])/;
  const oneUpperCaseLetter = /(?=.+[A-Z])/;
  const oneDigit = /(?=.+[0-9])/;
  const oneSpecialCharacter = /(?=.+[!@#\$%^&\*])/;
  const minEightCharacter = /(?=.{8,})/;
  const isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minEightCharacter.test(password);
  return isValid;
};

console.log(validatePassword("sdsdAsd12!!"));
console.log(validatePassword("sdsdAsd"));
