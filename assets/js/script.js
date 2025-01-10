document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  // Alternar o menu ao clicar no botão
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Ocultar o menu ao clicar em um link
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (!menu.classList.contains("lg:flex")) {
        menu.classList.add("hidden");
      }
    });
  });
});