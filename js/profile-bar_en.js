function createProductHTML(navbar) {
  return `
    <div class="card-item">
        <div class="card-label">${navbar.label}</div>
        <div class="card-link">
            <a href="${navbar.link}">></a>
        </div>
    </div>
      `;
}

var navbars = [
  {
    label: "My Favorite",
    link: "",
  },
  {
    label: "My Coupon",
    link: "coupon.html",
  },
  {
    label: "Redemption of points",
    link: "",
  },
  {
    label: "Customer Service",
    link: "",
  },
  {
    label: "About us",
    link: "",
  },
];

var productHTML = navbars.map(createProductHTML).join("");

document.getElementById("navbar-list").innerHTML = productHTML;
