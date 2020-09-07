var arrayNumeros = [];
function agregar() {
	var num = parseInt(document.getElementById("num").value);
	arrayNumeros.push(num); //almacenamos el número en el array
	document.getElementById("num").value = "";
	document.getElementById("num").focus();
	mostrarListadoNumeros();
}
function mostrarListadoNumeros() {
	var salida = "";
	var salida1 = "";

	for (i = 0; i < arrayNumeros.length; i++) {
		salida += "<tr>";
		salida += "<td>" + arrayNumeros[i] + "</td>";
		salida += "</tr>";
	}

	document.getElementById("cuerpo").innerHTML = salida;

	salida1 += "<tr>";
	salida1 += "<td>" + "Cantidad de Elementos" + "</td>";
	salida1 += "<td>" + arrayNumeros.length + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Suma de Elementos" + "</td>";
	salida1 += "<td>" + sumaElementos() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Promedio Elementos" + "</td>";
	salida1 += "<td>" + promElementos() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Elemento mayor" + "</td>";
	salida1 += "<td>" + elementoMayor() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Elemento menor" + "</td>";
	salida1 += "<td>" + elementoMenor() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Elementos impares" + "</td>";
	salida1 += "<td>" + elementosImpares() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Elementos pares" + "</td>";
	salida1 += "<td>" + elementosPares() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Multiplos de tres" + "</td>";
	salida1 += "<td>" + multiplosTres() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Multiplos de cinco" + "</td>";
	salida1 += "<td>" + multiplosCinco() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Desviación aritmética" + "</td>";
	salida1 += "<td>" + desvAritmetica() + "</td>";
	salida1 += "</tr>";

	salida1 += "<tr>";
	salida1 += "<td>" + "Desviación estandar" + "</td>";
	salida1 += "<td>" + desvEstandar() + "</td>";
	salida1 += "</tr>";

	document.getElementById("otroCuerpo").innerHTML = salida1;
}
function sumaElementos() {
	var sum = 0;
	for (i in arrayNumeros) sum += arrayNumeros[i];
	return sum;
}

function promElementos() {
	return sumaElementos() / arrayNumeros.length;
}

function elementoMayor() {
	var mayor = arrayNumeros[0];

	for (i in arrayNumeros) {
		if (arrayNumeros[i] > mayor) {
			mayor = arrayNumeros[i];
		}
	}
	return mayor;
}

function elementoMenor() {
	var menor = arrayNumeros[0];

	for (i in arrayNumeros) {
		if (arrayNumeros[i] < menor) {
			menor = arrayNumeros[i];
			console.log(menor);
		}
	}
	return menor;
}

function elementosImpares() {
	var impar = 0;

	for (i in arrayNumeros) {
		if (arrayNumeros[i] % 2 != 0) {
			impar++;
		}
	}
	return impar;
}

function elementosPares() {
	var par = 0;

	for (i in arrayNumeros) {
		if (arrayNumeros[i] % 2 == 0) {
			par++;
		}
	}
	return par;
}

function multiplosTres() {
	var multiplo = 0;

	for (i in arrayNumeros) {
		if (arrayNumeros[i] % 3 == 0) {
			multiplo++;
		}
	}
	return multiplo;
}

function multiplosCinco() {
	var multiplo = 0;

	for (i in arrayNumeros) {
		if (arrayNumeros[i] % 5 == 0) {
			multiplo++;
		}
	}
	return multiplo;
}

function desvAritmetica() {
	var media = promElementos();
	var desv = 0;

	for (i in arrayNumeros) {
		desv = arrayNumeros[i] - media;
	}
	return desv;
}

function desvEstandar() {
	var desv2 = 0;
	var varianza = 0;
	var media = promElementos();
	var desvEst = 0;

	for (i in arrayNumeros) {
		desv2 += (arrayNumeros[i] - media) ** 2;
	}

	varianza = desv2 / arrayNumeros.length;
	desvEst = varianza ** (1/2);
	return desvEst;
}