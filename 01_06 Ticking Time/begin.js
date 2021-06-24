/*
  WRITE YOUR SOLUTION HERE
*/

const getTime = () => {
  const clockElem = document.getElementById("clock");
  setInterval(() => {
    const time = new Date();
    clockElem.innerHTML = time.toLocaleTimeString();
  }, 100);
};

getTime();
