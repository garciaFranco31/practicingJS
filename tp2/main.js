/* Ejercicio 1​
 Crea una función que reciba un número y devuelva el doble de ese número. 
*/

function elDoble(numero){
    return numero*2
}

//Usando arrow function
const elDoble = (numero) =>{
    return numero*2
}

/* Ejercicio 2​
 Crea una función que reciba un número y devuelva el cuadrado de ese número. 
*/

function cuadrado(numero){
    return numero*numero
}

//Usando arrow function
const cuadrado = (numero) => {
    return numero*numero
}

/* Ejercicio 3​
 Crea una función que calcule el área de un rectángulo y la muestre por consola. 
*/

function areaRectangulo(base, altura){
    return base*alura
}

//Usando arrow function
const areaRectangulo = (base, altura) => {
    return base*altura
}

/* Ejercicio 4​
 Crea una función que reciba un número y muestre por consola si es par o impar. 
*/

function esPar(numero){
    return (numero % 2 == 0)
}

//Usando arrow function
const esPar = (numero) => {
    return (numero%2 == 0)
}


/*  Ejercicio 5​
Dado el siguiente array de personas:

 Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
 Dime cual es la persona más joven del array.
 Dime cual es la persona más mayor del array. 
*/
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];
  let mayores = []
  function arrayMayores(per){
      per.forEach(e => {if(e.edad >= 18){
         mayores.push(e)
          }
      });
      return mayores;
  }

//Usando arrow function
let mayores =[]
const arrayMayores = (per) =>{
    per.forEach(e => {if(e.edad >= 18){
        mayores.push(e)
    }})
    return mayores
}

/*  Ejercicio 6​
 Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y 
 muestre por consola el nombre de cada pokemon.
 También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de 
 cada pokemon que sea de tipo fuego. 
*/

const pokemons = [

    { nombre: 'Pikachu', tipo: 'electrico' },
  
    { nombre: 'Cinderace', tipo: 'fuego'},
  
    { nombre: 'Lucario', tipo: 'lucha' },
  
    { nombre: 'Squirtle', tipo: 'agua' },
  
    { nombre: 'Charizar', tipo: 'fuego' },
  
    
  
  ];

function tipoFuego (poke){
  console.log('Los pokemons de tipo fuego son: ')
  poke.forEach(e => {if(e.tipo == 'fuego'){
    console.log(e.nombre)
  }})
}

//Usando arrow function
const tipoFuego = (poke) => {
    poke.forEach(e => {if(e.tipo == 'fuego'){
        console.log(e.nombre)
    }})
}



/* Ejercicio 7​
 Haz los ejercicios anteriores con funciones flecha. 
*/