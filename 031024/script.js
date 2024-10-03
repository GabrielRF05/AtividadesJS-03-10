let continuar = true
let option
let novaIdade
let novaCidade

let pessoa = {
    nome: "Gabriel",
    idade: "16",
    cidade: "Patrocínio"
}

console.log(pessoa)

while(option != 3){

option = parseFloat(prompt("Voce gostaria de atualizar idade ou cidade?\n1 - Idade\n2 - Cidade\n3 - Sair"))

if(option == 1){
    novaIdade = prompt("Insira sua nova idade")

    pessoa.idade = novaIdade

    console.log(pessoa)
}

else if(option == 2){
    novaCidade = prompt("Insira sua nova cidade")

    pessoa.cidade = novaCidade

    console.log(pessoa)

}

}