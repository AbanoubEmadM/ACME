let resultsData = {
    image:"../imgs/big-message.png",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto perspiciatis praesentium a corporis cumque delectus vero ratione ipsam deserunt nemo veniam, unde eius",
    btn:"See More"
}

let resultItem = `
    <div class="result-item">
        <img src=${resultsData.image}>
        <p>${resultsData.desc}</p>
        <button class="result-btn" id="result-btn">${resultsData.btn}</button>
    </div>
`
document.getElementById("results-container").innerHTML = resultItem.repeat(6)

let resultBtn = document.querySelectorAll(".result-btn");

for(btn of resultBtn){
    btn.addEventListener("click",()=>{
        window.location = '../html/insert-info.html';
    })
}