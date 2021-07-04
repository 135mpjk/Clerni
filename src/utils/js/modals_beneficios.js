/* ..........modales ........*/ 

/*modal1*/
function paypal(){
	document.getElementById("modal_paypal").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[0];

	cerrar.onclick = function() {
		document.getElementById("modal_paypal").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

/*modal2*/
function Nequi(){
	document.getElementById("modal_nequi").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[1];

	cerrar.onclick = function() {
		document.getElementById("modal_nequi").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

/*modal3*/
function BanColom(){
	document.getElementById("modal_bancolombia").style.display="block"; // Esto muestra la informacion 

	var cerrar = document.getElementsByClassName("close")[2];

	cerrar.onclick = function() {
		document.getElementById("modal_bancolombia").style.display= "none";//Esto es para que aparezca la X para cerrar
	}
}

