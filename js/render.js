import { artistas } from "./data.js";

const container = document.getElementById("lista-artistas");

artistas.forEach(artista => {
    container.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card-musica">
                <img src="${artista.img}" alt="${artista.nombre}">
                <div class="info">
                    <h3>${artista.nombre}</h3>
                    <p>${artista.descripcion}</p>
                </div>
            </div>
        </div>
    `;
});