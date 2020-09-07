var persona = new Object();

persona.cedula = document.getElementById("cedula");
persona.nombre = document.getElementById("nombre");
persona.apellido = document.getElementById("apellido");
persona.edad = document.getElementById("edad");

var tabla1 = document.getElementById("tabla1");
var tabla2 = document.getElementById("tabla2");

var cod = document.getElementById("seleccion");
persona.cambio = document.getElementById("nuevoDato");

document.getElementById("modificar").hidden = true;

function mostrarDatos() {
	var tablaDatos = "";

	tablaDatos += "<tr>";
	tablaDatos += "<td>" + persona.cedula.value + "</td>";
	tablaDatos += "<td>" + persona.nombre.value + "</td>";
	tablaDatos += "<td>" + persona.apellido.value + "</td>";
	tablaDatos += "<td>" + persona.edad.value + "</td>";
	tablaDatos += "</tr>";

	tabla1.innerHTML = tablaDatos;

	document.getElementById("guardar").hidden = true;

	cedula.disabled = true;
	nombre.disabled = true;
	apellido.disabled = true;
	edad.disabled = true;

	document.getElementById("modificar").hidden = false;
}

function change() {

	var tablaDatos = "";

	console.log(cod.value);

	switch (parseInt(cod.value)) {
		case 1:
			tablaDatos += "<tr>";
			tablaDatos += "<td>" + persona.cambio.value + "</td>";
			tablaDatos += "<td>" + persona.nombre.value + "</td>";
			tablaDatos += "<td>" + persona.apellido.value + "</td>";
			tablaDatos += "<td>" + persona.edad.value + "</td>";
			tablaDatos += "</tr>";
			break;
		case 2:
			console.log(2);
			tablaDatos += "<tr>";
			tablaDatos += "<td>" + persona.cedula.value + "</td>";
			tablaDatos += "<td>" + persona.cambio.value + "</td>";
			tablaDatos += "<td>" + persona.apellido.value + "</td>";
			tablaDatos += "<td>" + persona.edad.value + "</td>";
			tablaDatos += "</tr>";
			break;
		case 3:
			tablaDatos += "<tr>";
			tablaDatos += "<td>" + persona.cedula.value + "</td>";
			tablaDatos += "<td>" + persona.nombre.value + "</td>";
			tablaDatos += "<td>" + persona.cambio.value + "</td>";
			tablaDatos += "<td>" + persona.edad.value + "</td>";
			tablaDatos += "</tr>";
			break;
		case 4:
			tablaDatos += "<tr>";
			tablaDatos += "<td>" + persona.cedula.value + "</td>";
			tablaDatos += "<td>" + persona.nombre.value + "</td>";
			tablaDatos += "<td>" + persona.apellido.value + "</td>";
			tablaDatos += "<td>" + persona.cambio.value + "</td>";
			tablaDatos += "</tr>";
			break;
	}

	document.getElementById("tabla2").innerHTML = tablaDatos;
}
