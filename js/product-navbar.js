function createProductHTML(category) {
    return `
        <li class="nav-item">${category}</li>
      `;
  }
  
  var categorys = ['蔬菜', '水果', '粮油', '服装', '零食', '调料', '酒水', '饮料'];
  
  var productHTML = categorys.map(createProductHTML).join("");
  
  document.getElementsByClassName("navbar")[0].innerHTML = productHTML;
  