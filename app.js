let toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('active')
};



const navToggle = document.getElementById('toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
navMenu.classList.toggle('nav-menu_visible');
});



const acordeon = document.getElementsByClassName('contenedor-box');

for (i = 0; i<acordeon.length; i++ ){
   acordeon[i].addEventListener('click', function(){
    this.classList.toggle('active')
   })
}



/* TODO ABAJO DE ESTA LINEA ES PARA TIRAR UN MENSAJE AL INICIO */
var saludo = ('HOLA... Recuerda visitar todas nuestras secciones disponibles, para que veas todo lo que tenemos para ofrecerte. ¡ SALUDOS !');
alert(saludo);
/* TODO ARRIBA DE ESTA LINEA ES PARA TIRAR UN MENSAJE AL INICIO */