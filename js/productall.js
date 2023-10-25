function createProductHTML(product) {
  return `
      <li class="product">
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="like-icon">
            <i class="fas fa-heart"></i>
          </div>
          <div class="product-name">${product.name}</div>
          <div class="price-detail">
            <span class="price">￥${product.price}</span>
            <span class="history-price">￥${product.historyPrice}</span>
          </div>
        </a>
      </li>
    `;
}

var products = [
  {
    image: "images/product1_1.JPG",
    name: "牙膏",
    price: "10.00",
    historyPrice: "12.00",
    link: 'product.html'
  },
  {
    image: "images/product1_2.JPG",
    name: "牙刷",
    price: "5.00",
    historyPrice: "7.00",
    link: 'product.html'
  },
  {
    image: "images/product1_3.JPG",
    name: "牙刷",
    price: "5.00",
    historyPrice: "7.00",
    link: 'product.html'
  },
  {
    image: "images/product2_1.JPG",
    name: "牙刷",
    price: "5.00",
    historyPrice: "7.00",
    link: 'product.html'
  },
];

var productHTML = products.map(createProductHTML).join("");

document.getElementsByClassName("product-list")[0].innerHTML = productHTML;
