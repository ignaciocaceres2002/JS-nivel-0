/*

    6. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el
    usuario de la siguiente forma : (suponiendo que indica 30).
    30303030303030303030303030303030303
    2828282828282828282828282
    .....
    333
    1

*/

const pedir = window.prompt("Ingrear el numero inicial");
const pedirNum = parseInt(pedir);


for(i = pedirNum; i >= 1 ; i--) {

    for(x = i; x >= 1; x--) {
        document.write(i);
    }

    document.write("<br>");

}






