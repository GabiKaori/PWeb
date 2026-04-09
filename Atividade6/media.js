nome=prompt("Digite o nome do aluno: ");

n1=parseFloat(prompt("Digite a nota 1 do aluno: "));
n2=parseFloat(prompt("Digite a nota 2 do aluno: "));
n3=parseFloat(prompt("Digite a nota 3 do aluno: "));
n4=parseFloat(prompt("Digite a nota 4 do aluno: "));

media=((n1+n2+n3+n4)/4);

alert("A média das notas do(a) aluno(a) "+ nome +" é: "+ media.toFixed(2));