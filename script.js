/* PASSWORD */
let inputPass = "";
const correctPass = "04122541";

function addNum(n){
  if(inputPass.length<8){
    inputPass+=n;
    updateDisplay();
  }
}
function clearPass(){ inputPass=""; updateDisplay(); }
function updateDisplay(){
  document.getElementById("passwordDisplay").innerText="•".repeat(inputPass.length);
}
function checkPassword(){
  const msg=document.getElementById("message");
  const next=document.getElementById("nextBtn");
  if(inputPass===correctPass){
    msg.innerText="เก่งมากคั้บบิบี๋ 🥰🥰";
    next.style.display="inline-block";
  }else{
    msg.innerText="รหัสยังไม่ถูกนะ 🥺";
    clearPass();
  }
}
function goHome(){ window.location.href="home.html"; }

/* MEMORIES */
const images={
  june:["27-June-1.JPG","27-June-2.JPG","27-June-3.JPG"],
  july:["4-July.JPG","9-July.jpg","27-July.JPG"],
  august:["6-August.JPG","26-August.JPG","27-August.JPG","29-August.JPG","30-August.PNG"],
  september:["1-September.JPG","2-September.JPG","3-September.JPG"],
  october:["8-October.JPG","10-October.JPG","30-October.JPG"],
  november:["1-November-1.JPG","1-November-2.JPG","1-November-3.JPG","1-November-4.JPG",
    "2-November-1.JPG","2-November-2.JPG","2-November-3.JPG","2-November-4.JPG",
    "2-November-5.JPG","2-November-6.PNG","12-November.JPG","13-November-1.JPG",
    "13-November-2.JPG","15-November.JPG"],
  december:["4-December.PNG","24-December.PNG"]
};

let currentImages=[],currentIndex=0,currentMonth="";
const img=document.getElementById("memoryImg");
const slider=document.getElementById("slider");

function preload(list,folder){
  list.forEach(f=>{const i=new Image();i.src=`${folder}/${f}`;});
}
function showMonth(m){
  currentMonth=m;
  currentImages=images[m];
  currentIndex=0;
  preload(currentImages,cap(m));
  img.src=`${cap(m)}/${currentImages[0]}`;
}
function cap(t){return t.charAt(0).toUpperCase()+t.slice(1);}

let startX=0;
slider?.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
slider?.addEventListener("touchend",e=>swipe(e.changedTouches[0].clientX));
slider?.addEventListener("mousedown",e=>startX=e.clientX);
slider?.addEventListener("mouseup",e=>swipe(e.clientX));
function swipe(end){
  if(end<startX-50 && currentIndex<currentImages.length-1) currentIndex++;
  if(end>startX+50 && currentIndex>0) currentIndex--;
  img.src=`${cap(currentMonth)}/${currentImages[currentIndex]}`;
}

/* CALENDAR */
const startDate=new Date("2025-11-01T18:00:00");
setInterval(()=>{
  const d=Date.now()-startDate;
  if(d<0) return;
  const days=Math.floor(d/86400000);
  const h=Math.floor(d/3600000)%24;
  const m=Math.floor(d/60000)%60;
  const s=Math.floor(d/1000)%60;
  const el=document.getElementById("timeTogether");
  if(el) el.innerText=`${days} days ${h} hours ${m} minutes ${s} seconds 💕`;
},1000);

/* NOTES */
function openNote(){document.getElementById("popup").style.display="flex";}
function closeNote(){document.getElementById("popup").style.display="none";}
