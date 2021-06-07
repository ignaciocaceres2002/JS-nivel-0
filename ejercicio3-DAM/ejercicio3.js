/*

    3. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá
    indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de
    los números introducidos.

*/

let suma = 0;
let numero;

do {
    numero = window.prompt("Ingrese un numero");

    if(!isNaN(numero))

        {
            console.log("Se puede hacer la suma");
            numeroDefinitivo = parseInt(numero);
            suma += numeroDefinitivo;
        } 
    
    else {

        if (numero != undefined) {
            alert("Se admiten solo caracteres numericos"); 
        }
        
    }

    continuar = confirm ("Desea continuar?");

} 

while (continuar == true);


document.write(suma);








