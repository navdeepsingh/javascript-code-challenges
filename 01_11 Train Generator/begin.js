/*
  WRITE YOUR SOLUTION HERE
*/
function* getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

const nycTrainLine = getStop();

const nextStop = () => {
  const { value, done } = nycTrainLine.next();
  console.log(!done ? value : "Reached Destination");
};

const nextStopbutton = document.querySelector("#next-stop");
nextStopbutton.addEventListener("click", nextStop);
