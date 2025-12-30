/* ===== PASSWORD ===== */
let inputPass = "";
const correctPass = "04122541";

function addNum(num) {
  if (inputPass.length < 8) {
    inputPass += num;
    updateDisplay();
  }
}

function clearPass() {
  inputPass = "";
  updateDisplay();
}

function updateDisplay() {
  const el = document.getElementById("passwordDisplay");
  if (el) el.innerText = "•".repeat(inputPass.length);
}

function checkPassword() {
  const msg = document.getElementById("message");
  const next = document.getElementById("nextBtn");

  if (inputPass === correctPass) {
    msg.innerText = "เก่งมากคั้บบิบี๋ 🥰🥰";
    next.style.display = "block";
  } else {
    msg.innerText = "รหัสยังไม่ถูกนะ 🥺";
    clearPass();
  }
}

function goHome() {
  window.location.href = "home.html";
}

/* ===== MEMORIES (June → December, หลายรูป) ===== */
const memories = {
  june: [],
  july: [],
  august: [],
  september: [],
  october: [],
  november: [],
  december: []
};

/*
ตัวอย่าง:
june: [
  "images/june/24-june-1.jpg",
  "images/june/24-june-2.jpg"
]
*/

function showMonth(month) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  if (!memories[month] || memories[month].length === 0) {
    gallery.innerHTML = "<p>ยังไม่มีรูปเดือนนี้ 💕</p>";
    return;
  }

  memories[month].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}

/* ===== CALENDAR (REAL-TIME) ===== */
// 1 November เวลา 18:00
const startDate = new Date("2024-11-01T18:00:00");

function updateTimeTogether() {
  const now = new Date();
  const diff = now - startDate;
  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const el = document.getElementById("timeTogether");
  if (el) {
    el.innerText =
      `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds 💕`;
  }
}

setInterval(updateTimeTogether, 1000);

/* ===== NOTES ===== */
function openNote() {
  document.getElementById("popup").style.display = "block";
}

function closeNote() {
  document.getElementById("popup").style.display = "none";
}
