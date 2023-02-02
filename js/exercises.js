
//1)Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//Funcion declarada
function characterCounting (string = ''){
    if(!string){
        console.warn('You dont entry any string')
    }else{
        console.info(`  The chain '${string}' has ${string.length} characters`)
    }
}
console.log(window);
characterCounting('hola');

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

 