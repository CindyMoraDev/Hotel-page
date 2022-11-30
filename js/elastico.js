//elasticidad boton scrolltop
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //velocidad de la elasticidad
        //1 seg equivale a 1000
        speed: 1000,
        //tipos de aceleracion https://easings.net
        easing: 'easeInQuint',
    });
});

//Esconder o mostar el botón ScrollTop al usar el scroll de la pagina web
window.onscroll = function() {
    //carga la funcion scrollfunction/
    scrollFunction()
};

function scrollFunction() {
    //se usa el operativo logico O/
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        //muestra el boton scrolltop/
        document.getElementById("flechabtn").style.display = "block";

    } else {
        //esconde el boton scrolltop/
        document.getElementById("flechabtn").style.display = "none";
    }
}

//funcion scrolltop que se llama desde el HTML

function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        //llama a la etiqueta html body para poner el scrolltop en 0
        $('html,body').animate({ scrollTop: 0 });
    });
}