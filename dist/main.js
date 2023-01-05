"use strict";
class Tigre {
    constructor() {
        this.nombre = "Tigre de Bengala";
        this.especie = "Tigre de Bengala";
        this.color = "anaranjado";
        this.numeroGarras = 20;
    }
    comer() {
        return console.log("El tigre está comiendo");
    }
    dormir() {
        return console.log("El tigre está durmiendo");
    }
    correr() {
        return console.log("El tigre está corriendo");
    }
    cazar() {
        return console.log("El tigre esta cazando");
    }
    trepar() {
        return console.log("El tigre esta trepando");
    }
}
class Gato {
    constructor() {
        this.nombre = "Michi";
        this.especie = "Siamés";
        this.numeroOrejas = 2;
    }
    comer() {
        return console.log("El gato está comiendo");
    }
    dormir() {
        return console.log("El gato está durmiendo");
    }
    correr() {
        return console.log("El gato está corriendo");
    }
    cazar() {
        return console.log("El gato está cazando");
    }
    jugar() {
        return console.log("El gato está jugando");
    }
    maullar() {
        return console.log("El gato está maullando");
    }
}
let tigre = new Tigre();
document.write("<b>Nombre: </b>" + tigre.nombre + " " + "Jair Delgado" + "<br>");
document.write("<b>Especie: </b>" + tigre.especie + "<br>");
console.log(tigre.cazar());
console.log(tigre.trepar());
let gato = new Gato();
document.write("<b>Nombre: </b>" + gato.nombre + " " + "Jair Delgado" + "<br>");
document.write("<b>Especie: </b>" + gato.especie + "<br>");
console.log(gato.maullar());
console.log(gato.jugar());
