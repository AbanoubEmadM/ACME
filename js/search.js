var boxes = Array.from(document.querySelectorAll(".home-page-slides-imgs img"));
var next = document.getElementById("next");
var prev = document.getElementById("prev");
let index = 4;
let zero = 0;
//set active in first four images
for(i = 0; i <= index; i++){
    boxes[i].classList.add("active")
}
//increment images by one
next.addEventListener("click",()=>{
    theChecker()
    boxes[++zero].classList.remove("active")
    boxes[++index].classList.add("active");
})
//decrement images by one
prev.addEventListener("click",()=>{
    boxes[index--].classList.remove("active");
    boxes[zero--].classList.add("active");
    theChecker()
})
//check the number of elements
function theChecker(){
    if(index === 8){
        next.style.pointerEvents = 'none'
    }
    else{
        next.style.pointerEvents = 'all'
    }
    if(zero === 0){
        prev.style.pointerEvents = 'none'
    }
    else{
        prev.style.pointerEvents = 'all'
    }
}
theChecker()

//declare inputs
let searchBtn = document.getElementById("search");
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");
let whereToGo = document.getElementById("where-to-go");

//check values of inputs
searchBtn.onclick = function(e){
    e.preventDefault();
    if(checkIn.value == "" || checkOut.value == "" || whereToGo.value == ""){
        alert("Write The Info")
    }else{
        window.location = "../html/results.html"

    }
}