/*

    1. Pide una nota (número). Muestra la calificación según la nota:
        ○ 0-3: Muy deficiente
        ○ 3-5: Insuficiente
        ○ 5-6: Suficiente
        ○ 6-7: Bien
        ○ 7-9: Notable
        ○ 9-10: Sobresaliente

*/

let calificacion;
let nota = window.prompt("Por favor, ingrese su calificacion");
let notaNum = parseInt(nota);

switch(notaNum) {
    case 0: 
    case 1:
    case 2:calificacion = "muy deficiente"; break;
    case 3: 
    case 4: calificacion = "insuficiente"; break;
    case 5: calificacion = "suficiente"; break;
    case 6: calificacion = "bien"; break;
    case 7: 
    case 8: 
    case 9: calificacion = "notable"; break;
    case 10: calificacion = "sobresaliente"; break;
}

document.write("Su calificacion es " + calificacion);



