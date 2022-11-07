"use strict";
const inputFristName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const confirmPassword = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");

registerBtn.addEventListener("click", function () {
  const user = new User(
    inputFristName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassword.value
  );
  const validate = validateData(user);
});
function validateData(user) {
  if (user.fisrtName.trim().length === 0) {
    alert("Không được để trống trường này!");
    return false;
  } else if (user.lastName.trim().length === 0) {
    alert("Không được để trống trường này!");
    return false;
  } else if (user.password === "" || user.password.length < 8) {
    alert("Vui lòng nhập Password và Password phải có nhiều hơn 8 kí tự!!!");
    return false;
  } else if (
    user.confirmpassword === "" ||
    user.password !== confirPassword.value
  ) {
    alert("Password và confirmpassword phải giống nhau");
    return false;
  }
}
