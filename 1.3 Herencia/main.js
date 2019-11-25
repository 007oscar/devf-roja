/*
                        Herencia
------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro {

    constructor(materia, calificaciones){
        this.materia = materia
        this.calificaciones = calificaciones
    }
    calularPromedio(){
        let sumaCalificaciones = 0
        for (let index = 0; index < this.calificaciones.length; index++) {
            sumaCalificaciones += this.calificaciones[index];
        }
        return Math.round(sumaCalificaciones / this.calificaciones.length)
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones)
        this.antiguedad = antiguedad
    }
    
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad){
        super(materia, calificaciones)
        this.edad = edad
    }
}