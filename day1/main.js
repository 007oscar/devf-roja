// document.getElementsByTagName('body')[0].innerHTML = `<h1> hola </h1>`
// console.warn('wooowwwwwwwwwwwwwwwww')
// console.error('es un error')
// console.info('info')

// function saludo(){
//     let hola ;
//     console.log(hola)
// }

// saludo()

// console.log(hola)

// hacer una funciones que convierta los grados centigrados  a grados farenhaig

function gradosCenToFar(grados){
    // (0 °C × 9/5) + 32 = 32 °F
    return grados * 9/5 + 32 
}

// hacer una funcion que muestre la tabla de multiplicar de un numero

function tabla(numero){
    for (let index = 1; index < 11; index++) {
        console.log(`${numero} X ${index} = ${ numero * index}`)
    }
}

// 

console.log(gradosCenToFar(20))
tabla(2)