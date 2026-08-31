const games = [
  {
    category: "POTENCIAÇÃO E RADICIAÇÃO",
    title: "EXPONENTIA",
    desc: "Quatro robôs heróis são ativados para salvar a Exponentia da destruição.",
    image: "exponentia-capa.png",
    info: "DISPONÍVEL APENAS NO COMPUTADOR",
    link: "https://exponentia.vercel.app",
  },
  {
    category: "FRAÇÃO",
    title: "FRACTION SPIRE",
    desc: "Fraction Spire é um jogo de aventura e estratégia onde você enfrenta inimigos em batalhas desafiadoras usando frações, cartas e habilidades especiais. Resolva desafios com frações, desvie de ataques e avance pela torre enquanto testa seus conhecimentos e suas estratégias.",
    image: "FractionSpire-capa.jpeg",
    info: "DISPONÍVEL PARA CELULAR E COMPUTADOR",
    link: "https://projeto-social-bay.vercel.app/",
  },
  {
    category: "PORCENTAGEM",
    title: "Percent Soul",
    desc: "Uma aula de revisão, um dia antes da prova. O protagonista dorme e vai parar em um pesadelo com inimigos da matemática e batalhas no estilo bullet hell, inspiradas em Undertale.",
    image:"PercentSoul.jpg",
    info: "DISPONÍVEL PARA CELULAR E COMPUTADOR",
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
    info: "DISPONÍVEL PARA CELULAR E COMPUTADOR",
    link: "https://reinodasproporcoesalpha.vercel.app/",
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
