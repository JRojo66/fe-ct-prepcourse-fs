/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   var Arreglodearreglos = [];

   for (var prop in objeto){
      arreglo.push(prop);
      arreglo.push(objeto[prop]);
      //console.log('arreglo: '+arreglo);
      Arreglodearreglos.push(arreglo);
      arreglo = [];
      //console.log('Arreglodearreglos: '+Arreglodearreglos);
   }
   return (Arreglodearreglos)
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   stringArray = string.split('');
   var count = 1;
   var objetoResultado = {};
   var objetoResultadoOrdenado = {};
   for(i=0;i<string.length;i++) {
       if(objetoResultado.hasOwnProperty(stringArray[i])===false){
        for (j=i+1;j<string.length;j++){
           if(stringArray[i]===stringArray[j]){count = count+1;}
        }
        objetoResultado[stringArray[i]]=count;
        count = 1;
       }
   }
   console.log(objetoResultado);
   var arrayletras = Object.keys(objetoResultado);
   arrayletras.sort();
   for (h=0;h<arrayletras.length;h++){
       objetoResultadoOrdenado[arrayletras[h]]=objetoResultado[arrayletras[h]];
   }
   return(objetoResultadoOrdenado);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   respuesta = string.match(/[A-Z]/g)+','+string.match(/[a-z]/g);
   respuesta = respuesta.replace(/,/g,'');
   return(respuesta);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayEsarf = [];
   arrayFrase = frase.split(' ');
   for(i=0;i<arrayFrase.length;i++){
       arrayWord = arrayFrase[i].split('');
       arrayDrow = arrayWord.reverse();
       drow = arrayDrow.join('');
       arrayEsarf.push(drow);
   }
   esarf = arrayEsarf.join(' ');
   return esarf;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   stringNumero = numero.toString();
   backway = stringNumero.split("").reverse().join("");
   if(stringNumero === backway){
       return('Es capicua')
   } else{
       return('No es capicua')
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   resultado = string.replace(/[a-c]/g,'');
   return(resultado);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for(i=0;i<arrayOfStrings.length-1;i++){
      for(j=0;j<arrayOfStrings.length-1;j++){
          if(arrayOfStrings[j].length>arrayOfStrings[j+1].length){
           [arrayOfStrings[j],arrayOfStrings[j+1]] = [arrayOfStrings[j+1],arrayOfStrings[j]];
          }
      }
  }
  return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3 = [];
   array1.forEach(a1 => {
    array2.forEach(a2=>{
        if(a1===a2){
            array3.push(a1);
        }
    })
   })
return(array3);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
