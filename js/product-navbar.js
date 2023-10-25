function createProductHTML(category) {
  return `
        <li class="nav-item ${category.className}">${category.name}</li>
      `;
}

var categorys = [
  {
    name: "全部",
    className: "hover",
  },
  {
    name: "蔬菜",
    className: "",
  },
  {
    name: "水果",
    className: "",
  },
  {
    name: "粮油",
    className: "",
  },
  {
    name: "服装",
    className: "",
  },
  {
    name: "调料",
    className: "",
  },
  {
    name: "酒水",
    className: "",
  },
  {
    name: "饮料",
    className: "",
  },
];

var productHTML = categorys.map(createProductHTML).join("");

document.getElementsByClassName("navbar")[0].innerHTML = productHTML;
