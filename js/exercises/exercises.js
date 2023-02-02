
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
        : console.info(`  The chain '${string}' has ${string.length} characters`);

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
    
    if(Math.sign(number) === -1) return console.error('Times number can not be negative');

    if (isNaN(number)) return console.error('Invalid number');
    

    for (let i = 0; i < number; i++) console.info(`${text} ${i}`)
    

    // let repeatedText = '';
    // for(let i = 0; i < number; i++){
    //     repeatedText  += ` ${text}`;  
    // }
    // return repeatedText
}

repeatText('', 3);
repeatText('Pepe')
repeatText('pepe', 0);
repeatText('pepe', -1);
repeatText(3, 'JAJ');
repeatText(3);
repeatText('hello', 3)



// (!text)
// ? console.warn('No string was entered')
// : (number === undefined)
//     ? console.warn('No repetition number was entered')
//     : {
       
//     }