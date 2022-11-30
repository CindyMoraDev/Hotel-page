//cambiar if else por switch
let seleccionar = document.getElementById('reserva_habitacion');
seleccionar.addEventListener('change', elegir);
let dias = document.getElementById('reserva_dias');
let entrada = document.getElementById('entrada');



document.getElementById('reserva_habitacion').onchange = function(e) {
    n = e.target.value;
    var archivo = "url('img/habitacion" + n + ".jpg')";
    console.log(archivo);
    document.getElementById("resultado").style.backgroundImage = archivo;
}

function elegir() {
    let eleccion = parseInt(seleccionar.value);
    switch (eleccion) {
        case 1:
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Habitación Standard</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Cómodas y confortables habitaciones donde podrá conseguir el descanso necesario para reinicar la aventura y disfrutar la experiencia.</p>' +
                '<div class="pt-5"></div>';
            break;

        case 2:
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Habitación Deluxe</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Unidades independientes, diseñadas para difrutar la magia de despertar rodeado de naturaleza o simplemente terminar el día con un baño caliente en la tina.</p>' +
                '<div class="pt-5"></div>';
            break;

        case 3:
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Paquete Standard</h5>' +
                '<div class="pt-5"></div>' +
                ' <p class="fs-2">Dos noches de hospedaje en habitación Standard para dos.</p>' +
                '<p class="fs-2">Desayuno, Almuerzo y Cena.</p>' +
                '<p class="fs-2">Sección de Masaje en pareja.</p>' +
                '<div class="pt-5"></div>';
            break;

        case 4:
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Paquete Premium</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Dos noches de hospedaje en habitación deluxe para dos.</p>' +
                '<p class="fs-2">Desayuno, Almuerzo y Cena.</p>' +
                '<p class="fs-2">Consumo ilimitado de bebidas alcohólicas de un menú especial.</p>' +
                '<p class="fs-2">Tratamientos de Spa en pareja.</p>' +
                ' <div class="pt-5"></div>';
            break;
        case 5:
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Paquete Deluxe</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Dos noches de hospedaje en habitación deluxe para dos.</p>' +
                '<p class="fs-2">Desayuno, Almuerzo y Cena.</p>' +
                '<p class="fs-2">Tratamientos de spa seleccionados ilimitados.</p>' +
                '<p class="fs-2">Consumo ilimitado de bebidas alcohólicas de un menú especial.</p>' +
                ' <div class="pt-5"></div>';
            break;

        default:
            descripcion.innerHTML = '';
            break;

    }

}

function buscar() {
    cantidad_dias = parseInt(dias.value);
    fecha = entrada.value;
    console.log(fecha);

    if (fecha == '') {
        Swal.fire({
            icon: 'warning',
            title: 'Ingrese Fecha',
        })
        return;
    }


    let eleccion = parseInt(seleccionar.value);
    switch (eleccion) {
        case 1:
            precio = 150 * cantidad_dias;
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Habitación Standard</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Cómodas y confortables habitaciones donde podrá conseguir el descanso necesario para reinicar la aventura y disfrutar la experiencia.</p>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-1">Precio</p> $' + precio + '.00';
            break;

        case 2:
            precio = 200 * cantidad_dias;
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Habitación Deluxe</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Unidades independientes, diseñadas para difrutar la magia de despertar rodeado de naturaleza o simplemente terminar el día con un baño caliente en la tina.</p>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-1">Precio</p> $' + precio + '.00';
            break;

        case 3:
            precio = 275 * cantidad_dias;
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Paquete Standard</h5>' +
                '<div class="pt-5"></div>' +
                ' <p class="fs-2">Dos noches de hospedaje en habitación Standard para dos.</p>' +
                '<p class="fs-2">Desayuno, Almuerzo y Cena.</p>' +
                '<p class="fs-2">Sección de Masaje en pareja.</p>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-1">Precio</p> $' + precio + '.00';
            break;

        case 4:
            precio = 350 * cantidad_dias;
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Paquete Premium</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Dos noches de hospedaje en habitación deluxe para dos.</p>' +
                '<p class="fs-2">Desayuno, Almuerzo y Cena.</p>' +
                '<p class="fs-2">Consumo ilimitado de bebidas alcohólicas de un menú especial.</p>' +
                '<p class="fs-2">Tratamientos de Spa en pareja.</p>' +
                '<p class="fs-1">Precio</p> $' + precio + '.00';
            break;
        case 5:
            precio = 500 * cantidad_dias;
            descripcion.innerHTML =
                '<h5 class="display-2 font-weight-bolder">Paquete Deluxe</h5>' +
                '<div class="pt-5"></div>' +
                '<p class="fs-2">Dos noches de hospedaje en habitación deluxe para dos.</p>' +
                '<p class="fs-2">Desayuno, Almuerzo y Cena.</p>' +
                '<p class="fs-2">Tratamientos de spa seleccionados ilimitados.</p>' +
                '<p class="fs-2">Consumo ilimitado de bebidas alcohólicas de un menú especial.</p>' +
                '<p class="fs-1">Precio</p> $' + precio + '.00';
            break;

        default:
            descripcion.innerHTML = '';
            break;
    }


}