
//1)Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//Funcion declarada
// function characterCounting (string = ''){
//     if(!string){
//         console.warn('You dont entry any string')
//     }else{
//         console.info(`  The chain '${string}' has ${string.length} characters`)
//     }
// }
const characterCounting = (string = '') => 
    (!string) 
        ? console.warn('You dont entry any string') 
        : console.info(`  The string '${string}' has ${string.length} characters`);

// characterCounting();
// characterCounting('Hello World');

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

 const cutOutText = (string = '', length = undefined) => 
    (!string)
        ? console.warn('No string was entered')
        : (length === undefined)
            ? console.warn('No lenght to cut text was entered')
            : console.info(string.slice(0, length))

// cutOutText('I was sitting in my desk, very focused/concentrated', 15);
// cutOutText();
// cutOutText('Hello');
// cutOutText('');


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
    const stringToArray = (string = '', separator) =>
    
        (!string)
            ? console.warn ('No string entered')
            : (separator === undefined)
                ? console.warn('No character separator was entered')
                : console.info(string.split(separator))


    let separador = ' '; 
    
    // stringToArray('Hello my king', separador); 
    // stringToArray('january,february,march, april, may, june, july, august, september, october, november, dicember', ',')
    // stringToArray('Hello')
    // stringToArray('', ' ');



//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.,

const repeatText = (text = '', number = undefined) => {

    if (!text) return console.warn('No string was entered');

    if (number === undefined) return console.warn('No repetition number was entered');
    
    if (number === 0) return console.error('Times number can not be 0');
    
    if (Math.sign(number) === -1) return console.error('Times number can not be negative');

    if (isNaN(number)) return console.error('Invalid number');
    

    for (let i = 0; i < number; i++) console.info(`${text} ${i}`)
    
    // let repeatedText = '';
    // for(let i = 0; i < number; i++){
    //     repeatedText  += ` ${text}`;  
    // }
    // return repeatedText
}

// repeatText('', 3);
// repeatText('Pepe')
// repeatText('pepe', 0);
// repeatText('pepe', -1);
// repeatText(3, 'JAJ');
// repeatText(3);
// repeatText('hello', 3)




//5 a-) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


const stringInverted = (string= '') => {
    if (!string) return console.warn('No string was entered');

    if (!isNaN(string)) return console.warn('Number format is invalid');

    let stringReversed = '';
    for(let i = string.length -1 ; i >= 0; i--){
        stringReversed += string[i];
    }
    return stringReversed;
}

//5 b-)

const stringInverted2 = (string = '') =>
    (!string) 
        ? console.warn('No string was entered')
        : console.info(string.split('').reverse().join(''));

// stringInverted2();
// stringInverted2('Hello');

// console.log(stringInverted(2));

// ----indexOf() training----

//0) 
let tickets = [1,2,3,4,5,6,7,8,8,3,4]

const validTicket = (id) => tickets.indexOf(id) != -1;

let isValid = validTicket(4); //Ticket is valid

(isValid) 
    ? console.log('Ticket is valid') 
    : console.log('Ticket is not valid');
//1)
let names1 = ['Juan', 'Jorge', 'Luis', 'Daniel']

function isRegistered(name){
    return names1.indexOf(name) != -1;
}


(isRegistered('Jorge'))
    ? console.log('Name is registred')
    : console.log('Name is not registred');

//2)
let names2 = ['Juan', 'Jorge',  'Luis', 'Daniel']

function position(name){
    return names2.indexOf(name);
}

// console.log(position('Luis')); //2

//3)
let names3 = ['Juan', 'Jorge', true, 'Luis', 'Daniel', true, ]

function position2(name, begin){
    return names3.indexOf(name, begin);
}

console.log(position2('Jorge', 3)); //-1

//4)
function Animal(name){
    this.name = name;
}
let dog = new Animal('Lala')
let cat = new Animal('Mila')
let rabbit = new Animal ('Coco')
let rabbit2 = new Animal('Toto')
let bird = new Animal ('Pico')

let animals = [dog, cat, rabbit, bird]

function findAnimal(animal){
    return animals.indexOf(animal)
}
// console.log(findAnimal(dog)); // index 

function printAnimalName(index){
    if (index === -1) return 'dont exist';
    let animal = animals[index]
    return `The animal name is ${animal.name}` 
}

// console.log(printAnimalName(findAnimal(rabbit)));


function isTypePrimitive(param){
    // return (typeof param === 'number' || typeof param === 'string' || typeof param === 'boolean')
    return ['string', 'boolean', 'number'].indexOf(typeof param) != -1; 
}

console.log( 'is it primitive type? ' + isTypePrimitive([]));

 /***************/console.clear()/***************/ 


//5)
const names0 = ['florin', 'Ivan', 'Liam']

console.log(names0.indexOf('Ivan')); //1

const idx = names0.indexOf('Ivan') 

console.log(idx);

if(idx > -1){
    console.log('Yey, we have jay');
}else{
    console.log('Sad..');
}


 /***************/console.clear()/***************/ 


//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textOnString = (string = '', text = '') => {

    if (!string) return console.warn('No string was entered');
    if (!text) return console.warn('Evaluation text is not enter');

    let i = 0,
        counter = 0;
    while(i !== -1){
        i = string.indexOf(text, i);
        if(i !== -1){
            i++;
            counter ++
        }
    }
    return console.info(`text ${text} is repeted ${counter} times in --> ${string}`)
}

textOnString('My name is juampi, juampi, juampi', 'juampi');

textOnString();
textOnString('', 'mundo');
textOnString('Hola bebe, bebe, bebe,bebe', 'bebe')

/***************/console.clear()/***************/

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const polydrome = (word = '') => {
//     if (!word) return console.warn('No word was entered');

//     word = word.toLowerCase();

//     let word2 = word.split('').reverse().join('');
   
//     if (word === word2){
//         return `${word} is polydrome. Original: ${word} Flipped: ${word2}`
//     }else{
//         return `${word} is not polydrome. Original: ${word} Flipped: ${word2}`
//     }

// }

 

const polydrome = (word = '') => {
    if (!word) return console.warn('No word was entered');

    word = word.toLowerCase();

    let word2 = word.split('').reverse().join('');
   
   return (word === word2)
        ? console.info(`${word} is polydrome. Original: ${word} Flipped: ${word2}`)
        : console.info( `${word} is not polydrome. Original: ${word} Flipped: ${word2}`)
    

}

// polydrome();
// polydrome('salas');
// polydrome('Hello');



//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const text = 'str1, str2, str3, str4, str5';

const deletingPatron1 = (string = '', patron= '' ) => {
   if (!string) return console.warn('No string has been entered')
   if (!patron) return console.warn('No patron has been entered')
    
   let freePatronString = string.replaceAll(patron, '');
    return freePatronString; 
}

// console.log(deletingPatron1(text,'str'));

const deletingPatron = (string = '', patron= '' ) => 
    (!string)
        ? console.warn ('No string has been entered')
        : (!patron)
            ? console.warn('No patron has been entered')
            : console.info(string.replace(new RegExp(patron,'ig'),''))

// deletingPatron();
// deletingPatron('hola manola')
// deletingPatron('Hola strManuel, strcomo estas?', 'str')


//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const randomNumberBetwenen = ()  => console.info (Math.round(Math.random() * (600 - 501) + 501))
const randomNumberBetwenen = ()  => console.info (Math.round(Math.random() * 100 + 500))

// randomNumberBetwenen();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const isItCapicua = (number = 0) => {
    if (!number) return console.warn('Number is not entered')
    if (typeof number !== 'number') return console.error(`The value  ${number} is NOT valid`)

    number = number.toString()
    let reversedNumber = number.split('').reverse().join('');
    return (number === reversedNumber)
        ? true
        : false
 
}

// console.log(isItCapicua());
// console.log(isItCapicua('dede'));
// console.log(isItCapicua(921));
// console.log(isItCapicua(101));
// console.log(isItCapicua(19.22));
// console.log(isItCapicua(191.191));


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (number = undefined) => {
    if(number === undefined) return console.warn('No number has been entered');

    if(typeof number !== 'number') return console.error(`The value entered '${number}' is not valid`)

    if(number === 0)  return console.error('Number can not be 0')
    
    if(Math.sign(number) === -1) return console.error('Number can not be negative')

    let factorial = 1; 

    for(let i = number; i > 0; i--){
        factorial *=  i; 
    }
    return `${number} factorial is equal to ${factorial}`
}

// console.log(factorial());
// console.log(factorial('tres'));
// console.log(factorial(0));
// console.log(factorial(-1));
// console.log(factorial(4));
// return + console will return an undefined 

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

   
const isPrime = (number = undefined) => {
    if(number === undefined) return console.warn('No number has been entered');

    if(typeof number !== 'number') return console.error(`The value entered '${number}' is not valid`)

    if(Math.sign(number) === -1) return console.error('Number can not be negative')

	// special cases
	if (number == 0 || number == 1 || number == 4) return false;
	for (let i = 2; i < number / 2; i++) {
		if (number % i == 0) return false;
	}
	// if it can not be divided for any of the above, is prime
	return true;

}

// console.log(isPrime());
// console.log(isPrime('dod'));
// console.log(isPrime(-1));
// console.log(isPrime(7));

const isPrime2 = (number = undefined) => {
    if(number === undefined) return console.warn('No number has been entered');

    if(typeof number !== 'number') return console.error(`The value entered '${number}' is not valid`)

    if(number === 0)  return console.error('Number can not be 0')

    if(number === 1)  return console.error('Number can not be 1')

    if(Math.sign(number) === -1) return console.error('Number can not be negative')
    let divisible = false;
    for (let i = 2; i < number ; i++){
        if((number % i) === 0){
            divisible = true;
            break; 
    }
}
return (divisible)
    ? console.log(`Number ${number} is not prime`)
    : console.log(`Number ${number} is prime`)

}

// isPrime2()
// isPrime2('dos')
// isPrime2(true)
// isPrime2(0);
// isPrime2(1)
// isPrime2(-13)
// isPrime2(13)
// isPrime2(200)

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const isPair = (number) => {
    if(number === undefined) return console.warn('No number has been entered');

    if(typeof number !== 'number') return console.error(`The value entered '${number}' is not valid`)

    if(Math.sign(number) === -1) return console.error('Number can not be negative')


    return((number % 2) === 0)
        ? `The number ${number} is pair`
        : `The numner ${number} is not pair`

}

// console.log(isPair());
// console.log(isPair('232'))
// console.log(isPair(-1))
// console.log(isPair(10));
// console.log(isPair(11));

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. The validation order is important its correct functioning

const degreeConverter = (grades = undefined, scale = undefined) => {

    if(grades === undefined) return console.warn('No grades has been entered'); //-> this grade validation must be first
    
    if(typeof grades !== 'number') return console.error(`The value entered '${grades}' is not valid`) 

    if (scale === undefined) return console.warn('No scale has been entered')

    if(typeof scale !== 'string') return console.error(`Scale must be a number, scale entered '${scale}' is not a number`)

    if(scale.length !== 1 || !/(C|F)/.test(scale)) return console.warn(`"${scale}": Unrecognized scale value`)

    // let result = 0;
    // if (scale === 'C'){
    //      result = ((grades * 1.8) + 32).toFixed(2) + 'F'
    // }else if (scale === 'F'){
    //     result = ((grades - 32) / 1.8).toFixed(2) + 'C'
    // }
    // return result; 
    if(scale === 'C'){
        return `${grades}°C= ${Math.round(grades * (9/5)) +32}F`
    }else if(scale ==='F'){
        return `${grades}°F = ${Math.round((grades-32)*(5/9))}°C`
    }
        
}   

// console.log(degreeConverter());

// console.log(degreeConverter('dos'));

// console.log(degreeConverter(21));

// console.log(degreeConverter(2,true));

// console.log(degreeConverter('cero'));

// console.log(degreeConverter(21, 'CC'));

// console.log(degreeConverter(21, 'd'));

// console.log(degreeConverter(10, 'F'));

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const discount = (amount = undefined, discount = undefined) => {
    if(amount === undefined) return console.warn('No amount has been entered'); //-> this grade validation must be first
    
    if(typeof amount !== 'number') return console.error(`The value entered '${amount}' is not valid`) 

    if(Math.sign(amount) === -1) return console.error('Amount can not be negative')

    if (discount === undefined) return console.warn('No dicount has been entered')

    if(typeof discount !== 'number') return console.error(`Discount must be a number, discount entered '${discount}' is not a number`)

    if(Math.sign(discount) === -1) return console.error('Discount can not be negative')

    let  discountValue = discount / 100
    let newPrice = amount - (amount * discountValue)
    return (newPrice);

}
discount();
discount(20);
discount(20);
discount('cien', 10)
discount(100, 'ochenta');
console.log(discount(1000, 20));
console.log(discount(500, 20));
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

