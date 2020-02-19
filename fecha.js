export default class Fecha {
    constructor (fecha) {
        this.fecha = new Date(2007, 3, 4)
    }

    getFecha(){
        return `${this.fecha.getDate}/${this.fecha.getMonth}/${this.fecha.getFullYear}`
    }
}