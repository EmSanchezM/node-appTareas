/*Libreria que me permite trabajar con archivos*/ 
const fs = require('fs');

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {
    try{
        listadoTareas = require('../db/data.json');
    }catch(err){
        listadoTareas = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);

    guardarDB(listadoTareas);

    return tarea;
}

const getTareas = () => {
    cargarDB();
    return listadoTareas;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoTareas.filter(tarea => { 
        return tarea.descripcion !== descripcion
    });

    if(listadoTareas.length === nuevoListado.length){
        return false;
    }else{
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = { crear, getTareas, actualizar, borrar }