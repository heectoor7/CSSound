// =============================
// Tarjeta artista
// =============================

const cards = document.querySelectorAll('.artista-card');
const modal = document.getElementById('artistModal');

const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalGenre = document.getElementById('modalGenre');
const modalSongs = document.getElementById('modalSongs');
const closeBtn = document.querySelector('.close-modal');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = card.dataset.img;
    modalName.textContent = card.dataset.name;
    modalGenre.textContent = card.dataset.genre;
    modalSongs.textContent = card.dataset.songs;

    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});


// =============================
// Seleccionar canción
// =============================

document.querySelectorAll(".music-card").forEach(card => {
  card.addEventListener("click", () => {

    // Obtener datos de la card
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h6").textContent;
    const artist = card.querySelector("p").textContent;

    // Elementos del player
    const playerImg = document.querySelector(".player .cover img");
    const playerTitle = document.querySelector(".player .song strong");
    const playerArtist = document.querySelector(".player .song span");

    // Actualizar player
    playerImg.src = imgSrc;
    playerTitle.textContent = title;
    playerArtist.textContent = artist;
  });
});
