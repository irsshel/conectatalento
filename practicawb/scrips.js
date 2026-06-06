// ===============================
// CARGA DE LA PÁGINA
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("ConectaTalento cargado correctamente");
});

// ===============================
// SOMBRA EN EL HEADER
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.15)";

    }else{

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.08)";
    }

});

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.classList.add("btn-top");

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        btnTop.classList.add("mostrar");

    }else{

        btnTop.classList.remove("mostrar");
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===============================
// EFECTO TARJETAS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";
    });

});