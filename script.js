window.onscroll = fuction(){miFuncion()};

vas Biografia = document.getElementById("Biografia");
var tennis = document.getElementById("tennis");
var judo = document.getElementById("judo");
var estudios = document.getElementById("estudios");

var distancia_Biografia, distancia_tennis, distancia_judo, distancia_estudios;

funcion miFuncion(){
    distancia_Biografia = window.innerHeight - Biografia.getBoundingClientRect().top;
    if(distancia_Biografia) >= 200){
        Biografia.classList.add("efecto-Biografia");
    }

    distancia = window.innerHeight - tennis.getBoundingClientRect().top;
    if(distancia_futbol >= 200){
        tennis.classList.add("efecto-tennis");
    }
    distancia_judo = window.innerHeight - Premios.getBoundingClientRect().top;
    if(distancia_judo >= 200){
        judo.classList.add("judo-efecto");
    }
    distancia_estudios = window.innerHeight - estudios.getBoundingClientRect().top;
    if(distancia_estudios >= 200){
        estudios.classList.add("estudios-efecto");
    }