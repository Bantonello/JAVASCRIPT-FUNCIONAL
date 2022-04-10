// Em JavaScript também é possivel criar uma função e 
//associar essa função a uma constante ou uma variável

//Frist-Class Citizen: Significa que a entidade é capaz de fazer tudo que
//as outras entidades podem fazer, incluem normalmente, ser passado como argumento
//retornar uma função e atribuir a uma variável. 

// Ou seja: Função é tradada como um dado. 

const a = 3 
const multiplicar = function (a,b) {
    return a * b
}
console.log(multiplicar(5,6));

// Assim, você consegue armazenar uma função, dentro de uma variável,
// dentro de uma constante.

//exemplo:

const operacoes = [
    function(a,b){
        return a + b
    },
    function(a,b){
        return a - b
    },
    function (a,b){
        return a * b
    },
    function (a,b){
        return a / b
    },
]

console.log(operações[0](5,6));
console.log(operações[1](5,6));
console.log(operações[2](5,6));
console.log(operações[3](5,6));