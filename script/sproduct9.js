//thay === số trùng với id của giày
var productId = 9 ;

var sizeSelect = document.getElementById("size-select");
var productName = document.querySelector("#prodetails .sing-pro-details h4");
var productPrice = document.querySelector("#prodetails .sing-pro-details h2");
var productDes = document.querySelector("#prodetails .sing-pro-details span");
var mainImg = document.getElementById("main-img");
var smallImg1 = document.getElementById("small-img1");
var smallImg2 = document.getElementById("small-img2");
var smallImg3 = document.getElementById("small-img3");

var productWithId = product.find(function(item) {
  return item.id === productId;
});

const priceSpro = (productWithId.price * 1000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

if (productWithId) {
  productName.textContent = productWithId.name; // Cập nhật tên sản phẩm
  productPrice.textContent = priceSpro; // Cập nhật giá sản phẩm
  productDes.textContent = productWithId.description; // Cập nhật mô tả
  mainImg.src = `/img/shoes/${productWithId.id}_1.jpg`; // Cập nhật ảnh sản phẩm main
  smallImg1.src = `/img/shoes/${productWithId.id}_1.jpg`; // Cập nhật ảnh sản phẩm small
  smallImg2.src = `/img/shoes/${productWithId.id}_2.jpg`; // Cập nhật ảnh sản phẩm small
  smallImg3.src = `/img/shoes/${productWithId.id}_3.jpg`; // Cập nhật ảnh sản phẩm small
}

sizeSelect.innerHTML = '';
var defaultOption = document.createElement('option');
defaultOption.text = "Select Size";
sizeSelect.appendChild(defaultOption);
for (var size in productWithId) {
  if (size !== "" && Number(size) >= 1 && productWithId[size] > 0) {
    var option = document.createElement('option');
    option.value = size;
    option.text = size;
    sizeSelect.appendChild(option);
  }
}
