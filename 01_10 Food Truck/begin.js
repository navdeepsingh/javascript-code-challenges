/*
  WRITE YOUR SOLUTION HERE
*/
function foodTruckFestival(menus) {
  let flatMenus = menu.flat();

  let combinedMenu = new Set();
  flatMenus.forEach((item) => {
    combinedMenu.add(item);
  });

  const menuNode = document.querySelector("#combined-menu");
  for (let item of combinedMenu) {
    let foodNode = document.createElement("li");
    foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}

foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);
