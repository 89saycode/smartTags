function createProductHTML(category) {
  return `
        <li class="nav-item ${category.className}">${category.name}</li>
      `;
}

var categorys = [
  {
    name: "All",
    className: "hover",
  },
  {
    name: "Vegetable",
    className: "",
  },
  {
    name: "Fruit",
    className: "",
  },
  {
    name: "Grain、Oil",
    className: "",
  },
  {
    name: "Clothing",
    className: "",
  },
  {
    name: "Seasoning",
    className: "",
  },
  {
    name: "Beverage",
    className: "",
  }
];

var productHTML = categorys.map(createProductHTML).join("");

document.getElementsByClassName("navbar")[0].innerHTML = productHTML;
