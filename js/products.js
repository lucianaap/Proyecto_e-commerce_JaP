let productsArray = [];
let minPrecio;
let maxPrecio;
let buscar;
let sort_by_sold_count = "Relevancia"
let sort_by_menor_precio = "Menor Precio"
let sort_by_mayor_precio = "Mayor Precio"
let currentSortCriteria;


function masInfo(){
    window.location = "product-info.html";
}


function showProductsList() {

    let list = "<hr>"

    for (let i = 0; i < productsArray.length; i++) {
        let autos = productsArray[i];

        if (((minPrecio == undefined) || (autos.cost >= minPrecio)) &&
            ((maxPrecio == undefined) || (autos.cost <= maxPrecio))) {

            if ((buscar == undefined || autos.name.toLowerCase().includes(buscar))) {

                list += "<br>" + `<img id="imagen-producto" src=" ` + autos.imgSrc + `"alt = ` + autos.description + `` + "<br>" + "<br>"
                list += `<h4 id="autos-name" class="mb-1">` + autos.name + `</h4>` + "<br>";
                list += autos.description + "<br>";
                list += autos.cost + " " + autos.currency + "<br>" + "<br>";
                list += '<button id="mas-info" onclick="masInfo()">Más información</button><br/><br/>'
                list += `<small id="autos-soldCount">` + autos.soldCount + ` unidades vendidas</small>` + "<br>"
                list += "<br><hr><br>"
            }
        }
        document.getElementById("lista-productos").innerHTML = list;
    }
};


function filtrarPrecios() {
    minPrecio = document.getElementById("filtroPrecioMinimo").value;
    maxPrecio = document.getElementById("filtroPrecioMaximo").value;

    if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio)) >= 0) {
        minPrecio = parseInt(minPrecio);
    } else {
        minPrecio = undefined;
    }

    if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0) {
        maxPrecio = parseInt(maxPrecio);
    } else {
        maxPrecio = undefined;
    }

    showProductsList();
}

function limpiarFiltro() {
    minPrecio = document.getElementById("filtroPrecioMinimo").value = "";
    maxPrecio = document.getElementById("filtroPrecioMaximo").value = "";

    minPrecio = undefined;
    maxPrecio = undefined;

    showProductsList();
}

function ordenarProductos(criteria, array) {

    let result = [];
    if (criteria === sort_by_menor_precio) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === sort_by_mayor_precio) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === sort_by_sold_count) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}

function OrdenarYMostarProductos(sortCriteria, currentProductsArray) {

    currentSortCriteria = sortCriteria;

    if (currentProductsArray != undefined) {
        productsArray = currentProductsArray;
    }

    productsArray = ordenarProductos(currentSortCriteria, productsArray);

    showProductsList();
}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
    
    document.getElementById("btn-min-precio").addEventListener("click", function () {
        OrdenarYMostarProductos(sort_by_menor_precio);
    })


    document.getElementById("btn-max-precio").addEventListener("click", function () {
        OrdenarYMostarProductos(sort_by_mayor_precio);
    })

    document.getElementById("btn-mas-vendidos").addEventListener("click", function () {
        OrdenarYMostarProductos(sort_by_sold_count);
    })


    document.getElementById("buscador").addEventListener("input", function (e) {
        buscar = document.getElementById("buscador").value.toLowerCase();

        showProductsList();
    })

    document.getElementById("limpiarBusqueda").addEventListener("click", function (e) {
        document.getElementById("buscador").value = ""

        buscar = undefined

        showProductsList();
    })

    


});

