// //(1) CONVERTIR CELSIUS A FAHRENHEIT

// //Creamos variables para pedir informacion al usuario
// document.write("<h1> Convertir Grados ")
// let temperature=Number(prompt("Ingrese la temperatura"));

// let answer =prompt("La temperatura es en (C)elsius o (F)arenheit");

// //Sentencia de control para evaluar los casos posibles y ser ejecutados 
// switch (answer){

//     case 'C':
//         let unidadFinal = prompt("¿Quiere cambiarlo a (F)arenheit :");
//         if(unidadFinal==='F'){
//         let farenheitConvertido = (temperature * 9/5) + 32; 
//         document.write(" <h2> Tu temperatura en Farenheit es de : " + farenheitConvertido + "<br>" );
//         break;
//         }
// case 'F': 
// let unidadFinal2=prompt("¿Quieres cambiarlo a (C)elsius : ");
// if(unidadFinal2==='C'){
//     let celsiusConvertido = (temperature - 32) * 5/9;
//     document.write(" <h2> Tu temperatura en Celsius es de : " + celsiusConvertido + "<br>");
//     break;
// }

// }



// // (2) INGRESO DE EDAD (MESES,DIAS)
// document.write("<h1> Edad en meses y dias <br>")
// //varibale para pedir edad 
// let edad = Number(prompt("Ingrese su edad : "));

// //Condicion
// if(edad>0){
//     //Calculamos los datos
// let meses = edad * 12;
// let dias = edad * 365;

// document.write("Tu edad en meses es de : " + meses + "meses <br>");
// document.write("Tu edad en dias es de : " + dias + "dias <br>");
// }else{
//     alert("Ingrese un numero ");
// }


// (3) CALIFICACION
// document.write("<h1>Calificaciones : <br>")
// //Pedidimos calificacion
// let calification = Number(prompt("Ingrese la calificacion : "));

// switch(true){

//     case (calification===10) :
//         document.write("<h2>Tu calificacion es de :" + calification + " EXCELENTE!<br>");
//         break;

// case ( calification<=9 && calification>=7):
//     document.write("<h2>Tu calificacion es de :" + calification + " SOBRESALIENTE!<br>");
//     break;

//     case ( calification<=6 && calification>=4):
//     document.write("<h2>Tu calificacion es de : " + calification + " ACEPTABLE!<br>");
//     break;

//     case ( calification<=3):
//     document.write("<h2>Tu calificacion es de :" + calification + " INSUFICIENTE!<br>");
//     break;

// }

// (4) CONTADOR DE NUMEROS
// document.write("<h1> Cantidad numeros <br>")
// let input =prompt("Ingresa 10 numeros aleatorios (se paralos por espacios), no importa el orden : ");
// //Separa los numeros y los convierte en un array
// let numeros = input.split(" ");
// let pares =0, impares=0;

// //Se crea un for para recorrer el largo del array 
// for(let i = 0; i < numeros.length; i++){
//     let num = parseInt(numeros[i]); //Convierte el array a numeros 

//     if(!isNaN(num)){
//         if(num % 2 == 0){
//             pares++;
//         }else{
//             impares++;
//         }
//     }
// }
// document.write("<h2> La cantidad de numeros pares es de : " + pares + "<br>");
// document.write("<h2> La cantidad de numeros impares es de : " + impares + "<br>");

//CAJERO AUTOMATICO

// let saldo = 100000;

// let opcion;
// while (opcion !== 4) {
//     opcion = parseInt(prompt(
//         "Bienvenido a tu cajero automatico que deseas realiza hoy\n " +
//         "1. Ver Saldo\n" +
//         "2. Depositar Dinero\n" +
//         "3. Retirar Dinero\n" +
//         "4. Salir\n\n" +
//         "Elige una opción:"

//     ))

//     if (isNaN(opcion)) {
//         alert("Ingrese un numero valido");
//         continue;
//     }


//     switch (opcion) {

//         case 1:
//             alert("Tu saldo es de : $ " + saldo);
//             break;

//         case 2:
//             let deposito = parseFloat(prompt("Cuanto desea depositar :"));
//             if(!isNaN(deposito &&  deposito>0)){
//                 saldo+=deposito
//                 alert("Tu deposito fue de : $" + deposito + "\nTu saldo ahora es de : $" + saldo);
                
//             }else{
//                 alert("Monto insuficiente");
//             }
//             break;
            
        

//         case 3:
//             let retiro = parseFloat(prompt("Cuanto desea retirar :"));
//             if(!isNaN(retiro &&  retiro>0)){
//                 saldo-=retiro;
//                alert  ("Tu retiro fue de : $" + retiro + "\nTu saldo ahora es de : $" + saldo );
                
//             }else{
//                 alert("Monto insuficiente");
//             }
//             break;

//         case 4:
//             alert("Saliendo del programa");
//             break;

//         default:
//             alert("Ingrese una de las opciones");

//     }
// }
