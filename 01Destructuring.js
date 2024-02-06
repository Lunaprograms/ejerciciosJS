// Destructuración

// 1. INICIALIZAR VARIABLES A PARTIR DE DATOS ALMACENADOS EN LISTAS.
let uno, dos, rest; // Declara pero no inicializa la variable.
listaVariablesNaive = ["Esta para para uno NAIVE", "Esta para para dos NAIVE"];
listaVariables = ["Esta para uno", "Esta para dos"];

// Forma naive de asignar los valores a estas variables:
uno = listaVariablesNaive[0];
dos = listaVariablesNaive[1];
console.log(uno, dos);

/*¿Es posible hacerlo en una sola linea? ORBIUM.
Aquí se está haciendo "Destructuring" con listas.

- Recuerda que para crear listas u objetos se puede usar la sintaxis literal -> [] y {}
- Dicha sintaxis es de hecho una expresión que se resuelve en la creación de un objeto o array.
- Lo más común es que se le asigne una variable a estos datos -> let variable = [];
- Al ser una expresión se encuentran del lado DERECHO del operador "=". izq = der.

* La desestructuración utiliza una sintaxis similar [] y {}
* Pero se usa en el lado IZQUIERDO de la asignación.
* La destructuración se usa para definir qué valores desempacar de la - VARIABLE ORIGEN -.
-> En el ejemplo que sigue, la destructuración se usa para definir que valores desempacar
de listaVariables --> ["Esta vara para uno", "Esta vara para dos"];
- listaVariables ES LA VARIABLE DE ORIGEN.
*/
[uno, dos] = listaVariables; // Desempaca el primer item y asignalo a uno, desempaca el segundo item y asignalo a dos.
console.log(uno, dos);

/*
1.1) DESTRUCTURACIÓN Y REST.
También es posible hacer uso del operador rest.
Al usar rest, todos los items restantes serán almacenados en un nuevo array.

En el ejemplo que sigue, hay muchasNovias. Quiero que mínimo Titi y Gabriela
tengan su propia variable, el resto me gustaría que estuvieran guardados en una
variable que apunte a la lista de novias.
 */
let titi, gabriela, elResto;
let muchasNovias = ["Titi", "Gabriela", "Nicolle", "Sofía", "María", "Thalia"];
[titi, gabriela, ...elResto] = muchasNovias;
console.log(titi, gabriela, elResto);
console.log(titi, gabriela, ...elResto); // Haciendo uso de SPREAD. Sí spread, no es un error.

/*
1.2) DESTRUCTURACIÓN DE MÁS ELEMENTOS QUE LA VARIABLE DE ORIGEN.

¿Qué pasa si quiero desempacar más elementos de los que existen en la variable de origen?
Por ejemplo, si tengo pocas novias pero quiero desempacar más de las que tengo.

*/
let laura, pocasNovias;
pocasNovias = ["Laura"];
[laura, titi, gabriela] = pocasNovias;
console.log(laura, titi, gabriela); // Laura undefined undefined

/*
1.3) SWAPPING VARIABLES.
No tengo dos novias pero sí tengo una esposa swinger. Conocemos a otra pareja swinger y decidimos
hacer un cambio, por lo que mi pareja cambiará en la fiesta.

*/
let miPareja = "Laura";
let fulana = "Fulanita";
console.log(`Estoy bailando con ${miPareja}, no con ${fulana}`);
[miPareja, fulana] = [fulana, miPareja]; // Swapping.
console.log(`Estoy bailando con ${miPareja}, no con ${fulana}`);

/*
AHORA. Digamos que tengo una lista ORDENADA de mis ropa de marca favorita.
Siendo Balenciaga lo que más me gusta y Adidas lo que menos.

Pero me entero que Balenciaga se ha visto involucrada en actos de pedofilia.
¿Cómo le hago para pasarlo a último nivel?
 */
let marcas = ["Balenciaga", "Gucci", "Chanel", "Adidas"];
[marcas[3], marcas[0]] = [marcas[0], marcas[3]];
console.log(marcas);

/*
1.4) MANIPULAR UN ARRAY QUE ES RETORNADO POR UNA FUNCIÓN.
Si una función retorna un array, destructurarlo ayuda a que sea más fácil.

Ejemplo super duper fácil. La siguiente función retorna un array, el cual puede ser procesado
EN UNA SOLA LINEA con  destructuración.
*/
let appleOne, appleTwo;
let manzanas = () => ["🍏", "🍎"];
[appleOne, appleTwo] = manzanas();
console.log(appleOne, appleTwo);

/*
No solo las funciones retornan arrays. También las APIs, no se trata de entender APIs aquí, por lo que no
se tiene que entender tode lo que está pasando a continuación.

El U.S.DEPARTMENT OF AGRICULTURE tiene mucha información sobre alimentos, uno de ellos es el FoodData Central.
De acuerdo con su página se trata de:
"Is an integrated data system that provides expanded nutrient profile data and links to related agricultural and
experimental research. Provides a broad snapshot in time of the nutrients and other components found in a wide variety
of foods and food products."

- Para acceder a la API y obtener información nutricional de alimentos, necesitamos una llave, ya la tenemos:
API KEY: YkWcmD2JhR09ct7sq8kl8cGxtxxbWVoHVK7h5Wp6

- Le vamos a decir a JS que haga un requerimiento a la computadora del USDA. La cual tiene una dirección
de internet: https://api.nal.usda.gov

- Pero si vamos a esta dirección nos va a llevar a National Agricultural Library, que supuestamente es
"is one of five national libraries of the United States. It houses one of the world's largest
collections devoted to agriculture and its related sciences." Sería el equivalente de decir que
Rodrigo vive en Av. Revolución 1187, ¿en qué departamento?  no sabemos.

- Necesitamos decirle en qué parte, para esto le vamos a decir la dirección completa:

https://api.nal.usda.gov/fdc/v1/foods/search?api_key={aquí va tu llave}&query={aquí va tu búsqueda}

Veamos como se hace.

 */
let searchFood = async (query, maxNumberResponses) => {
  // 1. Declara variables.
  let appleOne, appleTwo;

  // 2. Aquí está la KEY que USDA me dio para acceder a su base de datos.
  const APIKEY = "YkWcmD2JhR09ct7sq8kl8cGxtxxbWVoHVK7h5Wp6";

  // 3. Defino el URL y criterios de búsqueda.
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=${maxNumberResponses}&api_key=${APIKEY}`;

  // 4. Llevo a cabo el request. Yo sé que me va a regresar un array con dos objetos --> [{}, {}]
  let array = await fetch(URL)
    .then((response) => response.json())
    .then((object) => object.foods);

  // Aquí saco los dos objetos destructurandolos.
  [appleOne, appleTwo] = array;
  console.log(appleOne, appleTwo);

  console.log(appleOne.foodNutrients);
};

searchFood("apple", 2);

// ================================================================================
// 1. INICIALIZAR VARIABLES A PARTIR DE DATOS ALMACENADOS EN OBJETOS.
// Imaginemos un objeto que represente un usuario.
let userObject = {
  firstName: "Cynthia",
  lastName: "Owen",
  fullName: "Cynthia Owen",
  chineseName: "窦俞莉梁",
  children: ["Nicholas"],
  favouriteChild: "Nicholas",
  age: 49,
  telephone: "17758263632",
  words: "Hello, my name is Cynthia Owen, you can call me 邂逅一片时光.",
  bestFriends: "萌萌, NiKolaS, Jane Anna",
};
// Quiero asignar fullName y telephone a dos variables. Primero hagámoslo de forma naive.
let userFullName, userTelephone;
userFullName = userObject.fullName;
userTelephone = userObject.telephone;

// Ahora vamos a hacerlo con destructuración. QUE HUEVA.
// La destructuración está de hueva si el objeto es muy grande.
/*
Hay varias cosas que observar:
1. Es una expresión, pero JAVASCRIPT no entiende si es un statement o una
expresión. Entonces tienes que ponerlo entre paréntesis.

2. Si lo hacemos de la siguiente manera: ({uno, dos} = {a: 10, b:20});
uno y dos van a tener el valor de undefined, las variables tienen que ser
LAS MISMAS que las propiedades del objeto por lo tanto tendría que ser así:
({uno, dos} = {uno: 10, dos:20})
 */
({ uno, dos } = { a: 10, b: 20 });
// console.log(uno, dos);

({ uno, dos } = { uno: 10, dos: 20 });
// console.log(uno, dos);

// También se puede usar rest, le veo más utilidad al manejar objetos.

({ firstName, lastName, ...rest } = userObject);
// console.log(firstName);
// console.log(lastName);
// console.log(rest);
