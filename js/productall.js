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
    image: "images/product/p1_3.jpeg",
    name: "可比克薯片",
    price: "5.00",
    historyPrice: "6.00",
    link: 'page/cn/1/product_cn.html'
  },
  {
    image: "images/product/p2_1.jpeg",
    name: "奥利奥",
    price: "5.00",
    historyPrice: "7.00",
    link: 'page/cn/2/product_cn.html'
  },
  {
    image: "images/product/p3_1.jpeg",
    name: "好丽友派",
    price: "10.00",
    historyPrice: "11.00",
    link: 'page/cn/3/product_cn.html'
  },
  {
    image: "images/product/p4_1.jpeg",
    name: "冰红茶",
    price: "2.00",
    historyPrice: "3.00",
    link: 'page/cn/4/product_cn.html'
  },
  {
    image: "images/product/p5_1.jpeg",
    name: "雪碧",
    price: "2.00",
    historyPrice: "3.00",
    link: 'page/cn/5/product_cn.html'
  },
  {
    image: "images/product/p6_1.jpeg",
    name: "果冻",
    price: "4.00",
    historyPrice: "3.00",
    link: 'page/cn/6/product_cn.html'
  },
];

var productHTML = products.map(createProductHTML).join("");

document.getElementsByClassName("product-list")[0].innerHTML = productHTML;
