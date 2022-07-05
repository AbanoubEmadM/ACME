let registerBtn = document.getElementById("login-register");
if(localStorage.getItem("user_name")){
    let registerLink = document.createElement("a");
    registerLink.href = '../html/done-deal.html';
    registerBtn.innerHTML = ''
    registerLink.innerHTML = localStorage.getItem("user_name");
    registerBtn.appendChild(registerLink)
}
let items = document.getElementById("items");

if(localStorage.getItem("user_name")){
    let doneDealItem = document.createElement("li");
    let doneDealLink = document.createElement("a");
    doneDealLink.innerHTML = "Done Deal";
    doneDealLink.href = '../html/done-deal.html';
    document.body.append(doneDealItem)
    doneDealItem.appendChild(doneDealLink);
    items.appendChild(doneDealItem)

    let insertInfo = document.createElement("li");
    let insertInfoLink = document.createElement("a");
    insertInfoLink.innerHTML = "My Info";
    insertInfoLink.href = '../html/my-info.html';
    document.body.append(insertInfo)
    insertInfo.appendChild(insertInfoLink);
    items.appendChild(insertInfo)

    
}