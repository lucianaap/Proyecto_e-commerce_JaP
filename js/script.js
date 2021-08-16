function cargarDatos (PRODUCTS_URL){
    document.getElementById("carga_productos").innerHTML = "";

    fetch(PRODUCTS_URL)
    .then (respuesta => respuesta.json())
    .then (datos => {
        datos.forEach(element => {
            let row = "";
            row =`
            <h3> ` + element.name + `</h3>
            <p> ` + element.description + `</p> 
            <p> `+ element.cost + ` </p>
            <img src=" `+ element.imgSrc +`">
            `;
            document.getElementById("carga_productos").innerHTML += row;
        });
    })
    .catch(error => alert("Hubo un error: " + error));
}