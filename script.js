function yesPage(){

for(let i=0;i<50;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="8px";
confetti.style.height="8px";
confetti.style.backgroundColor="white";
confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-10px";
confetti.style.opacity=1;
confetti.style.transform="rotate("+Math.random()*360+"deg)";
confetti.style.transition="transform 3s linear, top 3s linear";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.style.top="100vh";
confetti.style.transform="rotate(720deg)";
},50);

setTimeout(()=>{
confetti.remove();
},3000);

}

setTimeout(()=>{
window.location.href="yes.html";
},1500);

}

function nextPage(){
window.location.href="memories.html";
}

function finalPage(){
window.location.href="final.html";
}

let no=document.getElementById("no");

if(no){

no.onmouseover=function(){

let x=Math.random()*(window.innerWidth-100);
let y=Math.random()*(window.innerHeight-50);

no.style.position="absolute";
no.style.left=x+"px";
no.style.top=y+"px";

}

}

let photos = document.querySelectorAll(".gallery img");

photos.forEach(photo => {

photo.addEventListener("mouseenter", function(){

for(let i=0;i<5;i++){

let heart=document.createElement("div");
heart.classList.add("heart");

heart.style.left=Math.random()*100+"%";
heart.style.top=Math.random()*100+"%";

photo.parentElement.appendChild(heart);

setTimeout(()=>{
heart.remove();
},2000);

}

});

});
/* floating hearts generator */

setInterval(()=>{

let heart=document.createElement("div");
heart.classList.add("heart-bg");

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(Math.random()*3+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},500);
