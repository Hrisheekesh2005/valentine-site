function yesPage(){
window.location.href="yes.html";
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