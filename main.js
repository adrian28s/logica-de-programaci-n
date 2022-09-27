const booleano1 = true;
const booleano2 = false;

//Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
booleano1 = booleano1 && booleano2;

//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
booleano1 = booleano1 || booleano2;

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
booleano1 = !booleano1;

//Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
booleanoMix0 =
  booleano1 && booleano2 && (booleano1 || (!booleano1 && !booleano2));
console.log(booleanoMix0);

//Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
let a = 17;
let b = 3;
valorDivision = a / b;
console.log(valorDivision.toFixed(2));

//Crear variable valorResto cuyo valor sea el resto de 17 entre 7
let x = 17;
let y = 7;
valorResto = x % y;
console.log(valorResto);

//Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
const a1 = 9;
const b1 = "9";

if (a1 == b1) {
  console.log("Son iguales");
} else {
  console.log("no son iguales");
}

//Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
const mochila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas")
}
else if (mochila.length > 2 && mochila.length < 9) {
    console.log("Que bien voy con mi mochila")
}
else {
    console.log("Creo que no necesito mochila")
}

//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

//const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (let contarHasta10 = 0; contarHasta10 < vueltas.length; contarHasta10++) {  
//    console.log("vueltas nº " + vueltas[contarHasta10]) 
//}
 //let i = 0;
 //while (i < 20){
   // console.log("tomates " + i);
    //i++
 //}

 //Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
 //const diaFestivo = true;
 //const diaTrabajo = diaFestivo === false

 //Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

 //Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

 //Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

 //Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

