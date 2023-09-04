// querySelector

/*const heading = document.querySelector('blog h3') // selecciona de 0 1 elemento
heading.textContent = 'Algo nuevo'
console.log(heading)*/


//querySelectorAll

/*const enlaces = document.querySelectorAll('.navegacion a') selecciona mas de 1 elemento
enlaces[2].textContent = 'Cambio' // cambio de texto
enlaces[1].classList.add('pruebas') // agregar clases al html para el css
enlaces[1].classList.remove('pruebas') // remover o borrar*/

//Generar un enlace desde JS(crear etiquetas html desde JS)

/*const enlace = document.createElement('A')
//agregar el href
enlace.href = 'nuevo-enlace.html'
//agregar texto
enlace.textContent = 'Nuevo Enlace'
//agregar clase(class)
enlace.classList.add('nueva_clase')
//Para agregar el documento en el HTML
const nav = document.querySelector('.navegacion')
nav.appendChild(enlace)*/

//Eventos en JS
/*console.log(1)
window.addEventListener('load', function(){// 'load' espera que el JS y los archivos que dependen del HTML esten listos 
    console.log(2)
})
window.onload = function(){// es identico al evento de arriba
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4)
})
window.onscroll = function(){
    console.log('scrolling...')
}*/

//seleccionar elementos y asociar eventos
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault()
    alert('Su formulario ha sido enviado')
})*/

//Evento de submit



//Evento de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreId = document.querySelector('#nombre');
const emailId = document.querySelector('#email');
const mensajeId = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')

nombreId.addEventListener('input', leerTexto);
emailId.addEventListener('input', leerTexto);
mensajeId.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    //console.log('Envaindo formulario')

    //validar formulario
const {nombre, email, mensaje} = datos;

if ( nombre === '' || email === '' ){
    mostrarError('Introduzca su nombre y correo')

    //return // corta la ejecucion del codigo
}
    //enviar formulario
else if ( nombre === 'nandy' || email === 'correo@correo.com' ){
    mostrarCorrecto('Su correo ha sido enviado')
}
else {
    otroDato('nombre o correo incorrecto')
}
})

function leerTexto(e){
    datos[e.target.id] = e.target.value // para que los datos se agreguen en el objeto creado
    //console.log(datos);
}
function mostrarError(alerta){
    const error = document.createElement('P')
    error.textContent = alerta
    error.classList.add('error')

    formulario.appendChild(error)

    setTimeout(() => {//para la duracion del mensaje del error
        error.remove()
    },5000)
}

function mostrarCorrecto(enviado){
    const env = document.createElement('P')
    env.textContent = enviado
    env.classList.add('env')

    formulario.appendChild(env)

    setTimeout(() => {//para la duracion del mensaje del error
        env.remove()
    },5000)
}
function otroDato(descon){
    const incorrecto = document.createElement('P')
    incorrecto.textContent = descon
    incorrecto.classList.add('incorrecto')

    formulario.appendChild(incorrecto)

    setTimeout(() => {//para la duracion del mensaje del error
        incorrecto.remove()
    },5000)
}