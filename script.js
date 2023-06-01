//VARIABLES
let año = 1978
let dias = 30
let meses = 12
let nombre = "Maggie"
let casdo = true
let ciudad = "Avilés"
let one = "Hola, "
let two = "como estas?"
let joined = one + two
console.log (joined)
console.log (año)
console.log (año+dias)
console.log (meses*dias)
console.log (8*meses*dias)
console.log (ciudad + nombre)
console.log("Hola " + nombre)

let num1 = 10;
let num2 = 40;
console.log (9 * num1);
console.log (num2 / num1);
console.log (num2 + num1);



    let ListaCompra = ["agua", "azucar", "limones", "fresas", "lechuga", "tomate", "pan", "manzanas", "guantes"];
console.log(ListaCompra);

//OBJETOS



function Car(make, model, year, owner) {
  this.make = "Ford";
  this.model = "Mondeo";
  this.year = "2020";
  this.owner = owner;
  this.displayCar = displayCar;
}
console.log (Car)

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mondeo';
myCar.year = 2020;
var myCar = { make: 'Kia', model: 'Rio', year: 2020 };

var x, y;
x = myCar.make; 
myFunc(myCar);
y = myCar.make;

var myFunc;

console.log (myCar)


//ARRAYS//
  let ListaNumero = [0,1,2,3,4,5,6,7,8,9];
  console.log(ListaNumero);


  const ListNumber = [0,1,2,3,4,5,6,7,8,9];
let fLen = ListNumber.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + ListNumber[i] + "</li>";
}
text += "</ul>";
console.log (fLen)
console.log (text)


function esPar(numero) 
{ 
  return (numero % 2) == 0; 
} 
console.log (esPar(8))
console.log (esPar(15))

function esPar(num) {
    if(num % 2 === 0) {
    return true; // es par
    }
    else {
    return false; // es impar
    }
    }
    
    console.log(esPar(4)); // devuelve true
    console.log(esPar(5)); // devuelve false

    console.log(Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,));
    console.log(Math.min(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,));

    let saludo = '¡HOLA A TODO EL EQUIPO DE F5!';
    console.log(saludo.toLowerCase());

    console.log('¡Estoy gritando a todo el mundo!'.toUpperCase());

    let saludo2 = 'hola';
    let primeraLetra = saludo2[0].toUpperCase();
    console.log(primeraLetra);
//Manipiulacion del DOM
   
   
  function Hola(){
    document.write("Hola Femcoders!!")
  }
  