import Nombre from "./nombre.js"

class Main {
    constructor() {
        
    }

    probarNombre() {
        let persona1 = new Nombre("Josue Benjamin", "Iglesias", "valenciana")
        console.log(persona1.getNombreCompleto())
        console.log(persona1.getApellidoNombre())
        console.log(persona1.getIniciales())

    }   
}
let app = new Main()
app.probarNombre()