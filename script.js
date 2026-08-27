const games = [
  {
    category: "A CATEGORIA DO JOGO",
    title: "NOME DO JOGO",
    desc: "SOBRE O JOGO.",
    image: "https://via.placeholder.com/400x280/1D1F5A/FFFFFF?text=Math+Matrix",
    info: "INFORMAÇÕES DO JOGO",
    link: "#",
  },
  {
    category: "A CATEGORIA DO JOGO",
    title: "NOME DO JOGO",
    desc: "SOBRE O JOGO.",
    image: "https://via.placeholder.com/400x280/1D1F5A/FFFFFF?text=Math+Matrix",
    info: "INFORMAÇÕES DO JOGO",
    link: "#",
  },
  {
    category: "PORCENTAGEM",
    title: "Percent Soul",
    desc: "Uma aula de revisão, um dia antes da prova. O protagonista dorme e vai parar em um pesadelo com inimigos da matemática e batalhas no estilo bullet hell, inspiradas em Undertale.",
    image:"PercentSoul.jpg",
    info: "DISNPONÍVEL PARA CELULAR E COMPUTADOR",
    link: "https://percentsoul.vercel.app/",
  },
  {
    category: "PLANO CARTESIANO",
    title: "Mira no Queijo",
    desc: "Em meio à disputa pela sobrevivência no esgoto, os calangos surgem e levam o queijo dos ratos, dando início a uma perseguição. Para reconquistar o que foi perdido, os ratos precisarão contar com seus conhecimentos de plano cartesiano, analisando posições e quadrantes para localizar seus adversários e acertar os alvos.",
    image:"rat.jpg",
    info: "DISPONÍVEL APENAS NO COMPUTADOR",
    link: "https://ratgame-azure.vercel.app",
  },
  {
    category: "RAZÃO E PROPORÇÃO",
    title: "Reino das Proporções",
    desc: "O equilíbrio de um mundo foi ameaçado pelo Rei das Trevas, e você assume o papel do herói encarregado de deter esse vilão. Ao longo da jornada, é preciso enfrentar inimigos e resolver desafios de razão e proporção para se aproximar do confronto final no castelo, derrotar o vilão e restaurar a harmonia matemática do reino.",
    image:"reino.jpg",
    info: "DISPONÍVEL APENAS NO COMPUTADOR",
    link: "https://reinodasproporcoes.vercel.app/",
  },
];

let currentIndex = 0;

const gameCategory = document.getElementById("gameCategory");
const gameTitle = document.getElementById("gameTitle");
const gameDesc = document.getElementById("gameDesc");
const gameImage = document.getElementById("gameImage");
const gameInfo = document.getElementById("gameInfo");
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
  gameInfo.innerText = game.info;
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
