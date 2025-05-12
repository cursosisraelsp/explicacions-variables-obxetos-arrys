// ARRAYS CON VALORES NUMÉRICOS
let variableConDatos = [4,5,6]
let variableConDatos2 = [1,2,3,4,5,6,7,8,9,10]

/*
// 1º SEN CONDICIÓNS
for(let contador = 0; contador < variableConDatos.length; contador++){
    console.log("contador do primeiro for: \n", contador)

    for(let contador2 = 0; contador2 < variableConDatos2.length; contador2++){
        console.log(variableConDatos2[contador2])
    }
   
}

*/

/*
for(let contador = 0; contador < variableConDatos.length; contador++){
    console.log("contador do primeiro for: \n", contador)

    for(let contador2 = 0; contador2 < variableConDatos2.length; contador2++){

        if(variableConDatos[contador] > 5){

            console.log(variableConDatos2[contador2])
        }

    }
   
}
*/

// OBXETOS
let obxeto1 = {
    nome: "Obxeto 1",
    valor: 100,
    tipo: "Obxeto",
}


//console.log(obxeto1.tipo)
/*
for(let elementoDoObxeto in obxeto1){
    console.log(elementoDoObxeto)
    if(elementoDoObxeto === "nome"){
        console.log("obxeto1[elementoDoObxeto]",obxeto1[elementoDoObxeto])
    }
}
*/

let arrayConObxetos = [{
    nome: "Obxeto 1",
    valor: 100,
    tipo: "Obxeto",
},{
    nome: "Obxeto 2",
    valor: 200,
    tipo: "Obxeto",
},{
    nome: "Obxeto 3",
    valor: 300,
    tipo: "Obxeto",
}]


// Accedo os obxetos
console.log(arrayConObxetos[0])
console.log(arrayConObxetos[1])
console.log(arrayConObxetos[2])

// Accedo os valores dos obxetos

console.log(arrayConObxetos[0].valor)
console.log(arrayConObxetos[1].nome)
console.log(arrayConObxetos[2].nome)


/*
let array2 = [];
for(let contadorObxeto = 0; contadorObxeto < arrayConObxetos.length; contadorObxeto++){
    if(arrayConObxetos[contadorObxeto].valor > 200){
        console.log(arrayConObxetos[contadorObxeto].nome)
        console.log(arrayConObxetos[contadorObxeto].valor)
        // Introduzco o valor de arrayConObxetos[contadorObxeto] no array2
        array2.push(arrayConObxetos[contadorObxeto])
    }
}
console.log(array2)
*/