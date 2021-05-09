// Função em JS é First-Class Object (Citizens)
// Higher-order function
// Tratar função como sendo um dado (podemos ter função como parâmetro, podemos passar como uma variável, função pode ter outra dentro dela - há um leque de possibilidades)

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { } // função anônima, neste caso, é possível invocar a função passando o nome da constante (entre parênteses), ou passando o nome da const como um parâmetro dentro de outra função, por exemplo.

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3)) // array [0] pq pegou a primeira função

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
    fun()
}
run(function() {console.log('executando..')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
       console.log(a + b + c) 
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)