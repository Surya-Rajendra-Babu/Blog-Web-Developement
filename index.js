const menuIcon = document.getElementById("menu-bar-icon");
const menu = document.getElementById("menu-icon");
menuIcon?.addEventListener("click", () =>{
    if(menu?.className == 'hidden'){
        menu.classList.remove("hidden");
    } else{
        menu.classList.add("hidden");
    }
} )