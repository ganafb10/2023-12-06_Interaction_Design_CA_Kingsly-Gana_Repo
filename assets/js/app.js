
(() => {
  // Get menu button icon
  const mainMenu = document.querySelector("#mainMenu");
  const menuSideBar = document.querySelector("#menuSidebar");

  const menuOpenIcon = document.querySelector("#menuBarIcon");
  const menuBackIcon = document.querySelector("#menuBackIcon");

   menuBackIcon.classList.toggle("display-none-icon");

  // Toggle menu open/close
  const toggleMenu = (e) => {
    e.preventDefault();
    menuSideBar.classList.toggle("open");
    menuOpenIcon.classList.toggle("display-none-icon");
    menuBackIcon.classList.toggle("display-none-icon");
  };

  // Set click event listener on the menu button icon
  mainMenu.addEventListener("click", toggleMenu);
})();
