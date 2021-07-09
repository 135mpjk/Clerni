/* ..........modales ........*/ 

/*modal1*/
function modalChildrens(){
	document.getElementById("modalNiños").style.display="block"; // Esto muestra la informacion
	document.getElementsByClassName("metodologiaSection")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3;
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;
	

	var cerrar = document.getElementsByClassName("close")[0];

	cerrar.onclick = function() {
		document.getElementById("modalNiños").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("metodologiaSection")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
	}
}

/*modal2*/
function modalAdults(){
	document.getElementById("ModalAdulto").style.display="block"; // Esto muestra la informacion
	document.getElementsByClassName("metodologiaSection")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3;
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;

	var cerrar = document.getElementsByClassName("close")[1];

	cerrar.onclick = function() {
		document.getElementById("ModalAdulto").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("metodologiaSection")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
	}
}

/*modal3*/
function modalInstitutions(){
	document.getElementById("ModalInstitucion").style.display="block"; // Esto muestra la informacion
	document.getElementsByClassName("metodologiaSection")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3;
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;

	var cerrar = document.getElementsByClassName("close")[2];

	cerrar.onclick = function() {
		document.getElementById("ModalInstitucion").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("metodologiaSection")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
	}
}

/*modal4*/
function modalBussines(){
	document.getElementById("ModalEmpresa").style.display="block"; // Esto muestra la informacion
	document.getElementsByClassName("metodologiaSection")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3;
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;

	var cerrar = document.getElementsByClassName("close")[3];

	cerrar.onclick = function() {
		document.getElementById("ModalEmpresa").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("metodologiaSection")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
	}
}

/*fondo*/
