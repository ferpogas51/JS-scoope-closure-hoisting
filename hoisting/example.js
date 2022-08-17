console.log(nombre); // undefined
var nombre = 'andres'

// Hoisting
var nombre = undefined
console.log(nombre); 
var nombre = 'andres'

// Hoisting en scope de bloque
if (true){
    var saludo = "hola"
    let despedida = "chao"
}

console.log(saludo) // saludo
console.log(despedida) // referenceError despedida is not defined

//hoisting solo aplica a variables con var
console.log(x); //ReferenceError: Cannot access 'x' before initialization
let x = 5;

// Hosting en funciones
console.log( saludar() ) //hola

function saludar() {
  return "Hola"
}

//Hoisting de variables dentro de una funcion

function scope() {
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    var nombre = "Andres"
    var edad = 20
    for (var i = 0; i< 6; i++) {
    //...
    }
  }
  // Javascript lo interpreta de la siguiente manera

  function scope() {
    var nombre = undefined
    var edad = undefined
    var i = undefined
    
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    nombre = "Andres"
    edad = 20
    for ( i = 0; i< 6; i++) {
    
    //
    }
  }

  //Hosting en funciones asignadas a variables

  console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}
//hoisting

var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}

//Hoisting con let y const

//Aunque te hayan dicho que el hoisting solo ocurre con declaraciones con var, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.

//La Temporal Dead Zone es una región del código donde la variable está declarada, pero no es posible acceder a esta, provocando un error de tipo ReferenceError.

console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"