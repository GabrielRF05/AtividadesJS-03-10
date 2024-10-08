let carros = []
let continuar = true

    while(continuar){

    let carro = {}

    carro.modelo = prompt("Insira o modelo do carro")
    carro.marca = prompt("Insira a marca do carro")
    carro.ano = parseFloat(prompt("Insira o ano do carro"))
    carro.valor = parseFloat(prompt("Insira o valor do carro"))

    carros.push(carro);

    continuar = prompt("Você gostaria de continuar adicionando dados de carros?") === 'sim'

    
}

let carroMaisCaro = carros[0];

for (let i = 1; i < carros.length; i++) {
    if (carros[i].valor > carroMaisCaro.valor) {
        carroMaisCaro = carros[i];
    }
}

console.log(carroMaisCaro)
