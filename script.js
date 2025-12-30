/* ===== PASSWORD ===== */
let inputPass = "";
const correctPass = "04122541";

function addNum(num){
  if(inputPass.length < 8){
    inputPass += num;
    updateDisplay();
  }
}

function clearPass(){
  inputPass = "";
  updateDisplay();
}

function updateDisplay(){
  document.getElementById("passwordDisplay").innerText =
    "•".repeat(inputPass.length);
}

function checkPassword(){
  const msg = document.getElementById("message");
  const next = document.getElementById("nextBtn");

  if(inputPass === correctPass){
    msg.innerText = "เก่งมากคั้บบิบี๋ 🥰🥰";
    next.style.display = "block";
  } else {
    msg.innerText = "รหัสยังไม่ถูกนะ 🥺";
    clearPass();
  }
}

function goHome(){
  window.location.href = "home.html";
}

/* ===== MEMORIES (SWIPE IG) ===== */
const images = {
  june: ["27-June-1.JPG","27-June-2.JPG","27-June-3.JPG"],
  july: ["4-July.JPG","9-July.jpg","27-July.JPG"],
  august: ["6-August.JPG","26-August.JPG","27-August.JPG","29-August.JPG","30-August.PNG"],
  september: ["1-September.HEIC","2-September.HEIC","3-September.JPG"],
  october: ["8-October.HEIC","10-October.HEIC","30-October.HEIC"],
  november: [
    "1-November-1.JPG","1-November-2.HEIC","1-November-3.JPG","1-November-4.HEIC",
    "2-November-1.JPG","2-November-2.JPG","2-November-3.JPG","2-November-4.JPG",
    "2-November-5.JPG","2-November-6.PNG","12-November.HEIC","13-November-1.JPG",
    "13-November-2.JPG","15-November.JPG"
  ],
  december: ["4-December.PNG","24-December.PNG"]
};

let currentImages = [];
let currentIndex = 0;
let currentMonth = "";

const img = document.getElementById("memoryImg");
const slider = document.getElementById("slider");

function showMonth(month){
  currentMonth = month;
  currentImages = images[month];
  currentIndex = 0;
  if(currentImages.length > 0){
    img.src = `${capitalize(month)}/${currentImages[0]}`;
  }
}

function capitalize(m){
  return m.charAt(0).toUpperCase() + m.slice(1);
}

/* swipe */
let startX = 0;

slider?.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
});
slider?.addEventListener("touchend", e=>{
  handleSwipe(e.changedTouches[0].clientX);
});
slider?.addEventListener("mousedown", e=>{
  startX = e.clientX;
});
slider?.addEventListener("mouseup", e=>{
  handleSwipe(e.clientX);
});

function handleSwipe(endX){
  if(endX < startX - 50 && currentIndex < currentImages.length - 1){
    currentIndex++;
  }
  if(endX > startX + 50 && currentIndex > 0){
    currentIndex--;
  }
  img.src = `${capitalize(currentMonth)}/${currentImages[currentIndex]}`;
}

/* ===== CALENDAR ===== */
const startDate = new Date("2024-11-01T18:00:00");
setInterval(()=>{
  const now = new Date();
  const diff = now - startDate;
  if(diff < 0) return;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  const el = document.getElementById("timeTogether");
  if(el){
    el.innerText = `${d} days ${h} hours ${m} minutes ${s} seconds 💕`;
  }
},1000);

/* ===== NOTES ===== */
function openNote(){
  document.getElementById("popup").style.display="block";
}
function closeNote(){
  document.getElementById("popup").style.display="none";
}
