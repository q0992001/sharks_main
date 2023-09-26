let productHTML = '' ;

product.forEach((product) =>  {
  productHTML += `
    <div class="pro">
      <img src="img/shoes/${product.img}" alt="">
      <div class="des">
        <span>Hanoi Sharks</span>
        <h5>${product.name}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>${product.price}.000₫</h4>
      </div>
      <a href="#"><img class="cart" src="cart_icon.png" alt=""></a>
    </div>
  `;
});

document.querySelector('.js-pro-container').
innerHTML = productHTML;