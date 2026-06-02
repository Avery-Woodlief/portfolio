async function navbarTransition() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {

      document.querySelectorAll(".nav-link")
        .forEach(l => l.classList.remove("active"));

      link.classList.add("active");
    });
  });
}

function setActiveNavbarLink() {
    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}

async function loadNavbar() {

    const res = await fetch("../navigation-header/nav.html");

    const html = await res.text();

    document.getElementById("navbar").innerHTML = html;
    setActiveNavbarLink();
}

loadNavbar();

document.addEventListener("DOMContentLoaded", loadNavbar);
