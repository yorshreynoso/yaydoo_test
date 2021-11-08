/*
    Dada una cadena de texto (string), obtener el número de veces que se repite cada
    palabra del texto. El texto puede tener puntos y comas, puede tener palabras en
    mayúsculas o minúsculas. Devolver resultado en JSON
*/

function limpiarString(texto) {
    let temp = texto.replace(/[`~!@#$%^&*()_|+\-=?;:'—",.<>\{\}\[\]\\\/]/gi, '');
    temp = temp.replace(/(\s{2,})/g, ' '); // eliminamos espacios dobles con expresiones regulares
    temp = temp.toUpperCase();

    return temp;
}


function contarPalabras(texto) {
    let palabrasEncontradas = [];
    let cuentaPalabras      = {};
    
    let textoLimpio         = limpiarString(texto);

    const aString           = textoLimpio.split(' ');          // separamos el string en palabras.
    console.log(`Total de palabras encontradas: ${aString.length}`);   // total de caracteres que deben existir

    aString.forEach(element => {
        if(palabrasEncontradas.indexOf(element) !== -1) {
            cuentaPalabras[element] += 1;
        } 
        else {
            palabrasEncontradas.push(element);
            cuentaPalabras[element] = 1;
        }
    });

    return cuentaPalabras;
}

const textoParaContar = `Érase una vez una niñita que lucía una hermosa capa 
                    de color rojo. Como la niña la usaba muy a menudo, todos la
                    llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la
                    llamó y le dijo: —Abuelita no se siente muy bien, he horneado
                    unas galletitas y quiero que tú se las lleves. —Claro que sí
                    —respondió Caperucita Roja, poniéndose su capa y llenando su
                    canasta de galletas recién horneadas. Antes de salir, su mamá
                    le dijo: — Escúchame muy bien, quédate en el camino y nunca
                    hables con extraños. —Yo sé mamá —respondió Caperucita Roja y
                    salió inmediatamente hacia la casa de la abuelita.`

console.log(contarPalabras(textoParaContar));