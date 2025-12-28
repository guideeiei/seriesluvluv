function checkpassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "4/12/2541";

  if (input === correctPassword) {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Wrong date";
  }
}
