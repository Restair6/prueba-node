const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

escribirJason: function(arrayDeTareas){

    let arrayStringJSON = JSON.stringify(arrayDeTareas)
    fs.writeFileSync(this.archivo,arrayStringJSON ,'utf-8')
},
guardarTarea : function (tarea){

    let tareas = this.leerArchivo();
    tareas.Push(tarea)
this.escribirJason(tareas)
}

}
module.exports = archivoTareas;