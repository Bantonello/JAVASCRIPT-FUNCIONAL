

// FUNÇÃO SIMPLES SEM RETORNO E SEM PARÂMETRO

function simples (){
    console.log('simples');
}

simples();

//FUNÇÃO SIMPLES COM RETORNO E COM PARÂMETRO

function gritar(expressao){
    return expressao.ToUpperCase() + '!!!!'
}

const x = gritar('Bom dia');
console.log(x);

// FUNÇÃO SIMPLES COM SOMA

function somar(a,b){
    return a + b
}

const resultado = somar (3, 4)
console.log(resultado);