/** 
 * obtenemos el tbody de la tabla
*/
export const inicializarTabla = (containerID,data) => {
    const tbody = document.querySelector('#videogames-table tbody'); //obtenemos el tbody de la tabla (MANIPULACION DEL DOM)
    //armamos el tbody
    tbody.innerHTML = ''; 
    data.forEach(juego => {
        const row = document.createElement('tr');//creamos una fila para cada juego (MANIPULACION DEL DOM)

        //aca abajo se arma la fila 
        // y se le asigna el id del juego
        row.innerHTML =  `
            <td>${juego.id}</td>
            <td>${juego.nombre}</td>
            <td>${juego.fechaLanzamiento}</td>
            <td>${juego.genero}</td>
        `; // se arma la fila con los datos del juego


        tbody.appendChild(row);//agregamos la fila al tbody
    });
}