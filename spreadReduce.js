/*spread and reduce operators*/

// 1. AÑADIR LOS ELEMENTOS DE UN ARRAY EXISTENTE A UNO NUEVO.
let arrayExistente = [3, 4];
let nuevoArray = [1,2, ...arrayExistente];
// console.log(nuevoArray)


// 2. PASAR LOS ELEMENTOS DE UN ARRAY COMO ARGUMENTOS A UNA FUNCIÓN.
let args = [1, 2];
let suma = (a, b) => a + b;
suma(...args);

// 3. COPIAR ARRAYS
//3.1. Ejemplo fácil. Observar como se crea un nuevo array.
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1, arr2);

//3.2. Ejemplo difícil. Una función que multiplica un array por un número determinado.
// Aquí lo que se busca es que el array que se va a pasar a la función NO sea modificado.
// esto hace que la función sea pura, para ello creamos una copia del array primero.

// Se crea el array que no se va a modificar.
let arrayInmutable = [1, 2, 3, 4, 5, 6];
let arrayMutable =  [1, 2, 3, 4, 5, 6];

// Creamos la función que recibe como parámetro un array y el número por el cual se va a multiplicar
// cada elemento de dicho array.
function multiplicaItems(array, multiplier){
  // Copiamos el array para asegurarnos que no va a ser modificado.
  let arrayMutable = [...arrayInmutable];

  // Iteramos por cada uno de los elementos del array
  for(let i=0; i < arrayMutable.length; i++){
    // Tomamos el primer elemento de array y lo multiplicamos por multiplier, el resultado de la operación
    // es asignado como nuevo valor al primer elemento de arrayMutable.
    arrayMutable[i] = array[i] * multiplier;

  }
  return arrayMutable
}

console.log("=========================================")
let arrayMultiplicado = multiplicaItems(arrayInmutable, 10);
console.log(arrayInmutable, arrayMultiplicado);

// EJEMPLO DE LAS NARANJAS CON FUNCIONES PURAS.
let naranjasAnandaVida= ["🍊", "🍊", "🍊", "🍊", "🍊"];
let azucarAnandaVida= 30;

let naranjasCampoVivo = ["🍊", "🍊"];
let azucarCampoVivo = 40;


function mermeladaNaranja(arrayNaranjas, numberAzucar){
  return arrayNaranjas.length > 3 && numberAzucar >= 30 ? arrayNaranjas.
  slice(0,3).
  map(naranja => "🍬").
  join("") : "No se puede hacer mermelada";
}

function payNaranja(arrayNaranjas, numberAzucar){
  if(arrayNaranjas.length < 4){
    console.log("No se puede hacer el pay")
  }
  if(numberAzucar < 10){
    console.log("No se puede hacer el pay")
  }

  let naranjasMagicas = [...arrayNaranjas];

  return [
    naranjasMagicas.pop(),
    naranjasMagicas.pop(),
    naranjasMagicas.pop(),
    naranjasMagicas.pop()
  ].map(naranja => "🎂").join("")
}

console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));

console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(payNaranja(naranjasAnandaVida, azucarAnandaVida));

console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));
console.log(mermeladaNaranja(naranjasAnandaVida, azucarAnandaVida));

// 4. CONCATENAR ARRAYS.
let frutas = ["mango", "plátano", "fresa"];
let verduras = ["jitomate", "zanahoria", "cebolla"];
let frutasVerduras = [...frutas, ...verduras];
console.log(frutasVerduras);


/*
OPERADOR REST.
Es la misma sintaxis que el operador SPREAD. Sin embargo, hace totalmente lo contrario.
Mientras que Spread expande los elementos de un array, REST toma distintos componentes y
los agrupa en un array.
En la realidad esto opera al definir los PARÁMETROS pasados a una función. No te confundas con spread,
que toma un array y expande sus elementos a los ARGUMENTOS de una función.
*/

// Se define la función mapMultiplier, tiene dos PARÁMETROS multiplier e itemsAMultiplicar.
// Nótese que itemsAMultiplicar se le aplica REST, sé que es REST y no SPREAD porque es un parámetro,
// cuando se le pasen los argumentos estos se condensaran en un array.
function mapMultiplier(multiplier, ...itemsAMultiplicar){
  return itemsAMultiplicar.map(items => items * multiplier);
}
let resultadoMultiplicadosA = mapMultiplier(3.5, 2, 4, 6, 8, 10);
let resultadoMultiplicadosB = mapMultiplier(3.5, ...arrayInmutable);
console.log(resultadoMultiplicadosA)
console.log(resultadoMultiplicadosB)

arrayMutable.push()
