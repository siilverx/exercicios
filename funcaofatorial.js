function fatorial(n){ 
    let produto = 1;

    for (var i = n ; i > 1 ; i--){ 
        produto*= i;
    }
    return produto;
}

var x = Number(prompt('valor de x'));
var n = Number(prompt('numero de termos'));

let termo;
let soma = 0;
let i = 1;

for (var t = 1; t<= n ; t++){
    termo =x**i /fatorial(i);

    if( t % 2 == 0){ 
        termo*= -1;
    }
    soma += termo;
    i+= 2;

}

console.log(soma);
console.log(Math.sin(x));
