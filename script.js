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
  june: ["27-June-1.JPG","27-June-2.JPG","27-June-3.JPG"],
  july: ["4-July.JPG","9-July.jpg","27-July.JPG"],
  august: ["6-August.JPG","26-August.JPG","27-August.JPG","29-August.JPG","30-August.PNG"],
  september: ["1-September.HEIC","2-September.HEIC","3-September.JPG"],
  october: ["8-October.HEIC","10-October.HEIC","30-October.HEIC"],
  november: ["1-November-1.JPG","1-November-2.HEIC","1-November-3.JPG","1-November-4.HEIC"
            ,"2-November-1.JPG","2-November-2.JPG","2-November-3.JPG","2-November-4.JPG"
            ,"2-November-5.JPG","2-November-6.PNG","12-November.HEIC","13-November-1.JPG"
            ,"13-November-2.JPG","15-November.JPG"],
  december: ["4-December.PNG","24-December.PNG"]
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
