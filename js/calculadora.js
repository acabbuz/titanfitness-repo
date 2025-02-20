function calcularGrasa() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value) / 100; 
    let edad = Number(document.getElementById("edad").value);
    let sexo = document.getElementById("sexo").value === "hombre" ? 1 : 0;

    if (peso && altura && edad) {
        let imc = peso / (altura * altura);
        let grasa = (1.2 * imc) + (0.23 * edad) - (10.8 * sexo) - 5.4;
        if (grasa<=0) {
            alert("No es posible calcular la grasa corporal con los datos dados. Prueba de nuevo con datos válidos");
        }else{
            document.getElementById("resultado").innerText = "Grasa corporal: " + grasa.toFixed(2) + "%";
        }
    } else {
        document.getElementById("resultado").innerText = "Completa todos los campos.";
    }
}