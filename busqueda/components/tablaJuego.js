/** 
 * obtenemos el tbody de la tabla
*/
export const inicializarTabla = (containerID,data) => {
    const tbody = document.querySelector('#videogames-table tbody');
    //armamos el tbody
    tbody.innerHTML = '';
    data.forEach(juego => {
        const row = document.createElement('tr');
        //aca abajo se arma la fila 
        // y se le asigna el id del juego
        row.innerHTML =  `
            <td>${juego.id}</td>
            <td>${juego.nombre}</td>
            <td>${juego.fechaLanzamiento}</td>
            <td>${juego.genero}</td>
        `;
        tbody.appendChild(row);
    });
}