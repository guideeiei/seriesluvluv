function checkpassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "04122541";

  if (input === correctPassword) {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Wrong date";
  }
}
