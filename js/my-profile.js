let nombre = document.querySelector("#txtNombre");
let apellido = document.querySelector("#txtApellido");
let email = document.querySelector("#txtEmail");
let telefono = document.querySelector("#txtTelefono");
let edad = document.querySelector("#txtEdad");


function guardarDatosCuenta() {


    localStorage.setItem("userName", JSON.stringify({ name: nombre.value }));
    localStorage.setItem("userSurname", JSON.stringify({ surname: apellido.value }));
    localStorage.setItem("userEmail", JSON.stringify({ mail: email.value }));
    localStorage.setItem("userTel", JSON.stringify({ tel: telefono.value }))
    localStorage.setItem("userAge", JSON.stringify({ age: edad.value }));

}

function mostrarDatos() {

    let nombreGuardado = localStorage.getItem("userName");
    let mostrarDatosNombre = document.querySelector("#mostrarNombre");
    let apellidoGuardado = localStorage.getItem("userSurname");
    let mostrarDatosApellido = document.querySelector("#mostrarApellido");
    let emailGuardado = localStorage.getItem("userEmail");
    let mostrarDatosEmail = document.querySelector("#mostrarEmail");
    let telefonoGuardado = localStorage.getItem("userTel");
    let mostrarDatosTelefono = document.querySelector("#mostrarTelefono");
    let edadGuardado = localStorage.getItem("userAge");
    let mostrarDatosEdad = document.querySelector("#mostrarEdad");


    if (!nombreGuardado || !apellidoGuardado || !emailGuardado || !telefonoGuardado || !edadGuardado) {
        alert("No hay datos para mostrar, o falta completar algún dato. Complete todos los campos para ver su información")
    }



    if (nombreGuardado) {

        nombreGuardado = JSON.parse(nombreGuardado);
        mostrarDatosNombre.innerText = nombreGuardado.name;

    }
    if (apellidoGuardado) {

        apellidoGuardado = JSON.parse(apellidoGuardado);
        mostrarDatosApellido.innerText = apellidoGuardado.surname;
    }
    if (emailGuardado) {

        emailGuardado = JSON.parse(emailGuardado);
        mostrarDatosEmail.innerText = emailGuardado.mail;
    }
    if (telefonoGuardado) {

        telefonoGuardado = JSON.parse(telefonoGuardado);
        mostrarDatosTelefono.innerText = telefonoGuardado.tel;
    }
    if (edadGuardado) {

        edadGuardado = JSON.parse(edadGuardado);
        mostrarDatosEdad.innerText = edadGuardado.age;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let forms = document.querySelector('.needs-validation');

    forms.addEventListener('submit', function(event){
        if(forms.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        forms.classList.add('was-validated')
    });

});