var accordion = document.getElementsByClassName("panel-show")
//loop on accordion to handle active
for(i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
       let panel = this.nextElementSibling;
       if(panel.classList.contains("active")){
            panel.classList.remove("active")
       }else{
        panel.classList.add("active")
       }
    })
}

let startBtn = document.getElementById("start")
startBtn.onclick = function(){
    window.location = '../html/search.html'

}