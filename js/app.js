const carrusel =document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step= 1;
const start =()=>{
  intervalo = setInterval(function (){
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if(carrusel.scrollLeft===maxScrollLeft){
      step= step *-1;
    }else if(carrusel.scrollLeft ===0){
      step=step*-1;
    }
  }, 10);
};

const stop =()=>{
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover",()=>{
  stop();
});
carrusel.addEventListener("mouseout",()=>{
  start();
});

start();


let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalos = 7000;

window.addEventListener("resize", function(){
  width=sliderIndividual[0].clientWidth;
});

setInterval(function(){
  slides();
},intervalos);

function slides(){
  slider.style.transform = "translate("+(-width*contador)+"px)";
  slider.style.transition="transform.7s";
  contador++;

  if(contador == sliderIndividual.length){
    setTimeout(function(){    
      slider.style.transform = "translate(0px)";
      slider.style.transition="transform.0s";
      contador=1
    },1500)
  }
}