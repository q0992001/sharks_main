document.querySelector('#submit-cart').onsubmit = function(e) {
  e.preventDefault();

  const productName = this.querySelector('#prodetails .submit-cart .sing-pro-details h4').textContent;
  const productPrice = this.querySelector('#prodetails .submit-cart .sing-pro-details h2').textContent;
  const size = this.querySelector('select[name="size"]').value;
  const quantity = this.querySelector('input[name="quantity"]').value;
  const phone = this.querySelector('input[name="phone"]').value;
  const errorContainer = document.getElementById('error-container');

  let errors = {};

  if (phone.trim() == '') {
    errors.phone = 'Số điện thoại không được để trống';
  }

  if (!isPhoneNumberValid(phone)) {
    errors.phone = 'Vui lòng kiểm tra lại số điện thoại.';
  }

  if (Object.keys(errors).length > 0) {
    // Hiển thị các thông báo lỗi trong errorContainer hoặc sử dụng cách khác để hiển thị thông báo lỗi.
    errorContainer.innerHTML = Object.values(errors).join('<br>');
  } else {
    const data = {
      'entry.1976354977': productName,
      'entry.1302893949': productPrice,
      'entry.1841386742': size,
      'entry.2106531332': quantity,
      'entry.1125509236': phone,
    };

    const queryString = new URLSearchParams(data).toString();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWZqSzB_SblyuIPM15jAMmvbXYOH9CD7sTNwyBEe6FWlFfkw/formResponse", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    this.reset(); // Đặt lại form sau khi gửi thành công.
    xhr.send(queryString);
    alert('Đăng ký mua hàng thành công. Vui lòng để ý cuộc gọi xác nhận đơn hàng và hướng dẫn thanh toán.');
  }
};