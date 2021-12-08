console.log("Aplicacion de tareas");
console.log("--------------------\n");

/*
let tarea = {

titulo: " practicar el switch",
estado:  "pendiente"


}

let tareas = [ 
{
titulo: "practicar el switch",
estado:  "pendiente"
},
{  
titulo : "practicar el for",
estado : "terminado"
},
{
    titulo : "ver jason",
    estado : "pendiente"
}
]


console.log(tareas)
console .log(tareas[0])
console.log(tareas[0].titulo)
console.log(tareas.length)


for(let i=0 ; i<tareas.length ; i++ ){
    if(tareas[i].estado === "terminado") {
console.log(tareas[i].titulo + " - " + " esta terminado")
    }
}

let tareaJson = JSON.stringify(tarea)
console.log(tarea)
console.log(tareaJson)


let tareaJson = '{"titulo": "practicar el switch", "estado": "pendiente"}'

let tarea = JSON.parse(tareaJson)
*/

const sistemaDeArchivos = require('fs')

let tareaJson = sistemaDeArchivos.readFileSync("./tareas.json", 'utf-8');

let tareas = JSON.parse(tareaJson)



let tarea = {

    titulo: " practicar el switch",
    estado:  "pendiente"
    
    
    };

let accion = process.argv[2]

    switch (accion) {
        case "listar":
            for(let i=0 ; i<tareas.length ; i++ ){
            console.log(tareas[i].titulo);
            }
            break;

            case "terminados":
                for(let i=0 ; i<tareas.length ; i++ ){
                    if(tareas[i].estado === "terminado") 
                console.log(tareas[i].titulo + " - " + " esta terminado")
                }
            console.log("estoy en terminados");
            
            break;
                    
        default:
            console.log("no hay opciones disponibles");
            break;
    }
