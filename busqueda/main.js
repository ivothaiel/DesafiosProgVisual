import { videojuegos } from "./services/videojuegoService.js";
import {inicializarTabla} from "./components/tablaJuego.js";
import {inicializarBuscador} from "./components/formulario.js"

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar la tabla de videojuegos
    // y el buscador
    inicializarTabla('videogames-table', videojuegos);
    inicializarBuscador(videojuegos);
});
