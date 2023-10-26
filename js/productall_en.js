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
    image: "../../images/product/p1_3.jpeg",
    name: "COBIC CHIPS",
    price: "5.00",
    historyPrice: "6.00",
    link: './1/product_en.html'
  },
  {
    image: "../../images/product/p2_1.jpeg",
    name: "Oreo",
    price: "5.00",
    historyPrice: "7.00",
    link: './2/product_en.html'
  },
  {
    image: "../../images/product/p3_1.jpeg",
    name: "Haoli Youpai",
    price: "10.00",
    historyPrice: "11.00",
    link: './3/product_en.html'
  },
  {
    image: "../../images/product/p4_1.jpeg",
    name: "Iced Tea",
    price: "2.00",
    historyPrice: "3.00",
    link: './4/product_en.html'
  },
  {
    image: "../../images/product/p5_1.jpeg",
    name: "Sprite",
    price: "2.00",
    historyPrice: "3.00",
    link: './5/product_en.html'
  },
  {
    image: "../../images/product/p6_1.jpeg",
    name: "jelly",
    price: "4.00",
    historyPrice: "3.00",
    link: './6/product_en.html'
  },
];

var productHTML = products.map(createProductHTML).join("");

document.getElementsByClassName("product-list")[0].innerHTML = productHTML;
