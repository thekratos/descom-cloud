/*
    Componente encargado de crear y dar estilos
    al Header.

    Se crea  un div el cual sera el encargado de
    contener el Header.

    Dentro de dicho div, se inserta la interfaz grafica
    del header.html, para poder de esta manera mostrar
    el Header dentro de index.html.

    El cambiar de color la interfaz grafica, se define
    por medio insertar o eliminar una calse en el body,
    denominada dark, en la cual si existe, se insertan
    estilos css para el modo dark
*/

// importamos el html y sus estilos
import viewHeader from '../view/interfaz/header.html';
import '../view/estilos/header.css'

// creamos el div; document seria el html principal(index.html)
const divElement = document.createElement('div');
divElement.innerHTML = viewHeader;

/*
    Traemos el objeto btnSwitch de header.html(divElement),
    para poder insertarle los eventos del cambio
    de color a dicho boton.
*/
const btnSwitch = divElement.querySelector('#optionsheader-switch');

export default () => {
    eventosBtnSwitch(); // llamamos los eventos de btnSwitch
    return divElement; //Retornamos el div con el header.html insertado
};

function eventosBtnSwitch() {

        btnSwitch.addEventListener('click', () => {
            /*
                toggle, quiere decir que cambia cada vez
                que se preciona, por lo tanto cada click
                inserta o borra la clase dark en body, y
                de igual forma en el estado del btnSwitch
            */
            document.body.classList.toggle('dark');
            btnSwitch.classList.toggle('active');

            // Guardar estdo de btnSwitch en localstorage
            if(document.body.classList.contains('dark')) {
                localStorage.setItem('dark-mode', 'true');
            }else {
                localStorage.setItem('dark-mode', 'false');
            }
        });
}

window.onload=function() { // Funcion que se ejecuta tras haberse cargado la pagina

    // If para saber que valor esta almacenado en localStorage
    if(localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark');
        btnSwitch.classList.add('active');
    }else {
        document.body.classList.remove('dark');
        btnSwitch.classList.remove('active');
    }
}

