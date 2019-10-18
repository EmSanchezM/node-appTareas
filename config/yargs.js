const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}; 

const completado = {
    default: true,
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


/*Libreria para enviar argumentos desde la linea de comandos*/
const argv = require('yargs')
             .command('crear', 'Crear una tarea por hacer', {
                 descripcion
             })
             .command('actualizar', 'Actualizar una tarea por hacer', {
                descripcion,
                completado

             })
             .command('borrar', 'Borrado de una tarea', {
                descripcion
             })
             .help()
             .argv;

module.exports = {argv}

