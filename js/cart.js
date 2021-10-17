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

function calcularTotal(){

    let total = 0;
    let subtotales = document.querySelectorAll(".subtotal");

    for (let i = 0; i < subtotales.length; i++){
        total += parseInt(subtotales[i].innerHTML);
    }
    document.querySelector("#totalSubtotales").innerHTML = total;
}


function calcularSubtotal(precio, i){
    let cantidadProducto = Number(document.querySelector(`#cantidadProductos${i}`).value);
    let subTotal = precio * cantidadProducto;

    if(i = 1){
        subTotal = (precio * 40) * cantidadProducto;
    }

    document.querySelector(`#productosSubtotal${i}`).innerHTML = subTotal + "<small> UYU </small>";

    calcularTotal()
}



function showProductosComprados(array) {

    let contenido = "";

    for (let i = 0; i < array.length; i++) {

        let productos = array[i]

        let sub = (productos.count * productos.unitCost);

        if (productos.currency === "USD"){
            sub = productos.count * (productos.unitCost * 40)
        } else{
            sub
        }

        contenido += `
            
    <tr>

    <td><img id="productosCarrito" src="${productos.src}" alt="${productos.name}" </td>

        <td>${productos.name} </td>

        <td><input onchange="calcularSubtotal(${productos.unitCost}, ${i})"  
        id="cantidadProductos${i}" class="cantidadTotal"
         min="1" max="10" type="number" value="${productos.count}"/></td>
        
        <td> <span class="subtotal" id="productosSubtotal${i}">${sub} <small>UYU</small><span></td>

        <td>${productos.currency} </td>
       
        </tr>
    
        `
        document.querySelector("#articuloComprado").innerHTML = contenido;
    }
    
    calcularTotal()
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

});