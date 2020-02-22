import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Doctor from "./doctor.js"

class Main {
    constructor() {
    }

    probarNombre() {
        console.log("----------Nombre----------")
        let persona1 = new Nombre("Josue Benjamin", "borondongo", "valenciana")
        console.log(persona1.getNombreCompleto())
        console.log(persona1.getApellidoNombre())
        console.log(persona1.getIniciales())

    }
    probarTiempo() {
        console.log("----------Tiempo----------")
        let horaPrueba = new Tiempo(3, 50, "PM")
        console.log(horaPrueba.getFormato12())
        console.log(horaPrueba.getFormato24())
    }
    
    probarFecha(){
        console.log("----------Fecha----------")
        let fecha1 = new Fecha(2007, 4, 4)
        console.log(fecha1.getFecha())
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getDiaFecha())
    }

    probarDoctor(){
        console.log("----------Doctor----------")
        let doctor1 = new Doctor(141452, "Pediatra", new Nombre("Jose Antonio", "Zarate", "Ornolos" ), 232323)
        console.log(doctor1.getPerfil())
    }
}
let app = new Main()
app.probarNombre()
app.probarTiempo()
app.probarFecha()
app.probarDoctor()