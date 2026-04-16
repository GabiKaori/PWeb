function jogar(escolhaUsuario) {

    const opcoes = ["Pedra", "Papel", "Tesoura"];


    const numero = Math.random();

    let escolhaComputador;

    if (numero < 1/3) {
        escolhaComputador = 0; 
    } 
    else if (numero < 2/3) {
        escolhaComputador = 1;
    } 
    else {
        escolhaComputador = 2; 
    }

    let resultado = "";

  
    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    }

    else if (
        (escolhaUsuario === 0 && escolhaComputador === 2) ||
        (escolhaUsuario === 1 && escolhaComputador === 0) ||
        (escolhaUsuario === 2 && escolhaComputador === 1)
    ) {
        resultado = "Você ganhou!";
    }
  
    else {
        resultado = "Você perdeu!";
    }

    document.getElementById("usuario").innerHTML =
        "Sua escolha: " + opcoes[escolhaUsuario];

    document.getElementById("computador").innerHTML =
        "Computador: " + opcoes[escolhaComputador];

    document.getElementById("resposta").innerHTML = resultado;
}