function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "04122541";

  if (input === correctPassword) {
    window.location.href = "success.html";
  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
}
