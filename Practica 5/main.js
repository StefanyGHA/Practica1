// //llamada antes de incializar la funcion
// saludar()
// //funcion de primer orden
// function saludar() {
//    console.log("hola mundo")
// }
// //llamada despues de inicializar
// saludar()
// //funcion anonima
// const saludarAnonimo = function() {
//     saludar()
// }
// //llamada funcion anonima 
// saludarAnonimo()

// //objeto
// const usuario = {
//     nombre: 'thvst',
//     correo: 'Sin agregar'
// }

// function agregarCorreo(nuevoCorreo) {
//     usuario.correo = nuevoCorreo
// }

// console.log(usuario);
// agregarCorreo('stefany@gmail.com')
// console.log(usuario)

// let a = 5
// let b = 10

// function suma () {
//     let c = 10
//     return a + b
// }

// console.log(suma());

//declarando funcion anonima
/*const suma = function(a, b) {
    return a + b
}
console.log(suma(10,10))
suma = 'esta es una suma'
console.log(suma)*/

//crear una funcion que permita determinar multiplicacion a partir de sumas
 /*const multiplicacion = function suma(a, b) {
    return (b != 0) ? a + suma(a, b-1) : 0
 }

 console.log(multiplicacion(5, 2));/*
 /***
  * funciones recursivas
  */

 let numero = 0
 while(numero < 10){
    console.log(numero)
    numero++
 }

 function contador(numero = 0) {
    if (numero >= 10){
        return
    }
    console.log(numero);
    contador(numero+1)
 }
 console.log("Funcion recursiva")
 contador()

 //funciones anidadas

 function varianza(datos) {
    2
    function sumatoria(serie){
       let suma = 0
       serie.forEach(numero => {
        let resultado = numero - mediaDatos
         suma += Math.pow(resultado, 2)
       });
       return suma
    }
    return sumatoria(datos) / datos.length
 }

 function mediana(datos){
     if (largo %2 == 0){
        let mitadArreglo =largo/2
        let anterior = mitadArreglo - 1
        let siguiente = mitadArreglo + 2

        return (datos [anterior] + datos[siguiente]) / 2
     }else {
        let mitadArreglo = Math.round((largo)/2)
        return datos [mitadArreglo-1]
     }
 }

 const misDatos = [1,2,7,19,3]
 console.log('La media ${misDatos} es ${media(misDatos)}')

 console.log(mediana(misDatos))

 function multiplicar(a, ...args){
    args.forEach(numero => {
        a*=numero
    })
    return a 
 }
 console.log('funcion de parametros')
 console.log(multiplicar(2));
 console.log(multiplicar(2,4));
 console.log(multiplicar(2,4,5));
 console.log(multiplicar(2,4,5,6));
