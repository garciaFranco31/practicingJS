//forma de declarar funciones

//Funciones declaradas: se utiliza la palabra 
//reservada function
function sumar(a , b){
    return a + b
}
saludar()

//Funciones de expresion: la funcion no tiene un nombre
//y se puede asignar a una variable
const multiplicar = function(a , b){
    return a * b
}

//Funciones flechas o arrow functions
//si tienen un solo parametro, no necesuitan parentesis
//si solo tienen una linea de codigo, no necesitan
//utilizar la palabra reservada return
const restar = (a , b) => {
    return a - b
}