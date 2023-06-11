//Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por la pantalla del navegador y la consola.

let name = 'oreo';
let number = 2;
let male = true;
let number2 = 5;
//solucion1
console.log(name,number,male,number2)
document.write(name)
//solucion2
document.getElementById ('nombreGato').textContent = name;
//solucion3
let variable1 = document.createElement("p");
variable1.innerText = `${name}= ${typeof(name) }`
document.querySelector("body").appendChild(variable1);
//Operaciones con integers
console.log(number,number2);
let suma = number + number2;
console.log(suma);
document.write(suma);
//Concatenar
//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.
// declaramos 2 variables con valores de tipo string
let buenos_dias = 'Buenos día Amaya';
let pregunta = '¿Vives en una piña debajo del mar?';
//traer el nodo padre dónde quiero crear/ insertar un nodo/tag
let main_tag = document.getElementById ('principal');
//Crear el nodo hijo que insertaré en el nodo padre (main)
let saludo_texto = document.createElement("p");
//Asignar el valor/texto al nodo hijo
saludo_texto.innerHTML =  `${buenos_dias} ${pregunta}`;
// asignarle el nodo hijo (p) al nodo padre (main)
main_tag.appendChild(saludo_texto);


