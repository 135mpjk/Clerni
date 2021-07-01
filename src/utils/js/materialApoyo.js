function onMyLoad(){
    materialDeApoyo() //Apenas se cargue la pagina, esta sección aparecerá
}
// Cambio de paginas
function materialDeApoyo(){
    introMaterial = document.getElementsByClassName("MaterialdeApoyoInicio")[0];
    introMaterial.style.display = "flex";
    principal = document.getElementsByClassName("MaterialdeApoyoNivelIntro")[0];
    principal.style.display = "none";
    segundo = document.getElementsByClassName("MaterialdeApoyoNivelA1")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("MaterialdeApoyoNivelA2")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("MaterialdeApoyoNivelB1")[0];
    cuarto.style.display = "none";
    quinto = document.getElementsByClassName("MaterialdeApoyoNivelB2")[0];
    quinto.style.display = "none";
}
function intro(){
    introMaterial = document.getElementsByClassName("MaterialdeApoyoInicio")[0];
    introMaterial.style.display = "none";
    principal = document.getElementsByClassName("MaterialdeApoyoNivelIntro")[0];
    principal.style.display = "flex";
    segundo = document.getElementsByClassName("MaterialdeApoyoNivelA1")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("MaterialdeApoyoNivelA2")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("MaterialdeApoyoNivelB1")[0];
    cuarto.style.display = "none";
    quinto = document.getElementsByClassName("MaterialdeApoyoNivelB2")[0];
    quinto.style.display = "none";
}
function nivelA1(){
    introMaterial = document.getElementsByClassName("MaterialdeApoyoInicio")[0];
    introMaterial.style.display = "none";
    principal = document.getElementsByClassName("MaterialdeApoyoNivelIntro")[0];
    principal.style.display = "none";
    segundo = document.getElementsByClassName("MaterialdeApoyoNivelA1")[0];
    segundo.style.display = "flex";
    tercero = document.getElementsByClassName("MaterialdeApoyoNivelA2")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("MaterialdeApoyoNivelB1")[0];
    cuarto.style.display = "none";
    quinto = document.getElementsByClassName("MaterialdeApoyoNivelB2")[0];
    quinto.style.display = "none";
}
function nivelA2(){
    introMaterial = document.getElementsByClassName("MaterialdeApoyoInicio")[0];
    introMaterial.style.display = "none";
    principal = document.getElementsByClassName("MaterialdeApoyoNivelIntro")[0];
    principal.style.display = "none";
    segundo = document.getElementsByClassName("MaterialdeApoyoNivelA1")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("MaterialdeApoyoNivelA2")[0];
    tercero.style.display = "flex";
    cuarto = document.getElementsByClassName("MaterialdeApoyoNivelB1")[0];
    cuarto.style.display = "none";
    quinto = document.getElementsByClassName("MaterialdeApoyoNivelB2")[0];
    quinto.style.display = "none";
}
function nivelB1(){
    introMaterial = document.getElementsByClassName("MaterialdeApoyoInicio")[0];
    introMaterial.style.display = "none";
    principal = document.getElementsByClassName("MaterialdeApoyoNivelIntro")[0];
    principal.style.display = "none";
    segundo = document.getElementsByClassName("MaterialdeApoyoNivelA1")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("MaterialdeApoyoNivelA2")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("MaterialdeApoyoNivelB1")[0];
    cuarto.style.display = "flex";
    quinto = document.getElementsByClassName("MaterialdeApoyoNivelB2")[0];
    quinto.style.display = "none";
}
function nivelB2(){
    introMaterial = document.getElementsByClassName("MaterialdeApoyoInicio")[0];
    introMaterial.style.display = "none";
    principal = document.getElementsByClassName("MaterialdeApoyoNivelIntro")[0];
    principal.style.display = "none";
    segundo = document.getElementsByClassName("MaterialdeApoyoNivelA1")[0];
    segundo.style.display = "none";
    tercero = document.getElementsByClassName("MaterialdeApoyoNivelA2")[0];
    tercero.style.display = "none";
    cuarto = document.getElementsByClassName("MaterialdeApoyoNivelB1")[0];
    cuarto.style.display = "none";
    quinto = document.getElementsByClassName("MaterialdeApoyoNivelB2")[0];
    quinto.style.display = "flex";
}
