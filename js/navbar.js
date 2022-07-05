let barsIcon = document.getElementById("fa-bars");
let navItems = document.getElementById("nav-items");

barsIcon.onclick = function(){
    if(navItems.style.display === 'block'){
        navItems.style.display = 'none';
    }else{
        navItems.style.display = 'block';

    }
}