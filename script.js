/* ===== PASSWORD ===== */
let inputPass = "";
const correctPass = "04122541";

function addNum(n) {
  if (inputPass.length >= 8) return;
  inputPass += n;
  document.getElementById("passwordDisplay").innerText =
    "•".repeat(inputPass.length);
}

function clearPass() {
  inputPass = "";
  document.getElementById("passwordDisplay").innerText = "";
}

function checkPass() {
  const msg = document.getElementById("message");
  const next = document.getElementById("nextBtn");

  if (inputPass === correctPass) {
    msg.innerText = "เก่งมากคั้บบิบี๋ 🥰🥰";
    next.style.display = "block";
  } else {
    msg.innerText = "ยังไม่ถูกนะ ลองใหม่อีกครั้ง 💕";
    clearPass();
  }
}

function goHome() {
  window.location.href = "home.html";
}

/* ===== MEMORIES ===== */
const memories = {
  june: ["27-June-1.JPG","27-June-2.JPG","27-June-3.JPG"],
  july: ["4-July.JPG","9-July.jpg","27-July.JPG"],
  august: ["6-August.JPG","26-August.JPG","27-August.JPG","29-August.JPG","30-August.PNG"],
  september: ["1-September.HEIC","2-September.HEIC","3-September.JPG"],
  october: ["8-October.HEIC","10-October.HEIC","30-October.HEIC"],
  november: ["1-November-1.JPG","1-November-2.HEIC","1-November-3.JPG"],
  december: ["4-December.PNG","24-December.PNG"]
};

function openMonth(month) {
  document.getElementById("monthGrid").style.display = "none";
  const g = document.getElementById("gallery");
  g.classList.remove("hidden");
  g.innerHTML = "";

  memories[month].forEach(file => {
    const img = document.createElement("img");
    img.src = `${month.charAt(0).toUpperCase() + month.slice(1)}/${file}`;
    g.appendChild(img);
  });
}

function backToMonths() {
  document.getElementById("gallery").classList.add("hidden");
  document.getElementById("monthGrid").style.display = "grid";
}

/* ===== CALENDAR ===== */
const startDate = new Date("2024-11-01T18:00:00");

setInterval(() => {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  const el = document.getElementById("timeTogether");
  if (el)
    el.innerText = `${days} days ${hours} hours ${mins} minutes ${secs} seconds 💕`;
}, 1000);

/* ===== NOTES ===== */
function openNote() {
  document.getElementById("popup").style.display = "block";
}
function closeNote() {
  document.getElementById("popup").style.display = "none";
}
