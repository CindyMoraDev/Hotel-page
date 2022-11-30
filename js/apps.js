//evento de carga LOAD
window.addEventListener('load', inicial, false);

function inicial() {

    //creacion de tabla de registros
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    //declaracion de variables 
    var proveedoresSlt = document.getElementById('proveedoresSlt');
    var cantFresasTxt = document.getElementById('cantFresasTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var pagoBtn = document.getElementById('pagoBtn');
    var totalFresasBtn = document.getElementById('totalFresasBtn');
    var mayorProductorBtn = document.getElementById('mayorProductorBtn');
    var menorProductorBtn = document.getElementById('menorProductorBtn');
    var restablecerBtn = document.getElementById('restablecerBtn');
    var resultadoPr = document.getElementById('resultadoPr');

    let seleccionar = document.getElementById('reserva_habitacion');



    //arreglo bidimensional
    //Para obtener un elemento de un arreglo, debe indicarse los índices de su fila i y su columna 
    var datos = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    //carga de funcion con los datos quemados
    registrarProveedores(1, 'Juan', 'Bolaños', 'Regular', 0, 0, 'juanBolaños24@gmail.com', 60234566);
    registrarProveedores(2, 'Pedro', 'Ureña', 'VIP', 0, 0, 'pedro94ureña@gmail.com', 75678746);
    registrarProveedores(3, 'Diego', 'Jimenez', 'Regular', 0, 0, 'diegoIna@hotmail.com', 60138932);
    registrarProveedores(4, 'Matias', 'Rodriguez', 'Regular', 0, 0, 'matiR@gmail.com', 60784256);
    registrarProveedores(5, 'Jorge', 'Ureña', 'VIP', 0, 0, 'jorgeElCurioso@hotmail.com', 83471578);
    registrarProveedores(6, 'Carlos', 'Obando', 'Regular', 0, 0, 'juanBolaños24@gmail.com', 83768146);
    registrarProveedores(7, 'Marco', 'Ureña', 'VIP', 0, 0, 'marcotrainer@gmail.com', 83251831);
    registrarProveedores(8, 'Jasus', 'Trejos', 'Regular', 0, 0, 'jesusTrejos@hotmail.com', 71788942);
    registrarProveedores(9, 'Mario', 'Ureña', 'VIP', 0, 0, 'mariobros@gmail.com', 70161368);
    registrarProveedores(10, 'Patricia', 'Ortiz', 'Regular', 0, 0, 'patriciaOrtiz@gmail.com', 60947923);
    registrarProveedores(11, 'Bo', 'Ritchie', 'Regular', 0, 0, 'bRitchie@gmail.com', 60969969);
    registrarProveedores(12, 'Kaycee', 'Block', 'Regular', 0, 0, 'kBlock@gmail.com', 18287042);
    registrarProveedores(13, 'Frederic', 'Wuckert', 'VIP', 0, 0, 'fWuckert@gmail.com', 55861239);
    registrarProveedores(14, 'Fannie', 'Abbott', 'VIP', 0, 0, 'fAbbott@gmail.com', 72147851);
    registrarProveedores(15, 'Marlene', 'Bergnaum', 'VIP', 0, 0, 'mBergnaum@gmail.com', 34041641);

    //carga de la funcion tablaProveedores();
    tablaProveedores();


    //funcion que permite registrar los registros al arreglo
    function registrarProveedores(id, nombre, apellido, tipo, cantidad, total, email, telefono) {
        datos[0].push(id);
        datos[1].push(nombre);
        datos[2].push(apellido);
        datos[3].push(tipo);
        datos[4].push(cantidad);
        datos[5].push(total);
        datos[6].push(email);
        datos[7].push(telefono)
    }



    //funcion que permite ingresar la cantidad del producto a la tabla = datos[4][id] 
    function ingresarFresas() {
        var fresasSumar = Number(cantFresasTxt.value);
        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var cantFresas = Number(datos[4][id]); //verifica a cual persona le asigna la cantidad 
        cantFresas = cantFresas + Number(fresasSumar); //formula sumatoria
        datos[4][id] = cantFresas;

        let eleccion = parseInt(seleccionar.value);
        switch (eleccion) {
            case 1:
                precio = 150 * cantFresas;
                break;

            case 2:
                precio = 200 * cantFresas;
                break;

            case 3:
                precio = 275 * cantFresas;
                break;

            case 4:
                precio = 350 * cantFresas;
                break;
            case 5:
                precio = 500 * cantFresas;
                break;

            default:
                descripcion.innerHTML = '';
                break;
        }

        datos[5][id] = precio;
    }


    //funcion que permite crear los datos de la tabla
    function tablaProveedores() {

        //Eliminar los registros de la tabla
        tabla.innerHTML = '';

        //Encabezado de la tabla
        var tr = document.createElement('tr');
        tabla.appendChild(tr);

        //Celdas dentro del encabezado
        var th = document.createElement('th');
        th.innerHTML = 'ID';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tipo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Total';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Monto';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Correo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tel';
        tr.appendChild(th);
        //etiqueta Borrar (invisible)
        th = document.createElement('th');
        th.innerHTML = '';
        tr.appendChild(th);


        //ciclo que permtite recorrer los registros de la tabla
        for (var y = 0; y < datos[0].length; y++) {

            var tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[5][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[6][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[7][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = "<button class='deleteBtn btn btn-outline-light' id='eliminarBtn'>Borrar</button>";
            tr.appendChild(td);

        }
    }


    //Permite generar el total general
    function totalFresasRecolectados() {
        var total = 0;
        var totalMonto = 0;
        resultadoPr.innerHTML = '';
        //classList.add permite acceder a la lista de clases de un elemento como una cadena de texto 
        resultadoPr.classList.add('resultadoPr');
        //ciclo que permite efecturar la sumatoria del total de fresas recolectadas
        for (var y = 0; y < datos[4].length; y++) {
            total = total + Number(datos[4][y]);
            totalMonto = totalMonto + Number(datos[5][y]);
        }
        resultadoPr.innerHTML = 'La cantidad total de noches pagadas es de: ' + total + '<br>' + 'El monto total de noches pagadas es de: $' + totalMonto;
    }


    //Permite buscar el mayor productor
    function mayorProveedor() {
        /*permite buscar el mayor provedoor mediante el arreglo(matriz) y lo busca mediante la propiedad indexOf 
        la variable maxProveedor  que tiene el nombre de la matriz y la posicion [4][0] que es la que posee el total de fresas*/
        var maxProveedor = datos[4][0];
        var posicionMayor = 0;
        resultadoPr.innerHTML = '';
        //ciclo que recorre la matriz para buscar el dato
        for (var y = 0; y < datos[4].length; y++) {

            if (maxProveedor < datos[4][y]) {
                maxProveedor = datos[4][y];
            }
        }
        //apunta el dato encontrado
        posicionMayor = datos[4].indexOf(maxProveedor);
        //muestra el resultado final

        //CALCULO DE MONTO
        var maxMonto = datos[5][0];
        var posicionMontoMayor = 0;
        resultadoPr.innerHTML = '';
        //ciclo que recorre la matriz para buscar el dato
        for (var y = 0; y < datos[5].length; y++) {

            if (maxMonto < datos[5][y]) {
                maxMonto = datos[5][y];
            }
        }
        //apunta el dato encontrado
        posicionMontoMayor = datos[5].indexOf(maxMonto);
        //muestra el resultado final
        resultadoPr.innerHTML = 'El cliente con mayor número de noches pagadas es: ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor] + ' con ' + datos[4][posicionMayor] + '<br>El cliente con mayor monto pagado es: ' + datos[1][posicionMontoMayor] + "    " + datos[2][posicionMontoMayor] + " de $" + datos[5][posicionMontoMayor];

    }

    function menorProveedor() {
        /*permite buscar el mayor provedoor mediante el arreglo(matriz) y lo busca mediante la propiedad indexOf 
        la variable minProveedor  que tiene el nombre de la matriz y la posicion [4][0] que es la que posee el total de fresas*/
        var minProveedor = datos[4][0];
        var posicionMenor = 0;
        resultadoPr.innerHTML = '';
        //ciclo que recorre la matriz para buscar el dato
        for (var y = 0; y < datos[4].length; y++) {

            if (minProveedor > datos[4][y]) {
                minProveedor = datos[4][y];
            }
        }
        //apunta el dato encontrado
        posicionMenor = datos[4].indexOf(minProveedor);
        //muestra el resultado final

        //CALCULO DE MONTO
        var minMonto = datos[5][0];
        var posicionMontoMenor = 0;
        resultadoPr.innerHTML = '';
        //ciclo que recorre la matriz para buscar el dato
        for (var y = 0; y < datos[5].length; y++) {

            if (minMonto > datos[5][y]) {
                minMonto = datos[5][y];
            }
        }
        //apunta el dato encontrado
        posicionMontoMenor = datos[5].indexOf(minMonto);
        //muestra el resultado final
        resultadoPr.innerHTML = 'El cliente con menor número de noches pagadas es: ' + datos[1][posicionMenor] + "    " + datos[2][posicionMenor] + ' con ' + datos[4][posicionMenor] + '<br>El cliente con menor monto pagado es: ' + datos[1][posicionMontoMenor] + "    " + datos[2][posicionMontoMenor] + " de $" + datos[5][posicionMontoMenor];

    }


    //descuento si cliente es VIP y monto de descuento para siguiente reservación
    function pagoProveedores() {
        resultadoPr.innerHTML = ' ';
        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var precio = datos[5][id]
        var descuento = 0.05
        var total = 0;
        //condicional que define el tipo de vendedor (regular-VIP) datos[3][id] equivale al campo TIPO de la tabla
        if (datos[3][id] === 'VIP') {
            total = precio * descuento;
            resultadoPr.innerHTML = 'El cliente ' + datos[1][id] + ' ' + datos[2][id] + ' ' + 'tiene derecho a descuento de   $' + total + ' en su siguiente reservacion';
        } else {
            resultadoPr.innerHTML = 'El cliente no tiene categoría VIP, no aplica descuento';
        }
        //equivale al campo total del arreglo
        datos[5][id] = total;
        //muestra el resultado final

    }



    //Permite validar cuando NO existe ningun numero en el campo cantidad de fresas 
    //se usa la libreria sweet alert para brindar mensaje al usuario.
    registrarBtn.onclick = function registrarBtnOnClick() {
        //cargar las 2 funciones de ingresar y crear tabla de registros al mismo tiempo
        ingresarFresas();
        tablaProveedores();
        if (cantFresasTxt.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Atención Usuario',
                text: 'El campo esta vacío. Debe llenarlo con un número',
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Atención Usuario',
                text: 'Exito pago de habitación registrado',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }


    //Permite borrar el registro deseado de la tabla
    function borrarfila(e) {
        //deleteBtn es un ID del botón borrar
        //condicional que define cuando NO existe boton Borrar en la fila, retorna.
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        //constante que apunta al destino del evento
        const btn = e.target;
        //borra la fila o el registro elegido usando JQUERY
        btn.closest("tr").remove();
    }


    //Permite restablecer los registros de la tabla
    function restablecer() {
        var id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var cantFresasTxt = 0;
        //agrega al arreglo la cantidad de fresas en 0
        datos[4][id] = cantFresasTxt
        datos[5][id] = cantFresasTxt
    }




    //Permiten la carga de funciones principales		
    pagoBtn.onclick = function pagoBtn() {
        pagoProveedores();
    }
    mayorProductorBtn.onclick = function mayorProductorBtnOnclick() {
        mayorProveedor();
    }

    menorProductorBtn.onclick = function menorProductorBtnOnclick() {
        menorProveedor();
    }

    totalFresasBtn.onclick = function totalFresasBtnOnclick() {
        totalFresasRecolectados();
    }
    restablecerBtn.onclick = function restablecerBtnOnClick() {
        restablecer();
        tablaProveedores();
    }

    //el id tabla ejecuta el evento click para ejecutar la funcion borrarfila
    tabla.addEventListener("click", borrarfila);




    //cierre de la función inicial
}