/*

    2. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar”
    deben mostrarse todas las cadenas concatenadas con un - (guión).

*/

let cadenaArray = [];

do {
    let cadenaCaracter = window.prompt("Ingrese una cadena de texto");
    cadenaArray.push(cadenaCaracter);

    continuar = confirm ("Desea continuar?");
    console.log(cadenaArray);
}

while(continuar == true);

cadenaArray.forEach(function (elemento, index) {

    document.write(elemento + " - ");
  
}); 




