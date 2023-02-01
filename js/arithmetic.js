
function sum (a,b){
    return a +b;
}

function rest (a,b){
    return a - b;
}

export const arithmetic = {
    sum,
    rest,
}

export default function greeting(){
    console.log('Hi +ES6 modules');
}

