let userName = document.getElementById("username")
let password = document.getElementById("password")
let signInBtn = document.getElementById("sign-in")

signInBtn.onclick = function(){
    if(userName.value === "" || password.value === ""){
        alert("Please Write the required data")
    }else{
        localStorage.setItem("user_name",userName.value);
        registerBtn.innerHTML = localStorage.getItem("user_name"); 
        location.replace("../html/main-page.html")   
    }
}