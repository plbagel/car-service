function dropdown() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.navbar-flex_menu-btn')) {

    var dropdowns = document.getElementsByClassName("menu_dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}