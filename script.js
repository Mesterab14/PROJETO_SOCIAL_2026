const games = [
  {
    category: "PORCENTAGEM",
    title: "Percent Soul",
    desc: "SOBRE O JOGO.",
    image:"PercentSoul.jpg",
    link: "https://percentsoul.vercel.app/",
  },
  {
    category: "A CATEGORIA DO JOGO",
    title: "NOME DO JOGO",
    desc: "SOBRE O JOGO.",
    image: "https://via.placeholder.com/400x280/1D1F5A/FFFFFF?text=Math+Matrix",
    link: "#",
  },
  {
    category: "A CATEGORIA DO JOGO",
    title: "NOME DO JOGO",
    desc: "SOBRE O JOGO.",
    image:
      "https://via.placeholder.com/400x280/0d0e29/FFFFFF?text=Retro+Runner",
    link: "#",
  },
  {
    category: "A CATEGORIA DO JOGO",
    title: "NOME DO JOGO",
    desc: "SOBRE O JOGO.",
    image:
      "https://via.placeholder.com/400x280/0d0e29/FFFFFF?text=Retro+Runner",
    link: "#",
  },
  {
    category: "A CATEGORIA DO JOGO",
    title: "NOME DO JOGO",
    desc: "SOBRE O JOGO.",
    image:
      "https://via.placeholder.com/400x280/0d0e29/FFFFFF?text=Retro+Runner",
    link: "#",
  },
];

let currentIndex = 0;

const gameCategory = document.getElementById("gameCategory");
const gameTitle = document.getElementById("gameTitle");
const gameDesc = document.getElementById("gameDesc");
const gameImage = document.getElementById("gameImage");
const gameLink = document.getElementById("gameLink");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

// Cria os pontos (dots) de navegação
function createDots() {
  dotsContainer.innerHTML = "";
  games.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => showGame(index));
    dotsContainer.appendChild(dot);
  });
}

// Atualiza o jogo visível na tela
function showGame(index) {
  currentIndex = index;
  const game = games[currentIndex];

  gameCategory.innerText = game.category;
  gameTitle.innerText = game.title;
  gameDesc.innerText = game.desc;
  gameImage.src = game.image;
  gameLink.href = game.link;

  createDots();
}

// Eventos dos botões de anterior e próximo
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + games.length) % games.length;
  showGame(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % games.length;
  showGame(currentIndex);
});

// Inicialização
showGame(currentIndex);
