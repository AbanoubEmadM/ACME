let inputs = document.querySelectorAll(".register-form input")
let loginOrRegister = document.getElementById("login-register")
let registerlink = document.getElementById("reg-link");

let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let email = document.getElementById("email");
let address = document.getElementById("address");
let password = document.getElementById("password");
let cPassword = document.getElementById("cpassword");



registerlink.onclick = function(e){
    e.preventDefault();

    if(fName.value === "" || lName.value === "" || email.value === "" || address.value === "" || password.value === "" || cPassword.value === ""){
        alert("Please Write Your Info");
        localStorage.removeItem("user_name");
    }
    else if(password.value !== cPassword.value){
        alert(" 'Password' Doesnt Match 'Confirm Password' ")
        password.style.border = '1px solid red';
        cPassword.style.border = '1px solid red';
    }

    else{
        localStorage.setItem("user_name",`${fName.value} ${lName.value}`)
        window.location = '../html/main-page.html'
    }
}
if(localStorage.getItem("user_name")){
    loginOrRegister.innerHTML = localStorage.getItem("user_name")
}else{
    loginOrRegister.innerHTML = `login | Register`

}
