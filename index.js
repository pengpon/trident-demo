let navbarToggle = document.querySelector(".navbar .hamburger-menu");
let sidebar = document.querySelector(".navbar .sidebar");

navbarToggle.addEventListener("click", toggleClass);

function toggleClass() {
    navbarToggle.classList.toggle('open');
    sidebar.classList.toggle('open')
}