let navbarToggle = document.querySelector(".navbar .hamburger-menu");
let sidebar = document.querySelector(".header .sidebar");
let menu = document.querySelector(".sidebar-list");

navbarToggle.addEventListener("click", toggleClass);
function toggleClass() {
    navbarToggle.classList.toggle('open');
    sidebar.classList.toggle('open')
}

menu.addEventListener("click", addActiveClass)
function addActiveClass(event) {
    let target = event.target;

    // remove all active class
    let items = document.querySelectorAll(".sidebar-list .sidebar-item");
    items.forEach((item) => {
        item.classList.remove("active");
    })

    // add class to target
    target.classList.add("active")
}
