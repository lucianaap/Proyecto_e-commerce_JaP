var productsArray = [];

function showProductsList(productsArray) {
    let list = "<hr>"
    for (let i = 0; i< productsArray.length; i++){
        let autos = productsArray[i];
        list +=  autos.name + "<br>";
        list +=  autos.description + "<br>";3
        list += autos.cost + "<br>";
        list += autos.currency + "<br>";
        list += "Total productos vendidos:" + autos.soldCount + "<br>";
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