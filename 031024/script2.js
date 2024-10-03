let livro = []
let livro2 = []

livro.nome = prompt("Insira o nome do primeiro livro")
livro.autor = prompt("Insira o nome do autor")
livro.anoPublicado = parseFloat(prompt("Insira o ano publicado"))

livro2.nome = prompt("Insira o nome do segundo livro")
livro2.autor = prompt("Insira o nome do autor")
livro2.anoPublicado = parseFloat(prompt("Insira o ano publicado"))

if(livro.anoPublicado < livro2.anoPublicado){
    console.log(livro)
}
else{
    console.log(livro2)
}

if(livro.nome == "estudando programação" || livro2.nome == "estudando programação"){
    console.log("SIM, existe um livro com o nome estudando programação")
}

else{
    console.log("NÃO, não existe um livro com o nome estudando programação")
}

if(livro.autor == livro2.autor){
    console.log("SIM, os livros são do mesmo autor")
}

else{
    console.log("NÃO, os livros não são do mesmo autor")
}

console.log(livro.autor)
console.log(livro2.autor)



