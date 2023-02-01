export const PI = Math.PI; 

export let user = 'Jon';

 let password = 'qwerty';
//  export default password; // dont make expotation in the declaration; la exportacion no se hace en el momento de la declaracion; always below/under value asignation/declaration (abajo de la asignacion de valor)

const hello = () => console.log('Hi'); // funcion expresada (se guardan en variable)


export default function greeting(){ //--> function declarada.
     // only a single export default is possible. Only one export default function can be used
    console.log('Hi +ES6 modules');
}

export class Greeting{
    constructor(){
        console.log('Hi, +ES6 classes');
    }
}
