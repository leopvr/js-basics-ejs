// var nombre = "Leo"
// var edad = 21
// var enPareja = true
// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var colegas = ["Fabi", "Silvi", "Carla", "Sabri", "Patri"]

// var object = {
//     nombre: "Leo",
//     edad: 21,
//     enPareja: true,
//     numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     colegas: ["Fabi", "Silvi", "Carla", "Sabri", "Patri"]
// }

// var infoUsuario = {
//     numFavs: [6, 5, 4],
//     perro: {
//         nombre: "Cani",
//         edad: 5
//     },
//     gato: {
//         nombre: "Cati",
//         edad: 3
//     }
// }

// console.log(object)
// console.log(infoUsuario)

//-----------------------While-----------------------
let countWhile = 10
while (countWhile <= 20){
    console.log("Contador", countWhile);
    countWhile++;
}

//-----------------------Do While-----------------------
let countDoWhile = 10;
do {
    console.log("Contador Do While: ", countDoWhile);
    countDoWhile++;
} while (countDoWhile <= 20);

//-----------------------For-----------------------
let countFor = 10;
for (let i = 0; i <= countFor; i++) {
    console.log("Iniciatec", i);
}

//-----------------------For Array-----------------------
let arrayFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= arrayFor.length; i++) {
    console.log("arrayFor", i)
}

//-----------------------For each-----------------------
let countfe = 0;
arrayFor.forEach(e => {
    console.log("Contador for each: ", countfe, arrayFor[countfe]);
    countfe++;
});