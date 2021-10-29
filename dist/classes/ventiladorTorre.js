"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventiladorTecho = void 0;
const ventilador_1 = require("./ventilador");
class ventiladorTecho extends ventilador_1.ventilador {
    constructor(id, tipo, marca, potencia, peso, color, silenciador, aspas) {
        super(id, tipo, marca, potencia, peso, color, silenciador);
        this.aspas = aspas;
    }
    get aspasget() {
        return this.aspas;
    }
    // sobre escribimos el método
    precio() {
        let precio;
        precio = super.precio();
        let aspasList = new Map([
            ["madera", 15],
            ["acero", 25],
            ["plastico", 5]
        ]);
        let foo = {};
        foo['madera'] = 15;
        foo['acero'] = 25;
        foo['plastico'] = 5;
        if (this.aspas == "madera" || this.aspas == "acero" || this.aspas == "plastico") {
            precio += foo[this.aspas];
        }
        return precio;
    }
    setAspas(aspas) {
        this.aspas = aspas;
    }
    todo() {
        let resultado;
        resultado = `${super.todo()}, aspas: ${this.aspas}, precio: ${this.precio()}`;
        return resultado;
    }
}
exports.ventiladorTecho = ventiladorTecho;
