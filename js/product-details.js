function goBack() {
    window.location.href = 'index.html';
}

function like() {
  // 喜欢按钮的逻辑
}

function share() {
  // 分享按钮的逻辑
}

function changeImage(imageUrl, thumbnail) {
  // 更改主图像
  document.querySelector(".main-image").src = imageUrl;

  // 更改选定的缩略图
  var thumbnails = document.querySelectorAll(".thumbnail");
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("selected");
  }
  thumbnail.classList.add("selected");
}
