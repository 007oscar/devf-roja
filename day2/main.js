/*

                            Objetos Literales

-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
*/

let myPenguin = {
    character : 'Overbite', 
    origin : 'Penguin Land',
    notes : 'Commander of a special Penguin Task Force. His mission is to bring fragile eggs back safely to home from a foreign land.'
}

/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
*/

console.log(`Hola, soy un pingüino y mi nombre es ${ myPenguin.character }`)

/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/

myPenguin.puedeVolar = false

/*
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
-----------------------------------------------------------------------
*/

myPenguin.graznar = function(){
    console.log('Kaww kaww!!')
}

/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/

myPenguin.saludar = function(){
    console.log(`Hola, soy un pingüino y mi nombre es ${ this.character }`)
}

/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------
*/
myPenguin.character  = 'Señor Pingu'
myPenguin.saludar()

/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :("
-----------------------------------------------------------------------
*/

myPenguin.volar = function(){
    this.puedeVolar ?  console.log('¡Puedo volar!') : console.log('No puedo volar :(')
}

/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.
-----------------------------------------------------------------------
*/

myPenguin.puedeVolar = true
myPenguin.volar()

/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
    para preparar Mole. Debe contener las propiedades de
    título (string), porciones (numero) e ingredientes (un
    arreglo de strings). Muestra la información de la receta
    para que luzca así:
    
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa
-------------------------------------------------------------
*/

let recetaMole = {
    titulo : 'Mole',
    porciones : 2,
    ingredientes : ['canela', 'comino', 'cocoa']
}

console.log(recetaMole.titulo)
console.log('Porciones: ' + recetaMole.porciones)
console.log('Ingredientes')
recetaMole.ingredientes.forEach( ingrediente => console.log(ingrediente))

/*
-------------------------------------------------------------,

10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------
*/

let libros = [{
                    titulo : 'pepe',
                    autor : 'anonimo',
                    leido : false
                },
                {
                    titulo : 'chivas',
                    autor : 'jorge vergara',
                    leido : false
                },
                {
                    titulo : 'carpinteria',
                    autor : 'pepe el toro',
                    leido : true
                }

            ]

libros.forEach( libro => console.log(`Titulo : ${libro.titulo}\nAutor : ${libro.autor}\nLeido : ${ libro.leido ? 'Si':'No'}`))

/*

                            Objetos

-----------------------------------------------------------------------
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
	 Generar el RFC a partir de el nombre, edad y sexo
-----------------------------------------------------------------------
*/

class Persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre
        this.edad =  edad
        this.sexo = sexo
        this.RFC = this.nombre + this.edad + this.sexo
        this.peso = peso
        this.altura = altura
    }
    calcularIMC(){
        return this.peso / (this.altura^2)
    }
    esMayorDeEdad(){
        return edad >= 18 ? 'Si' : 'No'
    }
    obtenerRFC(){
        return this.RFC
    }

}
/*
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/

class Cuenta {
    constructor(titular, cantidad){
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(ingreso){
        if  (ingreso + this.cantidad >= 10 && ingreso + this.cantidad <= 900 ){
            this.cantidad += ingreso
        } else{
            console.log(`Por regla de negocio no debe de tener más de $900 y menos de $10.`)
            console.log(`Cantidad actual : ${this.cantidad}`)
            console.log(`Cantidad a ingresar : ${ingreso}`)
            console.log(`Cantidad a total : ${ingreso + this.cantidad}`)
            
        }
    }
    retirar(retiro){
        if( this.cantidad - retiro >= 0 ){
            this.cantidad -= retiro
            console.log(`Estado de cuenta : ${this.cantidad}`)
            return retiro
        }else{
            console.log(`La cantidad a retirar supera su cantidad actual que es de $${this.cantidad}.`)
        }
    }

}

class Restaurant {
    agregarClientes( listaDeClientes ){
        this.listaClientes = listaDeClientes
    }
    agregarPlatillos( listaDePlatillos ){
        this.listaPlatillos = listaDePlatillos
    }
    agregarOrdenes(ordenes){
        this.ordenes = ordenes
    }
    completarOrden(id){
        this.ordenes[id].completado = true
        console.log(`La orden ${id} fue completada`)
        console.log(`Cliente id ${this.listaClientes[this.ordenes.clienteId]}`)
        console.log(`Platillo id ${this.listaPlatillos[this.ordenes.platilloId]}`)
    }
    listarPlatillos(){
        this.listaPlatillos.forEach(plato => console.log(plato))
    }

    listarClientes(){
        this.listaClientes.forEach( cliente => console.log(cliente) )
    }
    
}

let negocio = new Restaurant()
negocio.agregarClientes( ['pepe','luis','santiago'] )
negocio.agregarPlatillos( ['sopa', 'pasta', 'tacos', 'pizza'] )
negocio.agregarOrdenes( [
            {
                clienteId :0,
                platilloId :1,  
                completado : false
            },
            {
                clienteId :1,
                platilloId :2,  
                completado : false
            },
            {
                clienteId :2,
                platilloId :3,  
                completado : false
            }
        ])
    
 