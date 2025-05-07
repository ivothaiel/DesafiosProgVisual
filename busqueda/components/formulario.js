import { buscarPorFecha, buscarPorGenero, buscarPorID, buscarPorNombre, videojuegos } from "../services/videojuegoService.js";
import { inicializarTabla } from "./tablaJuego.js";

export const inicializarBuscador = (data) => {
    const container = document.getElementById('search-form'); // ACA SELECCIONA EL CONTENEDOR DEL FORMULARIO
    container.innerHTML = `
    <div class="search-controls">
    <label><input type="radio" name="filtro" value="id" checked>ID</label>
    <label><input type="radio" name="filtro" value="nombre">Nombre</label>
    <label><input type="radio" name="filtro" value="fecha">Fecha</label>
    <label><input type="radio" name="filtro" value="genero">Genero</label>
    <input type="text" id="inputValor" placeholder="Buscar...">
    <button id="btnBuscar">Buscar</button>
    <label><input type="checkbox" id="checkLimpiar">Limpiar</label>
    </div>`;
    const radios = container.querySelectorAll('input[name="filtro"]');
    const inputValor = container.querySelector('#inputValor');
    const btnBuscar = container.querySelector('#btnBuscar');
    const btnLimpiar = container.querySelector('#btnLimpiar');
    const checkLimpiar = container.querySelector('#checkLimpiar');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            inputValor.disabled = false;
            switch (radio.value) {
                case 'id':
                    inputValor.type = 'number';
                    break;
                case 'nombre':
                    inputValor.type = 'text';
                    break;
                case 'fecha':
                    inputValor.type = 'date';
                    break;
                case 'genero':
                    inputValor.type = 'text';
                    break;
                default:
            }
            inputValor.value = '';
        });
    });

    /* This code snippet is adding an event listener to the "Buscar" button (`btnBuscar`). When the
    button is clicked, the function inside the event listener is executed. Here's a breakdown of
    what the function is doing:
    1. It retrieves the value of the selected radio button (the filter type) using `querySelector`.
    2. If no radio button is selected, the function returns early and does nothing.
    3. It retrieves the value entered in the input field (`inputValor`).
    4. It initializes a variable `resultados` with the original data (`data`).
    5. It uses a switch statement to determine which filter was selected and calls the appropriate
    function to filter the data based on the selected filter type and the input value.
    6. Finally, it calls the `inicializarTabla` function to update the table with the filtered results.
    
    */
    btnBuscar.addEventListener('click', () => {
        const seleccionado = container.querySelector('input[name="filtro"]:checked').value;
        if (!seleccionado)
            return;
        const valor = inputValor.value;
        let resultados = data;
        switch (seleccionado) {
            case 'id':
                resultados = buscarPorID(data,parseInt(valor));
                break;

            case 'nombre':
                resultados = buscarPorNombre(data,valor);
                break;

            case 'fecha':
                resultados = buscarPorFecha(data,valor);
                break;
        
            default:
                break;
        }
        inicializarTabla('videogames-table',resultados);
    });
    checkLimpiar.addEventListener('change', () => {
        if (checkLimpiar.checked) {
            inicializarTabla('videogames-table',data);
            checkLimpiar.checked = false;
            inputValor.value = '';
            radios.forEach(r=>r.checked = false);
            radios[0].checked = true;
            inputValor.disabled = true;
        
        }
    });
};

 