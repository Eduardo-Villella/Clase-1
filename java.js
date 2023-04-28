                            //EJERCIO 1
function mostrar1() {document.getElementById("ejercicio1").style.display = "block";
}//botón mostrar
function ocultar1() {document.getElementById("ejercicio1").style.display = "none";
}//botón ocultar

function piramide() {
    let numeroIngresado = document.getElementById("valorIngresado").value;
    try {numeroIngresado = parseInt(numeroIngresado);
        if (numeroIngresado < 0) {throw document.getElementById("error").innerHTML = "Debe ingresar un número entero positivo, sin coma ni punto. Inténtelo de nuevo.";
        }
        else {document.getElementById("error").innerHTML = "";
        }
    }
    catch (err) {alert("Error de ingreso")
    }
    finally{numeroIngresado = parseInt(numeroIngresado);
    }
    let numeroPiramide = "";
    for (let desde = 1; desde <= numeroIngresado; desde++) {
      for (let sale = 1; sale <= desde; sale++) {numeroPiramide += sale;
      }
      numeroPiramide += "<br />";
    }
    document.getElementById("resultado").innerHTML = numeroPiramide;
}
    /*-------------------------------------------------------------------*/

    /*-------------------------------------------------------------------*/
                        // EJERCICIO 2
function mostrar2() {document.getElementById("ejercicio2").style.display = "block";
}//botón mostrar
function ocultar2() {document.getElementById("ejercicio2").style.display = "none";
}//botón ocultar

let array1Guardar = [];
let array2Guardar = [];

function mosAr1() {
    let lisar1 = document.getElementsByClassName("array1");
    let mosNewAr1 = "";
        for (let i = 0; i < lisar1.length; i++) {
        array1Guardar[i] = lisar1[i].value;
        mosNewAr1 += lisar1[i].value + "," + " ";
        }
    document.getElementById("mosNewAr1").innerHTML = mosNewAr1;
}

function mosAr2() {
    let lisar2 = document.getElementsByClassName("array2");
    let mosNewAr2 = "";
        for (let i = 0; i < lisar2.length; i++) {
        array2Guardar[i] = lisar2[i].value;
        mosNewAr2 += lisar2[i].value + "," + " ";
        }
    document.getElementById("mosNewAr2").innerHTML = mosNewAr2;
}

function lisIguales() {
    let arrayIguales = [];
    if (array1Guardar.length > array2Guardar.length) {
        for(let i=0; i < array2Guardar.length; i++) {
           if (array1Guardar.includes(array2Guardar[i])) {
            arrayIguales.push(array2Guardar[i]);
           }
        }
    }else{ 
        for(let i=0; i<array1Guardar.length; i++) {
            if (array2Guardar.includes(array1Guardar[i])) {
             arrayIguales.push(array1Guardar[i]);
            }
        }
    }
    let coinciden = "";
        for (let i = 0; i < arrayIguales.length; i++) {
        coinciden +=  arrayIguales[i] + "," + " ";
        }
    document.getElementById("coinciden").innerHTML = coinciden;
}
    /*-------------------------------------------------------------------*/

    /*-------------------------------------------------------------------*/
                                //EJERCIO 3
function mostrar3() {document.getElementById("ejercicio3").style.display = "block";
}//botón mostrar
function ocultar3() {document.getElementById("ejercicio3").style.display = "none";
}//botón ocultar

                        /*3.1*/
/*3.1) Dado el siguiente objeto*/
/*Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.*/
/*3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal*/
/*3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe "ya existe el producto xxx"*/
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
//3.1)

class Carrito {
    constructor() { //Aquí me olvidé que podia pasar parámetros en el constructor, pero como anda bien mejor no tocarlo y lo hice igual al video 3 class Auto
      this.montoTotal = 10;
      this.productos = ["Leche"];
    }
//3.2)  
    agregarProductos(nombre, precio, unidades) {
      if (!this.productos.includes(nombre)) {   //3.3)
        this.productos.push(nombre,precio,unidades);// la linea anterior y está, copié la sintaxis de un ejemplo de stack overflow, yo lo habia hecho uno por uno y el this negado, no me acordé que tu lo habias enseñado hasta que lo ví allí
        this.montoTotal += precio * unidades;
      }
      else {
        console.log("El producto " + (carrito.productos) + " ya existe en el carrito.");//3.3)
      }//La simpleza de está linea contrasta con la aberración de tiempo que me llevó entender como hacerla jaja
    }
}
carrito = new Carrito();// está linea NO debería estar, no tiene sentido para mi, hasta lo consulte en WriteSonic pero me daban una solución que aún no entiendo, así es que no la saqué porque sino no anda :(
const leche = { nombre: "Leche", precio: 10 , unidades: 1 };
const pan = { nombre: "Pan", precio: 5 , unidades: 2 };

carrito.agregarProductos("Leche", 10 , 2 );
carrito.agregarProductos("Pan", 5 , 3);

console.log(carrito.montoTotal)
console.log(carrito.productos)
/*figura un error en la consola que hace referencia a la linea 101:
java.js:101 Uncaught SyntaxError: Unexpected token '{' (at java.js:101:43)
pero es mentira, la consola memiente jaja*/
