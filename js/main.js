const NOMBRE = "Eugenia";
let edad = 27; 

console.log ("Desafio: Creando un algoritmo utilizando un ciclo")

/* Definición de algoritmo: 
Conjunto de procedimientos o funciones ordenadas que se necesitan para realizar cierta acción u operación.*/


/* Utilizando estructura for 
let integrantes = 'Mifamilia';
for (let Mifamilia = 1; Mifamilia < 6 ; Mifamilia++) {
    integrantes += prompt ("Ingresa los nombres de tus familiares")+"\n";
}
alert(integrantes);


/* Utilizando estructura while 

let entrada = prompt ("Ingresar nombre de hermanos");
let ingresados = '';
while (entrada != 'Juan') {
    ingresados += entrada +"\n";
    entrada = prompt("ingrsar nombre de sus parejas");
}
alert(ingresados);
*/



let Productos =  prompt("Elige que producto necesitas del 1 a 4");
while (Productos != "gondola") {
    switch (Productos) {
        case "1":
            alert("Verduras");
            break;
        case "2":
            alert("Carnes");
            break;
        case "3":
            alert("Bebidas");
            break;
        case "4":
            alert("Cereales");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("Elige que producto necesitas del 1 a 4");
}
