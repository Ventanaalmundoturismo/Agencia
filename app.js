const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");
});

const RedesToggle = document.querySelector(".nav-toggle");
const Redes = document.querySelector(".Redes");

navToggle.addEventListener("click", () => {
Redes.classList.toggle("Redes_visible");
});



const acordeon = document.getElementsByClassName("contenedor-box");

for (i = 0; i<acordeon.length; i++ ){
   acordeon[i].addEventListener("click", function(){
    this.classList.toggle("active")
   })
}



/*
let list = document.querySelectorAll(".Redes a");
let bg = document.querySelector("body");
list.forEach(elements => {
   elements.addEventListener("mouseenter", function(event){
      let color = event.target.getAttribute("data-color");
      bg.style.backgroundColor = color;
   })
   elements.addEventListener("mouseleave", function(event){
      bg.style.backgroundColor = "#83c5f7";
   })
   
})*/