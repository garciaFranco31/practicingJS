/**jercicio 1​
 Crea tu primer hola mundo por consola!
*/

console.log('Hello World')

/*Ejercicio 2​
 Crea una variable llamada nombre y asígnale tu nombre como valor.
 Crea una variable llamada edad y asígnale tu edad como valor.
 Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
 Crea una variable llamada direccion y asígnale un objeto con tu dirección.
 Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.
 Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.
 Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.
 Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos.
 */

let nombre = "Franco";
let edad = 22;
let mayorDeEdad = edad >= 18;
let direccion = {
    'calle': "Rio Negro",
    'Nro': 53
}
let coloresFavoritos = ['negro', 'violeta', 'rojo', 'blanco']
let lenguajesFavoritos = ['java','javascript']
let mejorLenguaje = lenguajesFavoritos[0];
let peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length]

/* Ejercicio 3
 Crea dos variables, una llamada numero1 y otra llamada numero2.
 Suma las dos variables y muestra el resultado por consola.
 Crea otras variables de tipo number y realiza las operaciones de resta, multiplicación y división.
Mostrando el resultado por consola. */

let num1 = 2, num2 = 4;
console.log(num1 + num2)

function resta(num1, num2){
    return num1 - num2
}

function division(num1, num2){
    if(num1 > 0){
        return num1 / num2
    }
    else{
        console.log('operacion no permitida')
    }
}

function multiplicacion(num1,num2){
    return num1*num2
}

/* Ejercicio 4
 Crea una variable llamada saludo y asígnale un string que contenga hola.
 Comprueba con un if si el string saludo es igual a hola. Y saca por consola un mensaje 
 que diga "Ha saludado".*/

let saludo = 'hola'

if (saludo === 'hola'){
    console.log('Ha saludado')
}

/* Ejercicio 5
 Crea un array de 3 pokemons.
 Muestra por consola el nombre de cada pokemon.
 Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
 Bonus extra: ¿Cómo se pueda hacer esto con bucles? */

let array = ['Pikachu', 'Charizard', 'Bulbasaur']

array.forEach(elemento => console.log(elemento))
/* output -->

  'Pikachu'
  'Charizard'
  'Bulbasaur'
*/

console.log(array) //output --> ['Pikachu', 'Charizard', 'Bulbasaur']

array.toString();//output --> 'Pikachu,Charizard,Bulbasaur'

/* Ejercicio 6
 Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje 
 ¡Es un pokemon de fuego!. 
*/

let pokemons = [
    {nombre:'Pikachu', tipo: 'electrico'}, 
    {nombre: 'Charizard', tipo: 'fuego'}, 
    {nombre: 'Bulbasaur', tipo: 'planta'}
  ]
  
  let bool = (pokemons[1].tipo == 'fuego')
  for (i=0; i < pokemons.length; i++){
    if(pokemons[i].tipo == 'fuego'){
      console.log('Es de tipo Fuego')
    }
  }