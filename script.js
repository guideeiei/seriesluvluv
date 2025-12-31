let inputPass="";
const correctPass="2541";

function addNum(num){
  if(inputPass.length<4){
    inputPass+=num;
    updateDisplay();
  }
}
function clearPass(){
  inputPass="";
  updateDisplay();
}
function updateDisplay(){
  document.getElementById("passwordDisplay").innerText="•".repeat(inputPass.length);
}
function checkPassword(){
  const msg=document.getElementById("message");
  const next=document.getElementById("nextBtn");
  if(inputPass===correctPass){
    msg.innerText="เก่งมากคั้บบิบี๋ 🥰";
    next.style.display="block";
  }else{
    msg.innerText="รหัสยังไม่ถูกนะ 🥺";
    clearPass();
  }
}
function goHome(){location.href="home.html";}

/* MEMORIES */
const images={
  june:["27-June-1.JPG","27-June-2.JPG","27-June-3.JPG"], // (ไม่ต้องแก้)
  july:["4-July.JPG","9-July.jpg","27-July.JPG"], // (ไม่ต้องแก้)
  august:["6-August.JPG","26-August.JPG","27-August.JPG","29-August.JPG","30-August.PNG"], // (ไม่ต้องแก้)
  september:["1-September.jpeg","2-September.jpeg","3-September.jpeg"], // (ไม่ต้องแก้)
  october:["8-October.jpeg","10-October.jpeg","30-October.jpeg"], // (ไม่ต้องแก้)
  november:["1-November-2.jpeg","1-November-4.jpeg","12-November.jpeg","2-November-6.png"], // (ไม่ต้องแก้)
  december:["4-December.PNG","24-December.PNG"] // (ใหม่)
};

let currentImages=[],currentIndex=0,currentMonth="";
const img=document.getElementById("memoryImg");
const slider=document.getElementById("slider");

function showMonth(month){
  currentMonth=month;
  currentImages=images[month];
  currentIndex=0;
  img.src=`${month.charAt(0).toUpperCase()+month.slice(1)}/${currentImages[0]}`;
}

let startX=0;
slider?.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
slider?.addEventListener("touchend",e=>handleSwipe(e.changedTouches[0].clientX));

function handleSwipe(endX){
  if(endX<startX-50 && currentIndex<currentImages.length-1) currentIndex++;
  if(endX>startX+50 && currentIndex>0) currentIndex--;
  img.src=`${currentMonth.charAt(0).toUpperCase()+currentMonth.slice(1)}/${currentImages[currentIndex]}`;
}

/* ===== CALENDAR ===== */
const startDate=new Date("2025-11-01T18:00:00");
setInterval(()=>{
  const diff=new Date()-startDate;
  if(diff<0)return;
  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff/3600000)%24;
  const m=Math.floor(diff/60000)%60;
  const s=Math.floor(diff/1000)%60;
  const el=document.getElementById("timeTogether");
  if(el) el.innerText=`${d} days ${h} hours ${m} minutes ${s} seconds 💕`;
},1000);

/* ===== NOTES ===== */
function openNote(){document.getElementById("popup").style.display="flex";}
function closeNote(){document.getElementById("popup").style.display="none";}
