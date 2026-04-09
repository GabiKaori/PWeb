a=parseFloat(prompt("Digite um número: "));
b=parseFloat(prompt("Digite outro número: "));

var soma = a + b
var subtracao = a - b;
var produto = a * b;
var divisao = a / b;
var resto = a%b;

alert("A soma dos números é: " + soma);
alert("A subtração dos números é: " + subtracao);
alert("O produto dos números é: "+ produto);
alert("A divisão do primeiro número pelo segundo é: " +divisao.toFixed(2));
alert("O resto da divisão do primeiro número pelo segundo é: "+resto);