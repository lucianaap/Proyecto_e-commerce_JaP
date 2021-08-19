var productsArray = [];
var imagenesArray = [];
function showProductsList(productsArray) {
    let list = "<hr>"
    for (let i = 0; i< productsArray.length; i++){
        
        let autos = productsArray[i];
        list += `<h4 class="mb-1">` + autos.name + `</h4>`+ "<br>";
        list +=  autos.description + "<br>";3
        list += autos.cost +" " + autos.currency + "<br>";
        list += "<br>" +  `<img id="imagen-producto" src=" `+ autos.imgSrc + `"alt = `+ autos.description + `` + "<br>"
        list += "<br><hr><br>"
    
    };
    
    document.getElementById("lista-productos").innerHTML =list;
   
};


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
});