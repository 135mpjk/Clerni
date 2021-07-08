function myFunctionMenu(){
    check = document.getElementById("boton_menu");
    if (check.checked) {
        document.getElementById("menu_r").classList.add("menu_r1");
    }
    else {
        document.getElementById("menu_r").classList.remove("menu_r1");
    }
}