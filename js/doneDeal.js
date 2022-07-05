
let bookItems = document.getElementById("book")


if(localStorage.getItem("result_item")){
    bookItems.innerHTML = `${localStorage.getItem("result_item")}`
}else{
    bookItems.innerHTML = `You Have No Deals!`
}