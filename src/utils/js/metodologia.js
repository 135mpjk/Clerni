/* ..........modales ........*/ 

/*modal1*/
function modalChildrens(){
	document.getElementById("modalNiños").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[0];

	cerrar.onclick = function() {
		document.getElementById("modalNiños").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

/*modal2*/
function modalAdults(){
	document.getElementById("ModalAdulto").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[1];

	cerrar.onclick = function() {
		document.getElementById("ModalAdulto").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

/*modal3*/
function modalInstitutions(){
	document.getElementById("ModalInstitucion").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[2];

	cerrar.onclick = function() {
		document.getElementById("ModalInstitucion").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

/*modal4*/
function modalBussines(){
	document.getElementById("ModalEmpresa").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[3];

	cerrar.onclick = function() {
		document.getElementById("ModalEmpresa").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

/*fondo*/
