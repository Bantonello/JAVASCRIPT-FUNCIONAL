//Função muitas vezes pode pode funcionar como uma classe
// em linguagens orientadas a objeto, podendo criar dentro de uma função, outra função.

//exemplo: 

function menu(){

    function esconderMenu(){
        console.log('Esconder Menu')

    }

    esconderMenu()
}
menu();
