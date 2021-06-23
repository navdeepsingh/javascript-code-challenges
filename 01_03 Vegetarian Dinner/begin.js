/*
  WRITE YOUR SOLUTION HERE
*/
const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

(function renderMenu() {
  const menuElement = document.getElementById("menu");
  const vegetarian = menu.filter((dish) => dish.isVegetarian);
  vegetarian.forEach((dish) => {
    const li = document.createElement("li");
    li.textContent = dish.name;
    menuElement.append(li);
  });
})();

