let articulosComprados;

function descuento() {
    let cupon = document.querySelector("#cuponDescuento").value;
    let mensaje;

    if (cupon.trim() < 1 || cupon.length > 7) {
        mensaje = "Debe ingresar un cupon correcto"
    } else {
        mensaje = "El cupon ingresado es incorrecto"
    }
    document.querySelector("#mensajeDescuento").innerText = mensaje;

}

function calcularTotal() {
    let tipoEnvio = document.querySelectorAll('.envio');
    let envio;
    let totalSinEnvio = 0;
    let subtotales = document.querySelectorAll(".subtotal");
    let calculoEnvio = 0

    for (let i = 0; i < subtotales.length; i++) {
        totalSinEnvio += parseInt(subtotales[i].innerHTML);
    }

    for (let i = 0; i < tipoEnvio.length; i++) {

        if (tipoEnvio[i].checked) {
            envio = parseInt(tipoEnvio[i].value)
        }
    }

    if(envio === 1) {
        calculoEnvio += (totalSinEnvio * 15) / 100

    }else if (envio === 2) {
        calculoEnvio += (totalSinEnvio * 7) / 100

    }else{
        calculoEnvio += (totalSinEnvio * 5) / 100
    }

    let totalConEnvio = totalSinEnvio + calculoEnvio;

    document.querySelector("#totalSubtotales").innerHTML = totalSinEnvio;
    document.querySelector('#precioTotal').innerHTML = totalConEnvio;

}

function calcularSubtotal(precio, i) {
    let cantidadProducto = Number(document.querySelector(`#cantidadProductos${i}`).value);
    let subTotal = precio * cantidadProducto;

    if (i === 1) {
        subTotal = (precio * 40) * cantidadProducto

    }

    document.querySelector(`#productosSubtotal${i}`).innerHTML = subTotal + "<small> UYU </small>";

    calcularTotal()
}

function showProductosComprados(array) {

    let contenido = "";

    for (let i = 0; i < array.length; i++) {

        let productos = array[i]

        let sub = (productos.count * productos.unitCost);

        if (productos.currency === "USD") {
            sub = productos.count * (productos.unitCost * 40)
        }

        contenido += `
            
    <tr>

    <td><img id="productosCarrito" src="${productos.src}" alt="${productos.name}" </td>

        <td>${productos.name} </td>

        <td><input onchange="calcularSubtotal(${productos.unitCost}, ${i})"  
        id="cantidadProductos${i}" class="cantidadTotal"
         min="1" type="number" value="${productos.count}"/></td>
        
        <td> <span class="subtotal" id="productosSubtotal${i}">${sub} <small>UYU</small><span></td>

        <td><span id="currencyProducts${i}">${productos.currency}</span></td>
       
        </tr>
    
        `
        document.querySelector("#articuloComprado").innerHTML = contenido;
    }

    calcularTotal()
}

function redirigir(){
    window.location = CART_BUY_URL
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            articulosComprados = resultObj.data.articles;

            showProductosComprados(articulosComprados);
        }
    });

    document.querySelector("#btnAplicarCupon").addEventListener("click", descuento);

    let forms = document.querySelector('.needs-validation');

    forms.addEventListener('submit', function(event){
        if(forms.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        forms.classList.add('was-validated')
    });


    document.querySelector('#btnComprar').addEventListener('submit', redirigir)



});