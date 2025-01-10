document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    menu.classList.toggle("hidden");
  };

  // Abrir/fechar o menu ao clicar no botão
  menuButton.addEventListener("click", toggleMenu);

  // Fechar o menu ao clicar em qualquer lugar fora dele ou em um link
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
      menu.classList.add("hidden");
    }
  });

  // Fechar o menu ao clicar em um link dentro dele
  const menuLinks = menu.querySelectorAll("li");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
});