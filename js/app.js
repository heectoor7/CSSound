// =====================================
// TARJETA ARTISTA → MODAL
// =====================================

const tarjetasArtista = document.querySelectorAll(".artista-card");
const modal = document.getElementById("artistModal");

if (modal) {
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalGenre = document.getElementById("modalGenre");
  const modalSongs = document.getElementById("modalSongs");
  const closeBtn = document.querySelector(".close-modal");

  tarjetasArtista.forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.dataset.img;
      modalName.textContent = card.dataset.name;
      modalGenre.textContent = card.dataset.genre;
      modalSongs.textContent = card.dataset.songs;

      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// =====================================
// ELEMENTOS DEL PLAYER (COMPARTIDOS)
// =====================================

const imagenPlayer = document.querySelector(".player .cover img");
const tituloPlayer = document.querySelector(".player .song strong");
const artistaPlayer = document.querySelector(".player .song span");

const portadaActual = document.getElementById("portada-actual");
const tituloActual = document.getElementById("titulo-actual");
const artistaActual = document.getElementById("artista-actual");
const albumActual = document.getElementById("album-actual");

// =====================================
// FUNCIÓN COMÚN: ACTUALIZAR CANCIÓN
// =====================================

function actualizarCancion(imagen, titulo, artista) {
  // Player inferior
  if (imagenPlayer) imagenPlayer.src = imagen;
  if (tituloPlayer) tituloPlayer.textContent = titulo;
  if (artistaPlayer) artistaPlayer.textContent = artista;

  // Vista "Sonando ahora"
  if (portadaActual) portadaActual.src = imagen;
  if (tituloActual) tituloActual.textContent = titulo;
  if (artistaActual) artistaActual.textContent = artista;
  if (albumActual) albumActual.textContent = titulo;
}

// =====================================
// CANCIONES TIPO TARJETA (.music-card)
// =====================================

document.querySelectorAll(".music-card").forEach(card => {
  card.addEventListener("click", () => {
    const imagen = card.querySelector("img").src;
    const titulo = card.querySelector("h6").textContent;
    const artista = card.querySelector("p").textContent;

    actualizarCancion(imagen, titulo, artista);
  });
});

// =====================================
// CANCIONES EN LISTA (.fila-cancion)
// =====================================

const filasCancion = document.querySelectorAll(".fila-cancion");

filasCancion.forEach(fila => {
  fila.addEventListener("click", () => {

    // Marcar activa
    filasCancion.forEach(c => c.classList.remove("activa"));
    fila.classList.add("activa");

    const imagen = fila.querySelector("img").src;
    const titulo = fila.querySelector("strong").textContent;
    const artista = fila.querySelector("span").textContent;

    actualizarCancion(imagen, titulo, artista);
  });
});
