let inputs = Array.from(document.querySelectorAll(".insert-info form input"))
let sumbitBtn = document.getElementById("submit-btn");

let fileF = document.getElementById("file")
let locationF = document.getElementById("locationF")
let bedroomF = document.getElementById("bedroom")
let kitchenF = document.getElementById("kitchen")
let livingF = document.getElementById("livingF")
let toiletsF = document.getElementById("toilets")
let featuresF = document.getElementById("features")
let nameF = document.getElementById("name")
let telF = document.getElementById("tel")
let emailF = document.getElementById("email")

sumbitBtn.onclick = function(e){
    if(fileF.value !== "" && locationF.value !== "" && bedroomF.value !== "" && kitchenF.value !== "" && livingF.value !== "" && 
    toiletsF.value !== "" && featuresF.value !== "" && nameF.value !== "" && telF.value !== "" && emailF.value !== ""){
        if(localStorage.getItem("user_name")){
            window.location = '../html/payment.html';
            localStorage.setItem("file",fileF.value);
            localStorage.setItem("location",locationF.value);
            localStorage.setItem("bedroom",bedroomF.value);
            localStorage.setItem("living",livingF.value);
            localStorage.setItem("toilets",toiletsF.value);
            localStorage.setItem("features",featuresF.value);
            localStorage.setItem("name",nameF.value);
            localStorage.setItem("tel",telF.value);
            localStorage.setItem("email",emailF.value);   

        }else{
            window.location = '../html/register.html'
        }
    }else{
        e.preventDefault()
    }
}
