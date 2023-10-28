var menoBtm = document.getElementById("menoBtn");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNave");

menoBtm.onclick = function() {
    if (sideNav.style.right ==="-200px") {
        sideNav.style.right = "0"
        menu.src = "Photo/close.png"
    }
    else {
        sideNav.style.right = "-200px"
        menu.src = "Photo/meno.png"
    }
}