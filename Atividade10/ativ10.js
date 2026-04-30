function calcular() {

    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    var imc = peso / (altura * altura);

    var classificacao = classificar(imc);

    document.getElementById("resultado").innerHTML =
        "IMC: " + imc.toFixed(2) + "<br>" + classificacao;
}

function classificar(imc) {

    if (imc < 18.5) {
        return "Magreza";
    }
    else if (imc < 25) {
        return "Normal";
    }
    else if (imc < 30) {
        return "Sobrepeso";
    }
    else if (imc < 40) {
        return "Obesidade";
    }
    else {
        return "Obesidade Grave";
    }

}