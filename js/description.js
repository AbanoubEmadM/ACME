let resultImgs = Array.from(document.querySelectorAll(".result-desc-img img"));
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let index = 0;
let paginations = Array.from(document.querySelectorAll(".result-desc .paginations span"));
paginations[0].classList.add("active")
resultImgs[0].classList.add("active");

next.addEventListener("click",()=>{
    ++index;
    theChecker();
    for(x in resultImgs){
        resultImgs[x].classList.remove("active");
        paginations[x].classList.remove("active")
    }
    resultImgs[index].classList.add("active");
    paginations[index].classList.add("active")
})
prev.addEventListener("click",()=>{
    --index;
    theChecker();
    for(x in resultImgs){
        resultImgs[x].classList.remove("active");
        paginations[x].classList.remove("active")
    }
    resultImgs[index].classList.add("active");
    paginations[index].classList.add("active")
})
function theChecker(){
    if(index === 1){
        next.style.pointerEvents = 'none';
    }else{
        next.style.pointerEvents = 'all';
    }
    if(index === 0){
        prev.style.pointerEvents = 'none';
    }else{
        prev.style.pointerEvents = 'all';
    }
}
theChecker();

let doneDealBtn = document.getElementById("done-deal-btn")
let doneDealLink = document.getElementById("done-deal-link")
doneDealBtn.addEventListener("click",()=>{
    if(localStorage.getItem("user_name")){
        window.location = '../html/insert-info.html';
    }else{
        window.location = '../html/register.html';
    }
})