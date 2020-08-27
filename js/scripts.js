function init (){

}
//function myFunction() {



    //switch("") {
        //case 1: 

            //var pregunta1 = prompt("ingrese un número del 1 al 100");
            //for (let i = 0; i <= pregunta1; i++) {
                
                //console.log(i);
            //};
            //break;
        //case 2:
        //do {
            //var pregunta2 = prompt("¿De qué color es el caballo blanco de Napoleón?");
        //}
        //while (pregunta2 !== "Blanco") 
        //case 3:
        var num1 = prompt("Ingresa tu promedio de Matemáticas");
        var num2 = prompt("Ingresa tu promedio de Física");
        var num3 = prompt("Ingresa tu promedio de Ciencias");
        function promedio (num1, num2, num3) {
            var num1 = parseInt(num1);
            var num2 = parseInt(num2);
            var num3 = parseInt(num3);
            var resultadoSuma = num1 + num2 + num3;
            var i = (resultadoSuma.lenght)
            var resultadoProm = resultadoSuma / i;
            return resultadoProm;
        }
        alert(parseInt("Tu promedio es: " + (promedio(num1, num2, num3).resultadoProm)));
            
        
   // }  


//}
//1. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir 
//por consola los números desde el 0 hasta el número que ingresó el usuario

//2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el
//usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo
//contrario, se le dejará de hacer la pregunta.

//3. En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le
//debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego,
//debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El
//promedio de notas mostrado debe estar redondeado a un número entero.

//4. Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de
//manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas
//por consola, a excepción de la que tenga el nombre de “manzana”.

//5. Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y
//consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()).