//VARIABLES
//Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
//la pantalla del navegador y la consola.
let año = 1978;
let dias = 30;
let meses = 12;
let nombre = " Maggie ";
let casdo = true;
let ciudad = " Avilés ";
let one = "Hola, ";
let two = "como estas?";
let joined = one + two  + "<br>";
console.log (joined);
document.write (joined + "<br>");
console.log (año);
document.write(año + "<br>");
console.log (año+dias);
document.write(año+dias  + "<br>");   
console.log (meses*dias);
document.write(meses*dias  + "<br>");
console.log (8*meses*dias);
document.write(8*meses*dias  + "<br>");
console.log (ciudad + nombre);
document.write(ciudad + nombre  + "<br>");
console.log("Hola " + nombre);
document.write("Hola " + nombre  + "<br>");

//De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
//Deberás imprimir el resultado por la pantalla del navegador y la consola.
//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.
let num1 = 10;
let num2 = 40;
console.log (9 * num1);
document.write(9 * num1  + "<br>");
console.log (num2 / num1);
document.write(num2 / num1  + "<br>");
console.log (num2 + num1);
document.write(num2 + num1  + "<br>");


    let ListaCompra = ["agua", "azucar", "limones", "fresas", "lechuga", "tomate", "pan", "manzanas", "guantes"];
console.log(ListaCompra);

//FUNCIONES
//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]" con un parámetro para el nombre.
function saludar(nombre) {
  const saludo = "Hola," + nombre;
  console.log(saludo);
  document.write(saludo + "<br>");
  return saludo;
}
saludar("Maggie");

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás imprimir el resultado por la pantalla del navegador y la consola.
function sumar(sum1, sum2)  {
let resultado=num1+num2;
console.log(resultado);
document.write(resultado  + "<br>");
return resultado;
}
sumar()

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola.
function determinarParidad(numero){
  if (numero % 2 === 0){
    let respuesta_par = `Es ${numero} es un numero par.`;
    return respuesta_par 
    }
  else {
    let respuesta_impar = `Es ${numero} es un numero impar.`;
    return respuesta_impar 
  }
}
console.log(determinarParidad (11))


//OBJETOS
//Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
let carro = {
  marca: "Ford",
  modelo: ["Mondeo", 2020],
  puertas:4,
  color: "Violeta",
} 
console.log(carro);
document.write(carro + "<br>");


//Crear una función que devuelva la marca del carro.
function verMarca(vehiculo){
  let marca = vehiculo.marca;
  console.log(marca);
  document.write(carro + "<br>");
  return marca;
}
verMarca(carro);

//Crear una función que devuelva la cantidad de puertas que tiene el carro.
function consultarCantidadPuertas(vehiculo){
  let puertas = vehiculo.puertas;
  console.log(puertas);
  return puertas;
}
consultarCantidadPuertas(carro)

//Crear una función que devuelva un atributo del objeto anidado
  /*const {aireAcondicionado} = carro
  console.log(aireAcondicionado)
  document.write(aireAcondicionado+ "<br>" )*/

//ARRAYS//
//Crear un array de 10 números
  let ListaNumero = [8,16,24,32,40,52,64,76,88,90];
  console.log(ListaNumero);



//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
const ListNumber = [8,16,24,32,40,52,64,76,88,90];
let fLen = ListNumber.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + ListNumber[i] + "</li>";
}
text += "</ul>";
console.log (fLen)
console.log (text)

//Crear una función que añada un número al array
let nuevaLongitud = ListaNumero.push(38)

//Crear una función que elimine los números pares de ese array.

    
 
//Crear una función que devuelva el número mayor de un array.
    console.log(Math.max(8,16,24,32,40,52,64,76,88,90,));

//Crear una función que devuelva el número menor de un array.
    console.log(Math.min(8,16,24,32,40,52,64,76,88,90,)); 

//Crear un función que convierta en minúsculas todas las letras de un texto.
    let saludo = '¡HOLA A TODO EL EQUIPO DE F5!';
    console.log(saludo.toLowerCase());

//Crear una función que convierta en mayúsculas todas las letras de un texto.
    console.log('¡Estoy gritando a todo el mundo!'.toUpperCase());
    let saludo2 = 'hola';
//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
    let primeraLetra = saludo2[0].toUpperCase();
    console.log(primeraLetra);


//Manipiulacion del DOM//
