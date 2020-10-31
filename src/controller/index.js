/*
    Clase encargada de crear un array con todos
    los componentes que necesita una interfaz
    para estar completa.

    Importamos todos los componentes necesarios.
*/
import Header from './header.controller';

/*
    Se genera un objeto por cada interfaz,
    y cada objeto posee un array con todos
    los componentes necesarios, para dicha
    interfas grafica.
*/
const pages = {
    home: [
        Header,
    ],
    // posts: Posts,
    // notFound: NotFound
}

export {pages};
