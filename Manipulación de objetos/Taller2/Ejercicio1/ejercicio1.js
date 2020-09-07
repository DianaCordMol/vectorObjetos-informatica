function mostrarDatos() {

    var tablaDatos = '';
    var persona = new Object();

    persona.cedula = document.getElementById("cedula").value;
    persona.nombre = document.getElementById("nombre").value;
    persona.apellido = document.getElementById("apellido").value;
    persona.edad = document.getElementById("edad").value;

    tablaDatos += "<tr>";
    tablaDatos += "<td>" + persona.cedula + "</td>";
    tablaDatos += "<td>" + persona.nombre + "</td>";
    tablaDatos += "<td>" + persona.apellido + "</td>";
    tablaDatos += "<td>" + persona.edad + "</td>";
    tablaDatos += "</tr>";

    document.getElementById("tabla").innerHTML = tablaDatos;
}