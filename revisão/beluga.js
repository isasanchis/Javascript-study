function calcularMedia(){
    var total = 0;
    var qtd = arguments.length;
    for(var x = 0; typeof arguments[x] === 'number'; x++){
        total += arguments[x];
    }                    
    return (total / qtd).toFixed(2);
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}