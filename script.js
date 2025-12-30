let inputPassword = "";
const correctPassword = "4122541"; 
// 4/12/2541 (ไม่มี /)

function pressKey(num) {
  if (inputPassword.length < 10) {
    inputPassword += num;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("passwordDisplay").innerText =
    "•".repeat(inputPassword.length);
}

function clearPassword() {
  inputPassword = "";
  updateDisplay();
}

function checkPassword() {
  if (inputPassword === correctPassword) {
    window.location.href = "home.html";
  } else {
    alert("Wrong password 💔");
    clearPassword();
  }
}
