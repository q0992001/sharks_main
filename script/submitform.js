function isPhoneNumberValid(phoneNumber) {
  // Sử dụng biểu thức chính quy để kiểm tra tính hợp lệ của số điện thoại.
  // Dự định đây là một số điện thoại di động ở Việt Nam, bắt đầu bằng 0 và có 10 chữ số.
  var phoneNumberPattern = /^(0[1-9]\d{8})$/;
  
  return phoneNumberPattern.test(phoneNumber);
}

document.querySelector('#submit_form').onsubmit = function(e) {
  e.preventDefault();
  

  //access html 

  let phoneOj = this.querySelector('input[name="phone"]');
  
  let phone = phoneOj.value;

  let errors = {};

  if (phone.trim() == '') {
    alert('Số điện thoại không được để trống');
  }

  if (!isPhoneNumberValid(phone)){
    alert('Vui lòng kiểm tra lại số điện thoại.');
    phone = '';
  }else {
    let data = {
      'entry.1170951477' : phone
    }

    let querryString = new URLSearchParams(data);
    querryString = querryString.toString();

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdF4AAtLl-PLAiNQOxzv2txj7Rl0KzZtTpQVbA3EP9anT_nkA/formResponse", true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    phoneOj.value = '';

    xhr.send(querryString);
    alert('Đăng ký số điện thoại thành công.');
  }

  console.log(phone);
}