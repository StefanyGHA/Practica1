const usuarios = [
    {"name" : "user1", "Edad" : 21, "Carrera" : "Software", "year" : 1 },
    {"name" : "user15", "Edad" : 22, "Carrera" : "Software", "year" : 2 },
    {"name" : "user19", "Edad" : 23, "Carrera" : "Software", "year" : 3 },
    {"name" : "user10", "Edad" : 26, "Carrera" : "Software", "year" : 4 },
    {"name" : "user11", "Edad" : 29, "Carrera" : "Software", "year" : 5 },
    {"name" : "user17", "Edad" : 30, "Carrera" : "Software", "year" : 6 },
    {"name" : "user4", "Edad" : 27, "Carrera" : "Software", "year" : 7 },
    {"name" : "user6", "Edad" : 21, "Carrera" : "Software", "year" : 8 },
    {"name" : "user2", "Edad" : 22, "Carrera" : "Software", "year" : 9 },
];

const usuariosFilter = usuarios.filter( (x) => {
    return x.Carrera == "Software" && user.Edad == 21

})
console.log(usuariosFilter)

const usuariosMap = usuarios.map((user) => {
    return {
        "nombre" : user.name,
        "edad" : user.Edad
    }
})

console.log(usuarios.Map);




