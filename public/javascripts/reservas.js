const formulario = document.getElementById("formulario-reserva");
const respuesta = document.getElementById("respuesta");
const errorNombre = document.getElementById("error-nombre");
const errorCorreo = document.getElementById("error-correo");
const errorTelefono = document.getElementById("error-telefono");
const errorMensaje = document.getElementById("error-mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre) {
        errorNombre.innerHTML = "Por favor, ingresa tu nombre";
    } else {
        errorNombre.innerHTML = "";
    }

    if (
        !correo ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)
    ) {
        errorCorreo.innerHTML = "Por favor, ingresa un correo electrónico válido";
    } else {
        errorCorreo.innerHTML = "";
    }

    if (!telefono || !/^\d{3}\d{3}\d{3}$/.test(telefono)) {
        errorTelefono.innerHTML =
            "Por favor, ingresa un número de teléfono válido (XXX-XXX-XXX";
    } else {
        errorTelefono.innerHTML = "";
    }

    if (!mensaje) {
        errorMensaje.innerHTML = "Por favor, ingresa un mensaje";
    } else {
        errorMensaje.innerHTML = "";
    }

    if (nombre && correo && telefono && mensaje) {
        respuesta.innerHTML = "Reserva exitosa!";
        respuesta.style.color = "green";
        formulario.reset();
    }
});
//bloque reservas
const cuadros = document.querySelectorAll(".cuadro");
const btns = document.querySelectorAll(".btn");

cuadros.forEach((cuadro) => {
    cuadro.addEventListener("mouseover", () => {
        cuadro.style.transform = "scale(1.1)";
        cuadro.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    });

    cuadro.addEventListener("mouseout", () => {
        cuadro.style.transform = "scale(1)";
        cuadro.style.boxShadow = "";
    });
});

btns.forEach((btn) => {
    let seleccionado = false;

    btn.addEventListener("click", () => {
        const cuadro = btn.closest(".cuadro");

        if (!seleccionado) {
            cuadro.style.border = "2px solid #007bff";
            cuadro.style.background = "rgba(0, 123, 255, 0.1)";
            btn.textContent = "Cancelar";
            seleccionado = true;
        } else {
            cuadro.style.border = "";
            cuadro.style.background = "";
            btn.textContent = "Reservar";
            seleccionado = false;
        }
    });
});
const cuadro = document.querySelectorAll(".cuadro");
const btn = document.querySelectorAll(".btn1");

cuadro.forEach((cuadro) => {
    cuadro.addEventListener("mouseover", () => {
        cuadro.style.transform = "scale(1.1)";
        cuadro.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    });

    cuadro.addEventListener("mouseout", () => {
        cuadro.style.transform = "scale(1)";
        cuadro.style.boxShadow = "";
    });
});

btn.forEach((btn) => {
    let seleccionado = false;

    btn.addEventListener("click", () => {
        const cuadro = btn.closest(".cuadro");

        if (!seleccionado) {
            cuadro.style.border = "2px solid #007bff";
            cuadro.style.background = "rgba(0, 123, 255, 0.1)";
            btn.textContent = "Cancelar";
            seleccionado = true;
        } else {
            cuadro.style.border = "";
            cuadro.style.background = "";
            btn.textContent = "Reservar";
            seleccionado = false;
        }
    });
});
//tutulo
const titulo = document.getElementById("titulo");
const texto = "Reserva ahora y disfruta con tranquilidad";
let indice = 0;

function escribirTexto() {
    if (indice < texto.length) {
        titulo.textContent += texto[indice];
        indice++;
        setTimeout(escribirTexto, 50); // Velocidad de escritura
    }
}

escribirTexto();
const pTitulo = document.querySelector(".pTitulo");
const frase = "HOTEL CALIFORNIA";

let i = 0;
const velocidad = 100;

function escribir() {
    if (i < frase.length) {
        pTitulo.textContent += frase[i];
        i++;
        setTimeout(escribir, velocidad);
    }
}

escribir();