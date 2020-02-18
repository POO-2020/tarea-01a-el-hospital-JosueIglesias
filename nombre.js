class Nombre {
    constructor(nombre, apellidoPat, apellidoMat) {
        this.nombre = nombre
        this.apellidoMat = apellidoMat
        this.apellidoPat = apellidoPat
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellidoPat} ${this.apellidoMat}`
    }

    getApellidoNombre(){
        return `${this.apellidoPat} ${this.apellidoMat} ${this.nombre}`
    }

    getIniciales(){
        return ``
    }
}

