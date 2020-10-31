/*
    Clase encargada de recibir un hash, el cual define
    que interfaz grafica se va a cargar.

    Tras recibir un hash, por medio de un switch se
    decide que interfaz es necesaria.

    Las interfaces convergen en index.js, alli se forma
    la estructura con cada componente que necesita cada
    interfaz grafica, y dichas interfaces son insertadas
    en index.html desde esta clase.
*/

import {pages} from '../controller/index.js';

//Selecciono el contenedor de el index.html
let content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = ' '; //Vaciamos el contenido de index.html
    /*
        Definimos un caso para cada direccion, se recorre
        un array con los componentes necesarios, para dicha
        interfaz, y en cada iteracion del ciclo, se pinta un
        componente; el ciclo  termina con todos los componentes
        insertados en index.html.
    */
    switch(route) {
        case '#/': {
            pages.home.forEach(componete => {
                content.appendChild(componete());
            });
        }
        case '': {
            pages.home.forEach(componete => {
                content.appendChild(componete());
            });
        }
        case '#/post':
                //return content.appendChild(pages.posts()); pruebas
        case '#/products':
                //return content.appendChild(pages.notFound()); pruebas
            default:
                //return content.appendChild(pages.notFound()); pruebas
    }
}

export { router };
