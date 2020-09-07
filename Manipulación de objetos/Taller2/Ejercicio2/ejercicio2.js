var persona = new Object();

persona.cedula = document.getElementById("cedula");
persona.nombre = document.getElementById("nombre");
persona.apellido = document.getElementById("apellido");
persona.edad = document.getElementById("edad");

// Este es para el campo de nombre nuevo
persona.nuevoNombre = document.getElementById("nuevoNombre");

var tabla1 = document.getElementById("tabla1");

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
}

function cambiarNombre() {
	var tablaDatos = "";

	tablaDatos += "<tr>";
	tablaDatos += "<td>" + persona.cedula.value + "</td>";
	tablaDatos += "<td>" + persona.nuevoNombre.value + "</td>";
	tablaDatos += "<td>" + persona.apellido.value + "</td>";
	tablaDatos += "<td>" + persona.edad.value + "</td>";
	tablaDatos += "</tr>";

	document.getElementById("tabla2").innerHTML = tablaDatos;
}
