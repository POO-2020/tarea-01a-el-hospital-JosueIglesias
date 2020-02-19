import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"

class Main {
    constructor() {
        
    }

    probarNombre() {
        let persona1 = new Nombre("Josue Benjamin", "Iglesias", "valenciana")
        console.log(persona1.getNombreCompleto())
        console.log(persona1.getApellidoNombre())
        console.log(persona1.getIniciales())

    }
    probarTiempo() {
        let horaPrueba = new Tiempo(3, 50, "PM")
        console.log(horaPrueba.getFormato12())
        console.log(horaPrueba.getFormato24())
    }   
}
let app = new Main()
app.probarNombre()
app.probarTiempo()