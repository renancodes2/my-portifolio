document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  const toggleMenu = () => {
    menu.classList.toggle("hidden");
  };
  menuButton.addEventListener("click", toggleMenu);

  document.addEventListener("click", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
      menu.classList.add("hidden");
    }
  });
  const menuLinks = menu.querySelectorAll("li");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
});