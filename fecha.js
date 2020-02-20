export default class Fecha {
    constructor (año, mes, dia) {
        this.fecha = new Date(año, mes -1,  dia)
        this.diaSemana = [
            "Domingo", 
            "Lunes", 
            "Martes", 
            "Miercoles", 
            "Jueves", 
            "Viernes", 
            "Sabado",
        ]

        this.nombreMes = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ]
    }

    getFecha(){
        return `${this.fecha.getDate()}/${this.fecha.getMonth() +1 }/${this.fecha.getFullYear()}`
    }

    getAños(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear()
        return `Han pasado ${añosTranscurridos} años desde ${this.fecha.getFullYear()}`
    }
}