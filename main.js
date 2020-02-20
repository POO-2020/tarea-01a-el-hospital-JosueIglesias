import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"

class Main {
    constructor() {
        
    }

    probarNombre() {
        let persona1 = new Nombre("Josue Benjamin", "borondongo", "valenciana")
        console.log(persona1.getNombreCompleto())
        console.log(persona1.getApellidoNombre())
        console.log(persona1.getIniciales())

    }
    probarTiempo() {
        let horaPrueba = new Tiempo(3, 50, "PM")
        console.log(horaPrueba.getFormato12())
        console.log(horaPrueba.getFormato24())
    }
    
    probarFecha(){
        let fecha1 = new Fecha(2007, 4, 4)
        console.log(fecha1.getFecha())
        console.log(fecha1.getAños())
    }
}
let app = new Main()
app.probarNombre()
app.probarTiempo()
app.probarFecha()