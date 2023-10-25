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
    label: "我的喜欢",
    link: "",
  },
  {
    label: "我的优惠券",
    link: "coupon.html",
  },
  {
    label: "积分兑换",
    link: "",
  },
  {
    label: "联系客服",
    link: "",
  },
  {
    label: "关于我们",
    link: "",
  },
];

var productHTML = navbars.map(createProductHTML).join("");

document.getElementById("navbar-list").innerHTML = productHTML;
