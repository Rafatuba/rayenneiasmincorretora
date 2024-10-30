// Carrega o arquivo JSON
fetch("assets/house.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Rede não está acessível");
    }
    return response.json();
  })
  .then((data) => {
    // Inicializa a animação Lottie
    const animacaoContainer = document.getElementById("animacao");
    const animacao = lottie.loadAnimation({
      container: animacaoContainer, // onde a animação será exibida
      renderer: "svg", // tipo de renderização
      loop: true, // se deve loopar
      autoplay: true, // se deve começar automaticamente
      animationData: data, // os dados da animação
    });
  })
  .catch((error) => {
    console.error("Erro ao carregar o JSON:", error);
  });

// Carrega o arquivo JSON(mapa)
fetch("map.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Rede não está acessível");
    }
    return response.json();
  })
  .then((data) => {
    // Inicializa a animação Lottie
    const animacaoContainer = document.getElementById("mapa");
    const animacao = lottie.loadAnimation({
      container: animacaoContainer, // onde a animação será exibida
      renderer: "svg", // tipo de renderização
      loop: true, // se deve loopar
      autoplay: true, // se deve começar automaticamente
      animationData: data, // os dados da animação
    });
  })
  .catch((error) => {
    console.error("Erro ao carregar o JSON:", error);
  });

function abrirWhatsapp(url) {
  window.open(url, "_blank");
}
