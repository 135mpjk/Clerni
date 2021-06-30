
/* ..........modales ........*/ 
function modalAries(){
	document.getElementById("modalAries").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[0];

	cerrar.onclick = function() {
		document.getElementById("modalAries").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}
