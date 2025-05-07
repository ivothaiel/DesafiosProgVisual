//aca importamos el arreglo
export const videojuegos = [
    {
        id: 1,
        nombre: "The Legend of Zelda: Breath of the Wild",
        genero: "Acción/Aventura",
        fechaLanzamiento: "03/03/2017",
    },{
        id: 1,
        nombre: "Super Mario Odyssey",
        genero: "Plataformas",
        fechaLanzamiento: "27/10/2017",
    },{
        id: 3,
        nombre: "The Witcher 3: Wild Hunt",
        genero: "RPG",
        fechaLanzamiento: "19/05/2015",
    },{
        id: 3,
        nombre: "Dark Souls III",
        genero: "Acción/RPG",
        fechaLanzamiento: "24/03/2016",
    },{
        id: 2,
        nombre: "Overwatch",
        genero: "Shooter en equipo",
        fechaLanzamiento: "24/05/2016",
    },{
        id: 6,
        nombre: "Hollow Knight",
        genero: "Metroidvania",
        fechaLanzamiento: "24/02/2017",
    },{
        id: 7,
        nombre: "Celeste",
        genero: "Plataformas",
        fechaLanzamiento: "25/01/2018",
    },{
        id: 8,
        nombre: "Persona 5 Royal",
        genero: "RPG/JRPG",
        fechaLanzamiento: "31/10/2019",
    },{
        id: 7,
        nombre: "God of War (2018)",
        genero: "Acción/Aventura",
        fechaLanzamiento: "20/04/2018",
    },{
        id: 7,
        nombre: "Red Dead Redemption 2",
        genero: "Acción/Aventura",
        fechaLanzamiento: "26/10/2018",
    }
];

//estas son funciones para poder buscar por id, nombre, fecha y genero
export const buscarPorID = (arr,id) => {
     return arr.filter(juego => juego.id === id);
}

export const buscarPorNombre = (arr,nombre) => {
    return arr.filter(juego => juego.nombre.toLowerCase().includes(nombre.toLowerCase())); //se hace tolowerCase para que no importe si el usuario pone mayusculas o minusculas
}

export const buscarPorFecha = (arr,fecha) => {
    return arr.filter(juego => juego.fechaLanzamiento === fecha); //se busca por fecha exacta
}
export const buscarPorGenero = (arr,genero) => {
   return  arr.filter(juego => juego.genero.toLowerCase().includes(genero.toLowerCase()));
}
