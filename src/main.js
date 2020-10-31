/*
    Clase encargada de llamar a la clase enrutadora
    de las interfaces graficas,

    Se realiza enviando la ruta actual(Por medio del hash),
    a index.routes el cual se encarga de gestionar que interfaz a abrir
*/

import { router } from './router/index.routes.js';
import './main.css';

// Enviando la ruta dada al recargar la pagina
router(window.location.hash);

window.addEventListener('hashchange', () => {
    /*
        Enviando la ruta dada, tras haberse insertado
        un hash en la url.
    */
    router(window.location.hash);
})