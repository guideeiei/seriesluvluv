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
  june: ["27-June-1.jpg","27-June-2.jpg","27-June-3.jpg"],
  july: ["4-July.jpg","9-July.jpg","27-July.jpg"],
  august: ["6-August.jpg","26-August.jpg","27-August.jpg","29-August.jpg","30-August.png"],
  september: ["1-September.heif","2-September.heif","3-September.jpg"],
  october: ["8-October.heif","10-October.heif","30-October.heif"],
  november: ["1-November-1.jpg","1-November-2.heif","1-November-3.jpg","1-November-4.heif"
            ,"2-November-1.jpg","2-November-2.jpg","2-November-3.jpg","2-November-4.jpg"
            ,"2-November-5.jpg","2-November-6.png","12-November.heif","13-November-1.jpg"
            ,"13-November-2.jpg","15-November.jpg"],
  december: ["4-December.png","24-December.png"]
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
