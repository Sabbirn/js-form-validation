/*
function getFormValue() {
  const nameInput = document.getElementById("full-name");
  const errorText = document.getElementById("error-text");
  const nameValue = nameInput.value;

  if (nameValue) {
    console.log(nameValue);
    errorText.innerHTML = "";
    nameInput.value = "";
  } else {
    errorText.innerHTML =
      '<p style="color:#00ffd5;">Please Enter Your Full Name !</p>';
  }
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", getFormValue);
*/

// 2nd Wea for this code
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email-address");
  const addressInput = document.getElementById("address");
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const addressValue = addressInput.value;
  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");
  if (nameValue && emailValue && addressValue) {
    formData.innerHTML = `<p>Form Submited By: ${nameValue} <br /> Email Address: ${emailValue} <br /> Address: ${addressValue}`;
    // console.log(nameValue);
    errorText.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  } else {
    errorText.innerHTML =
      '<p style="color:#00ffd5;">Please Fill The Form !</p>';
    formData.innerHTML = "";
  }
});
