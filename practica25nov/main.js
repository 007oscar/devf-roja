
let dog = document.getElementById('dog')
// dog.style.left = "200px";
// dog.style.bottom = "200px";
document.addEventListener('keydown', (e) =>{
    console.log(e.which)
    // moveDogLeft()
})

// function moveDogLeft() {
//     var leftNumbers = dog.style.left.replace('px', '')
//     var left = parseInt(leftNumbers, 10)
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`
//     }
//   }

function inicio( event){
    console.log('prueba')
}

function mostrarMensaje(event){
   // event.preventDefault()
    //var data = event.dataTransfer.getData("text/plain")
   // console.log(data)
    //var i = document.createElement('img')
    //i.src = 'images/dog.png'

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      }) 

    //alert("gracias!!")
    document.getElementById('dog-house-img').src =  'images/doginhouse.png'
    document.getElementById('dog').src = ''
}

function configuracion(event){
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
}
