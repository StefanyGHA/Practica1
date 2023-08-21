/*let numeros = []
let otrosNumeros = []
let arrayFinal = []
for (let i = 1; i <= 100; i++) {
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

for (let i = 101; i <= 200; i++) {
    let mensaje = `El valor es: ${i}`
    numeros.push(mensaje)
}

arrayFinal = [...numeros, ...otrosNumeros]

arrayFinal.forEach((i) => {
    console.log(i)

})*/

let persona = {
    nombre: `Stefany`,
    edad: 19,
    carrera: `Software`
}

let persona2 = {
    nombre: `Stefany`,
    edad: 19,
    carrera: `Software`
}

let persona3 = {
    nombre: `Stefany`,
    edad: 19,
    carrera: `Software`
}

let arrayObjetos = [persona, persona2, persona3]

arrayObjetos.array.forEach( (i) => {
    console.log(i)
    
})

console.log(arrayObjetos[2].edad)