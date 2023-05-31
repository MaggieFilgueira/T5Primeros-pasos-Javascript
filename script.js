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

    let ListaCompra = ["agua", "azucar", "limones", "fresas", "lechuga", "tomate", "pan", "manzanas", "guantes"];
console.log(ListaCompra);

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
console.log (Car)

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

[parcial]var mycar = { make: 'Kia', model: 'Rio', year: 2020 };

var x, y;
x = mycar.make;
myFunc(mycar);
y = mycar.make;


var myFunc;
if (num === 0) {
myFunc = function (theObject) {
theObject.make = "Toyota";
  };
}

//ARRAYS//
  let ListaNumero = [0,1,2,3,4,5,6,7,8,9];
  console.log(ListaCompra);
  





