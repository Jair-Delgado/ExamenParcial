interface Animal
{
    nombre:string;
    especie:string;

    comer():void;
    correr():void;
    dormir():void;
}

interface Salvaje extends Animal
{   
    numeroGarras:number;
    cazar():void;
    trepar():void;
}

interface Domestico extends Animal
{
    numeroOrejas:number;
    jugar():void;
    maullar():void;
}

class Tigre implements Salvaje 
{
     nombre:string= "Tigre de Bengala";
     especie:string= "Tigre de Bengala";
     color:string = "anaranjado";
     numeroGarras:number = 20;

    comer(){
        return console.log("El tigre está comiendo");
    }
    dormir(){
        return console.log("El tigre está durmiendo");
    }
    correr(){
        return console.log("El tigre está corriendo");
    }
    cazar() 
    {
        return console.log("El tigre esta cazando");
    }
    trepar(){
     return console.log("El tigre esta trepando");
    }
}
class Gato implements Domestico{
    nombre:string= "Michi";
    especie:string= "Siamés";
    numeroOrejas:number= 2;
    comer(){
        return console.log("El gato está comiendo");
    }
    dormir(){
        return console.log("El gato está durmiendo");
    }
    correr(){
        return console.log("El gato está corriendo");
    }
    cazar() 
    {
        return console.log("El gato está cazando");
    }
    jugar() {
        return console.log("El gato está jugando");
    }
    maullar(){
    return console.log("El gato está maullando");
}

}

let tigre = new Tigre();
document.write("<b>Nombre: </b>" + tigre.nombre +" "+"Jair Delgado" +"<br>");
document.write("<b>Especie: </b>" + tigre.especie + "<br>");
console.log(tigre.cazar());
console.log(tigre.trepar());

let gato = new Gato();
document.write("<b>Nombre: </b>" + gato.nombre +" "+"Jair Delgado" +"<br>");
document.write("<b>Especie: </b>" + gato.especie + "<br>");
console.log(gato.maullar());
console.log(gato.jugar());
