function onMyLoad(){
	indicativo();
}
function indicativo(){
	let numeros =["Afganistán +93",
        "Albania +355",
        "Argelia +213",
        "Samoa Americana +1",
        "Andorra +376",
        "Angola +244",
        "Anguila +1",
        "Antigua y Barbuda +1",
        "Argentina +54",
        "Armenia +374",
        "Aruba +297",
        "Australia +61",
        "Austria +43",
        "Azerbaiyán +994",
        "Bahamas +1",
        "Baréin +973",
        "Bangladesh +880",
        "Barbados +1",
        "Belarús +375",
        "Bélgica +  32",
        "Belice +501",
        "Benín +229",
        "Bermudas +1",
        "Bután +975",
        "Bolivia +591",
        "Bonaire +599",
        "Bosnia y Herzegovina +387",
        "Brasil +55",
        "Brunéi +673",
        "Bulgaria +359",
        "Burkina Faso +226",
        "Burundi +257",
        "Camboya +855",
        "Camerún +237",
        "Canadá +1",
        "Cabo Verde +238",
        "Islas Caimán +1",
        "República Centroafricana +236",
        "Chile +56",
        "China +86",
        "Colombia +57",
        "Congo +242",
        "Islas Cook +682",
        "Costa Rica +506",
        "Croacia +385",
        "Cuba +53",
        "Chipre +357",
        "República Checa +420",
        "Dinamarca +45",
        "Yibuti +253",
        "Dominica +1",
        "República Dominicana +1",
        "Ecuador +593",
        "Egipto +20",
        "El Salvador +503",
        "Guinea Ecuatorial +240",
        "Eritrea +291",
        "Estonia +372",
        "Etiopía +251",
        "Islas Malvinas +500",
        "Islas Feroe +298",
        "Fiyi +679",
        "Finlandia +358",
        "Francia +33",
        "Guayana Francesa +594",
        "Polinesia Francesa +689",
        "Gabón +241",
        "Gambia +220",
        "Georgia +995",
        "Alemania +49",
        "Ghana +233",
        "Gibraltar +350",
        "Grecia +30",
        "Groenlandia +299",
        "Granada +1",
        "Guam +1",
        "Guatemala +502",
        "Haití +509",
        "Honduras +504",
        "Hong Kong +852",
        "Hungría +36",
        "Islandia +354",
        "India +91",
        "Indonesia +62",
        "Irán +98",
        "Irak +964",
        "Irlanda +353",
        "Israel +972",
        "Italia +39",
        "Jamaica +1",
        "Japón +81",
        "Jordania +962",
        "Kazajistán +7",
        "Kenia +254",
        "Kuwait +965",
        "Kirguistán +996",
        "Laos +856",
        "Letonia +371",
        "Líbano +961",
        "Lesoto +266",
        "Liberia +231",
        "Libia +218",
        "Liechtenstein +423",
        "Lituania +370",
        "Luxemburgo +352",
        "Macedonia +389",
        "Madagascar +261",
        "Malawi +265",
        "Malasia +60",
        "Maldivas +960",
        "Malí +223",
        "Malta +356",
        "Martinica +596",
        "Mauritania +222",
        "Mauricio +230",
        "México +52",
        "Micronesia +691",
        "Moldova +373",
        "Mónaco +377",
        "Mongolia +976",
        "Montenegro +382",
        "Marruecos +212",
        "Myanmar +95",
        "Namibia +264",
        "Nepal +977",
        "Países Bajos +31",
        "Nueva Caledonia +687",
        "Nueva Zelanda +64",
        "Nicaragua +505",
        "Níger +227",
        "Nigeria +234",
        "Corea del Norte +850",
        "Islas Marianas del Norte +1",
        "Noruega +47",
        "Omán +968",
        "Pakistán +92",
        "Palaos +680",
        "Panamá +507",
        "Papúa Nueva Guinea +675",
        "Paraguay +595",
        "Perú +51",
        "Filipinas +63",
        "Polonia +48",
        "Portugal +351",
        "Puerto Rico +1",
        "Qatar +974",
        "Reunión +262",
        "Rumania +40",
        "Rusia +7",
        "Ruanda +250",
        "Santa Lucía +1",
        "Samoa +685",
        "Arabia Saudí +966",
        "Senegal +221",
        "Serbia +381",
        "Seychelles +248",
        "Sierra Leona +232",
        "Singapur +65",
        "Sint Maarten +1",
        "Eslovaquia +421",
        "Eslovenia +386",
        "Islas Salomón +677",
        "Somalia +252",
        "Sudáfrica +27",
        "Corea del Sur +82",
        "Sudán del Sur +211",
        "España +34",
        "Sri Lanka +94",
        "Sudán +249",
        "Surinam +597",
        "Suazilandia +268",
        "Suecia +46",
        "Suiza +41",
        "Siria +963",
        "Taiwán +886",
        "Tayikistán +992",
        "Tanzania +255",
        "Tailandia +66",
        "Timor-Leste +670",
        "Togo +228",
        "Tonga +676",
        "Trinidad y Tobago +1",
        "Túnez +216",
        "Turquía +90",
        "Turkmenistán +993",
        "Tuvalu +688",
        "Emiratos Árabes Unidos +971",
        "Uganda +256",
        "Reino Unido +44",
        "Ucrania +380",
        "Uruguay +598",
        "Estados Unidos +1",
        "Uzbekistán +998",
        "Vanuatu +678",
        "Venezuela +58",
        "Vietnam +84",
        "Yemen +967",
        "Zambia +260",
        "Zimbabue +263"];
	for (let i in numeros)
		{document.getElementById("indicativo").innerHTML += "<option value='"+ numeros[i] +"'>"+ numeros[i]+"</option>";}
	
}
let radios = document.querySelectorAll("[type='radio']");
   radios.forEach((x)=>{
     x.dataset.val = x.checked; // guardamos el estado del radio button dentro del elemento
     x.addEventListener('click',(e)=>{
       let element = e.target;
       if(element.dataset.val == 'false'){
         element.dataset.val = 'true';
         element.checked = true;
       }else{
         element.dataset.val = 'false';
         element.checked = false;
       }
     },true);
   });