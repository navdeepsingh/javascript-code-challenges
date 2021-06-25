/*
  WRITE YOUR SOLUTION HERE
*/
const timeline = document.querySelector("#timeline");
// Loading
timeline.innerText = "Loading...";

const fetchFriends = async () => {
  const jsonData = await fetch(`https://randomuser.me/api/?results=5`);
  const response = await jsonData.json();
  return response.results;
};

// Appending
const generateTimeline = async () => {
  const friends = await fetchFriends();
  console.log(friends);
  let wrapper = document.createElement("div");

  for (let friend of friends) {
    let img = document.createElement("img");
    img.src = friend.picture.medium;
    wrapper.appendChild(img);
  }

  timeline.innerText = "";
  timeline.appendChild(wrapper);
};

generateTimeline();
