let product = {};
let commentsArray = [];
let productsArrayReletedProducts = [];

function showReletedProducts1() {

    let contenido1 = "";
    let contenido2 = "";


    for (let i = 3; i < productsArrayReletedProducts.length; i++) {

        let auto1 = productsArrayReletedProducts[1];
        let auto2 = productsArrayReletedProducts[3]


        contenido1 += "<br>" + `<img class= "productReleted" src=" ` + auto1.imgSrc + `"alt = ` + auto1.description + `` + "<br>" + "<br>"
        contenido1 += `<h6 id="autos-name" class="mb-1">` + auto1.name + `</h6>` + "<br>";
        contenido1 += `<small>` + auto1.description + `</small>` + "<br><br>";
        contenido2 += "<br>" + `<img class= "productReleted"  src=" ` + auto2.imgSrc + `"alt = ` + auto2.description + `` + "<br>" + "<br>"
        contenido2 += `<h6 id="autos-name" class="mb-1">` + auto2.name + `</h6>` + "<br>";
        contenido2 += `<small>` + auto2.description + `<small>` + "<br>";
    }

    document.querySelector("#reletedProducts1").innerHTML = contenido1;
    document.querySelector("#reletedProducts2").innerHTML = contenido2;

}


function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGalleryAdicional").innerHTML = htmlContentToAppend;
    }
}

function showCommentsArray(array) {
    let comentario = "<hr/>";

    for (let i = 0; i < commentsArray.length; i++) {
        let comments = commentsArray[i];

        comentario += `<p id=usuario_puntuación>` + comments.score + `/5 </p>` + "<br/>"
        comentario += `<p id=usuario_comentario>` + comments.user + `</p>` + "<br/>"
        comentario += comments.description + "<br/><br/>"
        comentario += `<small>` + comments.dateTime + `</small>` + "<br/>"
        comentario += "<br/><hr/><br/>"
    }

    document.getElementById("productComments").innerHTML = comentario;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("soldCount");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCategoryHTML = document.getElementById("productCategory");


            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productCategoryHTML.innerHTML = product.category;
            showImagesGallery(product.images);


        }



    });

    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArrayReletedProducts = resultObj.data;
            showReletedProducts1(productsArrayReletedProducts);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commentsArray = resultObj.data;
            showCommentsArray(commentsArray);
        }
    });
});