function agregar() {
	var salida = "";
	var est = Object();

	est.nom = document.getElementById("nom").value;
	est.ape = document.getElementById("ape").value;
	est.n1 = parseInt(document.getElementById("n1").value);
	est.n2 = parseInt(document.getElementById("n2").value);
	est.n3 = parseInt(document.getElementById("n3").value);

	salida += "<tr>"
    salida +="<td>" + est.nom +"</td>"
    salida += "<td>" + est.ape + "</td>"
    salida += "<td>" + est.n1 + "</td>"
    salida += "<td>" + est.n2 + "</td>"
    salida += "<td>" + est.n3 + "</td>"
    salida += "<td style='font-weight: bolder; color: " + color(est.n1, est.n2, est.n3) + "'>" + notafinal(est.n1, est.n2, est.n3) +"</td>"
    salida += "<td>" + estado(est.n1, est.n2, est.n3) + "</td>"
    salida += "</tr>";

	document.getElementById("cuerpo").innerHTML = salida;
	limparCajas();
}

function notafinal(n1, n2, n3) {
	var def = (n1 + n2 + n3) / 3;
	return def.toFixed(2);
}

function color(n1, n2, n3) {
	if (notafinal(n1, n2, n3) >= 3) {
		return "black";
	} else {
		return "red";
	}
}

function estado(n1, n2, n3) {
	var nf = parseFloat(notafinal(n1, n2, n3));
	if (nf >= 3) {
		return "Aprobado";
	} else {
		return "Reprobado";
	}
}

function limparCajas() {
	document.getElementById("nom").value = "";
	document.getElementById("ape").value = "";
	document.getElementById("n1").value = "";
	document.getElementById("n2").value = "";
	document.getElementById("n3").value = "";
	document.getElementById("nom").focus();
}
