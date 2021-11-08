/*
    Si a[i] > b[i] , entonces Alice recibe 1 punto.
    Si a[i] < b[i] , entonces Bob recibe 1 punto.
    Si a[i] = b[i] , ninguna persona recibe un punto.
*/

function comparacionDeDesafio(calificacionA, calificacionB) {
    const usuarioA = 0;
    const usuarioB = 1;
    let respuesta  = [0,0];

    const numeroDesafios = 3
    for(let i= 0; i < numeroDesafios; i++) {
        if(((calificacionA[i] >= 1 ) && (calificacionA[i] <= 100)) && ((calificacionB[i] >= 1 ) && (calificacionB[i] <= 100))) {
           
            if(calificacionA[i] > calificacionB[i]) {
                respuesta[usuarioA] += 1;
            }
            else if(calificacionA[i] < calificacionB[i]) {
                respuesta[usuarioB] += 1;
            }
        } else return ['Error, existe un numero que es mayor a 100 o menor a 1'];
    }
    return respuesta;
}

const alice = [11, 28, 30];
const bob   = [99, 16, 8];
console.log(comparacionDeDesafio(alice, bob));