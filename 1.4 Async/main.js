// let callback = () => {
//     console.log('este es mi mensaje dentro de un callback')
// }


let mostrarMensaje = (callback) => {
    // no hay nada se va directo al callback
    callback()
}

mostrarMensaje( () => console.log('este es mi mensaje dentro de un callback'))


/*
------------------------------------------------
tarea :
fetch js
Fetch 

------------------------------------------------
*/