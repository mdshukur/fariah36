document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    document.querySelectorAll(".nav-link").forEach(link => {

        let href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

});