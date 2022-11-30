/* ============================================================================================================
   CONTACTENOS
============================================================================================================= */
function validar_datos() {
    var nombre = document.getElementById('nombreTXT');
    var apellido = document.getElementById('apellidoTXT');
    var correo = document.getElementById('correoTXT');
    var area = document.getElementById('areaTXT');

    //asignaciones de los campos form a variables
    nombre = nombreTXT.value;
    apellido = apellidoTXT.value;
    correo = correoTXT.value;
    area = areaTXT.value;

    if (nombre == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su nombre',
        })
        return;
    }

    if (apellido == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su apellidos',
        })
        return;
    }

    if (correo == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su correo electrónico',
        })
        return;
    } else {
        clavehoy = document.login.c3.value;
        if (clavehoy.length < 10) {
            Swal.fire({
                icon: 'warning',
                title: 'El correo es muy corta, debe ser de mas de 10 caracteres',
            })
            return;
        }
    }
    if (area == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su mensaje deseado',
        })
    }

    comentario = document.login.c4.value;
    if (comentario.length < 12) {
        alert("El comentario debe tener mas de 12 letras y no mas de 24");
        //el name c4 de HTML
        // document.login.c4.focus();
        return;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje Enviado',
            text: 'Nos pondremos en contacto pronto',

        })
    }

}

/* ============================================================================================================
   GALERIA
============================================================================================================= */
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}

function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}

function foto1() {
    var foto1 = document.getElementById("foto1");
    Swal.fire({
        imageUrl: "img/galeria2.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto2() {
    var foto2 = document.getElementById("foto2");
    Swal.fire({
        imageUrl: "img/galeria3.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto3() {
    var foto3 = document.getElementById("foto3");
    Swal.fire({
        imageUrl: "img/galeria4.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto4() {
    var foto4 = document.getElementById("foto4");
    Swal.fire({
        imageUrl: "img/galeria5.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto5() {
    var foto5 = document.getElementById("foto5");
    Swal.fire({
        imageUrl: "img/galeria6.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto6() {
    var foto6 = document.getElementById("foto6");
    Swal.fire({
        imageUrl: "img/galeria7.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto7() {
    var foto7 = document.getElementById("foto7");
    Swal.fire({
        imageUrl: "img/galeria8.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

function foto8() {
    var foto8 = document.getElementById("foto8");
    Swal.fire({
        imageUrl: "img/galeria9.jpg",
        width: 1000,
        height: 750,
        confirmButtonText: "Aceptar",
    })
}

/* ============================================================================================================
   SPA
============================================================================================================= */

function faciales() {
    Swal.fire({
        title: 'Tratamientos faciales',
        imageUrl: "../img/spa9.jpg",
        imageWidth: 200,
        imageHeight: 256,
        width: 1000,
        height: 750,
        html: '<p style="font-size:18px;text-align:left;"><strong>Exfoliación Ultra Peel </strong>tratará eficazmente la piel envejecida, los brotes, los trastornos de la pigmentación, la piel del fumador y la piel fotodañada.</p>' + '<br>' + '<p style="font-size:18px;text-align:left;"><strong>Trio Oxigenante Facial </strong> es un sistema de 3 pasos diseñado para promover un brillo saludable al estimular la oxigenación y la circulación.</p>' + '<br>' + '<p style="font-size:18px;text-align:left;"><strong>Exfoliante Sensi Peel </strong>  solución suave está formulada principalmente para pieles étnicas y otros tipos de piel extremadamente sensibles.</p>' + '<br>' + '<p style="font-size:18px;text-align:left;"><strong>Retinoid Peel</strong> mejora la absorción de vitaminas, antioxidantes y ricos ingredientes activos en la piel.</p>',
        confirmButtonText: "Aceptar",
        confirmButtonColor: '#f07142',
    })
}

function corporales() {
    Swal.fire({
        title: 'Tratamientos corporales',
        imageUrl: "../img/spa10.jpg",
        imageWidth: 200,
        imageHeight: 256,
        width: 1000,
        height: 750,
        html: '<p style="font-size:18px;text-align:left;"><strong>Smoothing Body Peel </strong>es un tratamiento de dos pasos, específicamente para la piel del cuerpo, con una mezcla exclusiva de TCA.</p>' + '<br>' + '<p style="font-size:18px;text-align:left;"><strong>Hot Salt Scrub</strong> exfoliante con fuerza de spa que se calienta al contacto mientras que la sal marina natural exfolia y extrae algas.</p>' + '<br>' + '<p style="font-size:18px;text-align:left;"><strong>Lime & Ginger Salt Glow</strong>   es un tratamiento profundamente relajante y vigorizante que exfolia todo el cuerpo.</p>' + '<br>' + '<p style="font-size:18px;text-align:left;"><strong>The Deep Sea Detox </strong> Cepillado de cuerpo entero seguido de un cálido puré de plantas marinas y algas marinas para desintoxicar y reducir la apariencia de la celulitis. </p>',
        confirmButtonText: "Aceptar",
        confirmButtonColor: '#f07142',
    })
}

function mostrar() {
    //checked es una propiedad que significa opcion seleccionada
    if (document.getElementById('radio1').checked) {
        faciales();
    }
    if (document.getElementById('radio2').checked) {
        corporales();
    }
}