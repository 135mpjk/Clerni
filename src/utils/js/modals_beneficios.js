/* ..........modales ........*/ 

/*modal1*/
function paypal(){
	document.getElementById("modal_paypal").style.display="block"; // Esto muestra la informacion

	//fondo opaco por sección
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;
	document.getElementsByClassName("cabecera_beneficios")[0].style.opacity=0.3;
	document.getElementsByClassName("titulo_porque")[0].style.opacity=0.3;
	document.getElementsByClassName("razones")[0].style.opacity=0.3;
	document.getElementsByClassName("razones")[1].style.opacity=0.3;
	document.getElementsByClassName("razones")[2].style.opacity=0.3;
	document.getElementsByClassName("razones")[3].style.opacity=0.3;
	document.getElementsByClassName("abajo_beneficios")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3;


	var cerrar = document.getElementsByClassName("close")[0];

	cerrar.onclick = function() {
		document.getElementById("modal_paypal").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
		document.getElementsByClassName("cabecera_beneficios")[0].style.opacity=1;
		document.getElementsByClassName("titulo_porque")[0].style.opacity=1;
		document.getElementsByClassName("razones")[0].style.opacity=1;
		document.getElementsByClassName("razones")[1].style.opacity=1;
		document.getElementsByClassName("razones")[2].style.opacity=1;
		document.getElementsByClassName("razones")[3].style.opacity=1;
		document.getElementsByClassName("abajo_beneficios")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
	}
}

/*modal2*/
function Nequi(){
	document.getElementById("modal_nequi").style.display="block"; // Esto muestra la informacion
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;
	document.getElementsByClassName("cabecera_beneficios")[0].style.opacity=0.3;
	document.getElementsByClassName("titulo_porque")[0].style.opacity=0.3;
	document.getElementsByClassName("razones")[0].style.opacity=0.3;
	document.getElementsByClassName("razones")[1].style.opacity=0.3;
	document.getElementsByClassName("razones")[2].style.opacity=0.3;
	document.getElementsByClassName("razones")[3].style.opacity=0.3;
	document.getElementsByClassName("abajo_beneficios")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3;


	var cerrar = document.getElementsByClassName("close")[1];

	cerrar.onclick = function() {
		document.getElementById("modal_nequi").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
		document.getElementsByClassName("cabecera_beneficios")[0].style.opacity=1;
		document.getElementsByClassName("titulo_porque")[0].style.opacity=1;
		document.getElementsByClassName("razones")[0].style.opacity=1;
		document.getElementsByClassName("razones")[1].style.opacity=1;
		document.getElementsByClassName("razones")[2].style.opacity=1;
		document.getElementsByClassName("razones")[3].style.opacity=1;
		document.getElementsByClassName("abajo_beneficios")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
	}
}

/*modal3*/
function BanColom(){
	document.getElementById("modal_bancolombia").style.display="block"; // Esto muestra la informacion
	document.getElementsByClassName("contenedor_menu")[0].style.opacity=0.3;
	document.getElementsByClassName("cabecera_beneficios")[0].style.opacity=0.3;
	document.getElementsByClassName("titulo_porque")[0].style.opacity=0.3;
	document.getElementsByClassName("razones")[0].style.opacity=0.3;
	document.getElementsByClassName("razones")[1].style.opacity=0.3;
	document.getElementsByClassName("razones")[2].style.opacity=0.3;
	document.getElementsByClassName("razones")[3].style.opacity=0.3;
	document.getElementsByClassName("abajo_beneficios")[0].style.opacity=0.3;
	document.getElementsByClassName("piedePagina")[0].style.opacity=0.3; 

	var cerrar = document.getElementsByClassName("close")[2];

	cerrar.onclick = function() {
		document.getElementById("modal_bancolombia").style.display= "none";//Esto es para que aparezca la X para cerrar
		document.getElementsByClassName("contenedor_menu")[0].style.opacity=1;
		document.getElementsByClassName("cabecera_beneficios")[0].style.opacity=1;
		document.getElementsByClassName("titulo_porque")[0].style.opacity=1;
		document.getElementsByClassName("razones")[0].style.opacity=1;
		document.getElementsByClassName("razones")[1].style.opacity=1;
		document.getElementsByClassName("razones")[2].style.opacity=1;
		document.getElementsByClassName("razones")[3].style.opacity=1;
		document.getElementsByClassName("abajo_beneficios")[0].style.opacity=1;
		document.getElementsByClassName("piedePagina")[0].style.opacity=1;
	}
}

