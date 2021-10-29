"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomGenerater = exports.verCamposObjetos = exports.nuevoObj = exports.actualizarObj = exports.deleteObj = exports.buscarObj = exports.listarObj = void 0;
// Estos son los imports de los objetos
const ventilador_1 = require("../classes/ventilador");
const ventiladorTecho_1 = require("../classes/ventiladorTecho");
const climatizador_1 = require("../classes/climatizador");
// Estos son los imports de los métodos externos que emplearemos para desarrollar las funciones
const leerTeclado_1 = require("./leerTeclado");
const metodos_1 = require("./metodos");
const metodos_2 = require("./metodos");
const metodos_3 = require("./metodos");
/**
 * En este archivo "metodos.ts" tenemos todos los métodos de calculo.
 * Cada función estará contenida en un método que podrá ser llamado por el main directamente
 * o por otro método.
**/
/* MÉTODOS LLAMADOS UNICAMENTE POR EL MAIN */
//---------------------------LISTAR OBJETOS---------------------------------------
// Este primer método llamado por el main nos permite listar los objetos del array Ventiladores.
const listarObj = async (myArray) => {
    // Mediante un bucle for iremos recorriendo el Array.
    // En caso de que el objeto en cuestión no sea undefined mostraremos una descripción general
    // y su respectivo precio.
    for (let a of myArray) {
        if (typeof a !== 'undefined') {
            console.log(`${a.general()}, precio: ${a.precio()}`);
        }
    }
};
exports.listarObj = listarObj;
//---------------------------BUSCAR OBJETO---------------------------------------
// En esta segunda función buscaremos dentro del Array un objeto ventilador
// que se ajuste a los parámetros de búsqueda que introduzcamos.
const buscarObj = async (myArray) => {
    console.log("Podrá buscar por ID, Marca o Tipo de Ventilador");
    // Podremos buscar por campo Id (nos devolverá un unico elemento), 
    // por marca (nos devolverá todos los elementos con la marca que introduzcamos),
    // por tipo de objeto (será ventilador normal, de techo o climatizador y nos devolverá todos los objetos de ese tipo)
    console.log("Id | Marca | Tipo");
    let opcion = await ((0, leerTeclado_1.leerTeclado)(`Elija su criterio de busqueda`));
    // En caso de que elija marca o tipo mediante un console.log le diremos las opciones que existen.
    switch (opcion) {
        case "Marca":
            console.log("Marcas conocidas: orbegozo, belize, taurus, dyson, rowenta, honeywell");
            break;
        case "Tipo":
            console.log("Sobremesa / Techo / Climatizador");
            break;
    }
    // Una vez elegido el criterio de búsqueda deberá insertar la información que buscaremos.
    // En caso de buscar por Id pues la Id del ventilador, en marca la marca que queramos buscar, etc.
    let Filtro = await ((0, leerTeclado_1.leerTeclado)(`Inserte información`));
    // Una vez introducida la información le enviaremos al método verObjId:
    // el array (ventiladores), el filtro de búsqueda (marca/tipo/id) y la información a buscar
    (0, metodos_2.verObjId)(myArray, Filtro, opcion);
};
exports.buscarObj = buscarObj;
//---------------------------ELIMINAR OBJETO---------------------------------------
// En este método eliminaremos el objeto que el usuario indique mediante el Id.
const deleteObj = async (myArray) => {
    // Primero preguntaremos el Id al usuario
    let Identify = parseInt(await (0, leerTeclado_1.leerTeclado)(`Inserte el id del ventilador a eliminar`));
    // Una vez con el Id recorreremos el Array
    for (let a of myArray) {
        if (typeof a === 'undefined') {
            console.log("Elemento nulo");
        }
        else {
            // Comprobaremos si el identificador del objeto sea igual al Id que nos ha dado el usuario
            if (a.identificador == Identify) {
                // En caso de que si lo sea printearemos el Objeto y preguntaremos si está seguro,
                // en caso de que confirme la operación el objeto será finalmente eliminado.
                console.log(" ");
                await (0, metodos_2.verObjId)(myArray, Identify, "Id");
                let solucion = await (0, leerTeclado_1.leerTeclado)("Seguro que quiere eliminarlo? Y/N");
                if (solucion == "Y") {
                    myArray.splice(Identify, 1);
                    console.log("\nEntrada eliminada.");
                }
            }
        }
    }
};
exports.deleteObj = deleteObj;
//---------------------------EDITAR OBJETO---------------------------------------
// En este método actualizarObj simplemente editaremos un objeto
// que dará igual que sea Ventilador Normal, de Techo o climatizador.
const actualizarObj = async (myArray) => {
    // Preguntaremos en primer lugar el Id del ventilador a editar
    let Identify = parseInt(await (0, leerTeclado_1.leerTeclado)(`Inserte el id del ventilador a editar`));
    // Recorreremos el Array buscando tal objeto
    for (let a of myArray) {
        if (typeof a === 'undefined') {
            console.log("Elemento nulo");
        }
        else {
            if (a.identificador == Identify) {
                // Una vez encontremos el Objeto con ese Id mandaremos un mensaje de confirmación
                console.log(" ");
                (0, metodos_2.verObjId)(myArray, Identify, "Id");
                console.log(" ");
                let solucion = await (0, leerTeclado_1.leerTeclado)("Seguro que quiere editarlo? Y/N");
                if (solucion == "Y") {
                    // En caso de que confirme la operación iremos preguntando uno a uno los campos
                    // comunes de ventilador, ventilador techo y climatizador y guardandolos en constantes.
                    console.log("Se le presentarán los campos uno a uno \n");
                    console.log("Potencia original: " + a.potenciaObjeto);
                    const potencia = parseInt(await (0, leerTeclado_1.leerTeclado)('Inserte potencia'));
                    console.log("\nPeso original: " + a.pesoObjeto);
                    const peso = parseInt(await (0, leerTeclado_1.leerTeclado)('peso'));
                    console.log("\nColor original: " + a.colorObjeto);
                    const color = await (0, leerTeclado_1.leerTeclado)('color');
                    console.log("\nMarca original: " + a.marcaObjeto);
                    console.log("\Marcas conocidas: orbegozo, belize, taurus, dyson, rowenta, honeywell");
                    const marca = await (0, leerTeclado_1.leerTeclado)('marca');
                    console.log("\nSilenciador original: " + a.silenciadorObjeto);
                    const silenciador = Boolean(await (0, leerTeclado_1.leerTeclado)('silenciador'));
                    // Haremos una comprobación para que en el caso de que sea Ventilador de techo
                    // pregunte también por la variable que tiene este objeto de forma unica.
                    if (a instanceof ventiladorTecho_1.ventiladorTecho) {
                        console.log("\nAspas originales: " + a.aspasGet);
                        console.log("Pueden ser: acero/madera/plastico");
                        const aspas = await (0, leerTeclado_1.leerTeclado)('aspas');
                        // Mediante el método set aspas sobreescribiremos el campo.
                        a.setAspas(aspas);
                    }
                    // Haremos una comprobación para que en el caso de que sea climatizador
                    // pregunte también por la variable que tiene este objeto de forma unica.
                    if (a instanceof climatizador_1.climatizador) {
                        console.log("\nCapacidad de agua original: " + a.capacidadAguaGet);
                        const capacidadAgua = parseInt(await (0, leerTeclado_1.leerTeclado)('Capacidad de Agua'));
                        // Mediante el método set aspas sobreescribiremos el campo.
                        a.setcapacidadAgua(capacidadAgua);
                    }
                    // Finalmente realizaremos un map al Array para sobreescribir los campos.
                    myArray.map((key) => {
                        if (key.identificador == Identify) {
                            key.setPotencia(potencia);
                            key.setPeso(peso);
                            key.setColor(color);
                            key.setMarca(marca);
                            key.setSilenciador(silenciador);
                        }
                    });
                    console.log(" ");
                    // Finalmente mostraremos el objeto ya editado al usuario
                    await (0, metodos_2.verObjId)(myArray, Identify, "Id");
                }
            }
        }
    }
};
exports.actualizarObj = actualizarObj;
//---------------------------NUEVO OBJETO---------------------------------------
// En esta función crearemos un nuevo objeto.
const nuevoObj = async (myArray) => {
    // Primero generaremos un nuevo Id mediante el método getNewId
    let value = await (0, metodos_1.getNewId)(myArray);
    let identify;
    if (typeof value !== "undefined") {
        identify = value;
    }
    else {
        identify = myArray.length;
    }
    // Le pediremos al usuario el tipo de Ventilador que quiere crear (Normal/Techo/Climatizador)
    let choose = parseInt(await (0, leerTeclado_1.leerTeclado)('Que quiere crear: \n 1) Ventilador Normal \n 2) Ventilador de Techo \n 3) Climatizador \n'));
    // Aquí asignaremos a la variable tipo un valor u otro según la elección
    let tipo = "Sobremesa";
    if (choose == 2) {
        tipo = "Techo";
    }
    else if (choose == 3) {
        tipo = "Climatizador";
    }
    // Ahora comenzaremos ya a preguntar los distintos campos al usuario y guardarlos en variables.
    let ventiladorNormal;
    let Techo;
    let Climatizador;
    const id = identify;
    const potencia = parseInt(await (0, leerTeclado_1.leerTeclado)('potencia'));
    const peso = parseInt(await (0, leerTeclado_1.leerTeclado)('peso'));
    const color = await (0, leerTeclado_1.leerTeclado)('color');
    console.log("\Marcas conocidas: orbegozo, belize, taurus, dyson, rowenta, honeywell");
    const marca = await (0, leerTeclado_1.leerTeclado)('marca');
    const silenciador = Boolean(await (0, leerTeclado_1.leerTeclado)('silenciador'));
    // Aquí en caso de que sea sobremesa realizaremos el push y crearemos el objeto
    if (tipo == "Sobremesa") {
        myArray.push(ventiladorNormal = new ventilador_1.ventilador(id, tipo, marca, potencia, peso, color, silenciador));
    }
    // En caso de que sea de tipo techo crearemos también la variable aspas y pushearemos y crearemos.
    else if (tipo == "Techo") {
        console.log("Pueden ser: acero/madera/plastico");
        const aspas = await (0, leerTeclado_1.leerTeclado)('aspas');
        myArray.push(Techo = new ventiladorTecho_1.ventiladorTecho(id, tipo, marca, potencia, peso, color, silenciador, aspas));
    }
    // En caso de que sea de tipo climatizador crearemos también la variable capacidad agua y pushearemos y crearemos.
    else if (tipo == "Climatizador") {
        const capacidadAgua = parseInt(await (0, leerTeclado_1.leerTeclado)('Capacidad de agua'));
        myArray.push(Climatizador = new climatizador_1.climatizador(id, tipo, marca, potencia, peso, color, silenciador, capacidadAgua));
    }
    // Finalmente ordenaremos el Array mediante el método ordenarArray 
    // y mostraremos el objeto creado mediante verObjId
    myArray = await (0, metodos_3.ordenarArray)(myArray);
    await (0, metodos_2.verObjId)(myArray, identify, "Id");
};
exports.nuevoObj = nuevoObj;
//---------------------------VER CAMPOS DE OBJETO---------------------------------------
// Este método simplemente nos permite ver los distintos campos de un objeto.
const verCamposObjetos = async (myArray) => {
    console.log("Objetos disponibles: Techo/Sobremesa/Climatizador");
    let tipo = await (0, leerTeclado_1.leerTeclado)("De que tipo de objeto quiere ver los campos? ");
    // Buscaremos dentro del array un objeto que sea de este tipo de objeto y en cuyo caso printearemos
    // sus respectivos campos. Tras esto asignaremos a tipo "nulo" para evitar que repita los campos por cada
    // objeto de ese tipo.
    myArray.forEach(element => {
        if (element.tipoObjeto == tipo) {
            for (var key1 in element) {
                console.log(key1);
            }
            tipo = "nulo";
        }
    });
};
exports.verCamposObjetos = verCamposObjetos;
//---------------------------GENERADORA NUMEROS RANDOM---------------------------------------
// Finalmente este método nos permite generar de forma aleatoria tantos objetos como queramos.
const randomGenerater = async (myArray) => {
    let ventiladorNormal;
    let Techo;
    let Climatizador;
    // Estos arrays los crearemos para que los campos marca, color y aspas tengan
    // unos de los siguientes valores para que los objetos creados no pierdan coherencia. 
    let marcas = ["orbegozo", "belize", "taurus", "dyson", "rowenta", "honeywell"];
    let colores = ["blanco", "azul", "gris", "verde"];
    let aspaslist = ["madera", "plastico", "acero"];
    let value = 0;
    // Finalmente preguntaremos al usuario cuantos objetos quiere crear y de que tipo quieren que sean.
    let qty = parseInt(await (0, leerTeclado_1.leerTeclado)("¿Cuantos objetos quiere generar? "));
    let option = parseInt(await (0, leerTeclado_1.leerTeclado)("¿Qué tipo de objetos quiere generar?\n1) Ventiladores Sobremesa \n2) Ventiladores Techo \n3) Climatizadores \n4) Ventiladores de cualquier tipo\n"));
    // Realizaremos un bucle for para generar cada uno de los objetos que el usuario haya pedido.
    for (let i = 0; i < qty; i++) {
        // Primero generaremos un Id para el objeto
        const id = await (0, metodos_1.getNewId)(myArray);
        // Y en caso de que la opción elegida por el usuario no sea Sobremesa/Techo/climatizador generaremos una variable value
        // de forma aleatoria, que en función de que su valor sea 1 o 3 será el objeto de tipo Techo, Sobremesa o climatizador.
        if (option != 1 && option != 2 && option != 3) {
            value = Math.floor(Math.random() * 3) + 1;
        }
        // Aquí asignaremos a variables los respectivos campos mediante numeros aleatorios.
        // A potencia se le asignará un numero entre el 25 y el 150.
        const potencia = Math.floor(Math.random() * (150 - 25)) + 25;
        // A peso se le asignará un número aleatorio entre 15 y 50
        const peso = Math.floor(Math.random() * (50 - 15)) + 15;
        // A color se le asignará un color aleatorio dentro del Array antes creado.
        const color = colores[Math.floor(Math.random() * (colores.length))];
        // A marca se le asignará una marca aleatorio dentro del Array antes creado.
        const marca = marcas[Math.floor(Math.random() * (marcas.length))];
        // A silenciador se le creará un numero aleatorio, que en caso de ser mayor que 0.5 será false
        // la variable, y en caso de ser menor será true la variable.
        let silenciador = true;
        if (Math.random() > 0.5) {
            silenciador = false;
        }
        else {
            silenciador = true;
        }
        // Aquí trabajaremos finalmente con los ventiladores sobremesa que o bien el usuario
        // habrá dicho que sean todos sobremesa (option=1) o de forma aleatoria se habrá decidido
        // que sea del tipo sobremesa (value==1)
        if (option == 1 || value == 1) {
            // Le asignaremos el tipo Sobremesa y realizaremos el push
            const tipo = "Sobremesa";
            myArray.push(ventiladorNormal = new ventilador_1.ventilador(id, tipo, marca, potencia, peso, color, silenciador));
            // Ahora haremos lo mismo que antes pero para el caso de que el objeto sea de techo
        }
        else if (option == 2 || value == 2) {
            const tipo = "Techo";
            // A aspas se le asignará un material aleatorio dentro del Array antes creado.
            // Y se realizará el push
            const aspas = aspaslist[Math.floor(Math.random() * (aspaslist.length))];
            myArray.push(Techo = new ventiladorTecho_1.ventiladorTecho(id, tipo, marca, potencia, peso, color, silenciador, aspas));
            // Por ultimo crearemos este caso por si el objeto resultante fuera de tipo climatizador.
            // Le asignaremos el tipo correspondiente
        }
        else if (option == 3 || value == 3) {
            const tipo = "Climatizador";
            // Y aquí generaremos una variable numérica entre el 15 y el 50 para la cantidad de agua del climatizador.
            const capacidadAgua = Math.floor(Math.random() * (50 - 15) + 15);
            myArray.push(Climatizador = new climatizador_1.climatizador(id, tipo, marca, potencia, peso, color, silenciador, capacidadAgua));
        }
    }
};
exports.randomGenerater = randomGenerater;
