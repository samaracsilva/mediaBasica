const prompt = require ('prompt-sync')({sigint: true}); 

console.log("Média alunos");
console.log("=============");

let quantidadeAlunos = parseInt(prompt("Digite a quantidade de alunos da turma: "))

for (let i = 1; i <= quantidadeAlunos; i++) {

    let nomeAluno = prompt("Digite o nome do aluno(a): ");
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));
    let nota3 = parseFloat(prompt("Digite a terceira nota: "));
    
    let media = (nota1 + nota2 + nota3)/3;
    let pontuacaoFinal = 10 - media  

    if(media >= 7){
        console.log(`Nome do aluno(a): ${nomeAluno}`);
        console.log(`Parabéns!!! Aluno(a) aprovado(a)`);
        console.log(`Média: ${media.toFixed(2)}`)
    }else if(media >= 4 && media < 7 ){
        console.log(`Nome do aluno(a): ${nomeAluno}`);
        console.log(`Aluno(a) em exame final!`);
        console.log(`Média ${media.toFixed(2)}`);
        console.log(`Pontação mínima para aprovação na final: ${pontuacaoFinal.toFixed(2)}`);
    }else{
        console.log(`Nome do aluno(a): ${nomeAluno}`);
        console.log(`Aluno(a) reprovado(a)!`);
        console.log(`Média: ${media.toFixed(2)}`);
    }
}
